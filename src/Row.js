import React, { useState, useEffect  } from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Img_baseUrl = "https://image.tmdb.org/t/p/original";



function Row({title, fetchUrl, isLargeRow }) {
    const [movies, setMovies ] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // A snippet of code which runs based on a specific condition
    useEffect(() => {
        // if [], run once when the row loads, and don't run it again

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]);
    // whenever you used variable'fetchUrl' outside of the useEffect, you have to use 'fetchUrl' within []
    
    console.log(movies);

    const opts = {

      height: '390',
      width: '100%',
      autoplay: 1,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
      },
    };

    const handleClick = (movie) => {
      console.log('handleClicked movie' + movie)
      if(trailerUrl){
        setTrailerUrl("");
      } else {
        movieTrailer(movie?.name || "")
          .then((url) => {
            // https://www.youtube.com/watch?v=XtMThy8QKqL
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
          })
          .catch((error) => console.log(error));
      }
    };

    return (
        <div className="row">            
            <h2>{title}</h2>

            <div className="row__posters">
                {/* several row__poster(s) */}

                {movies.map( (movie) => (
                  <img key={movie.id} 
                       onClick={() => handleClick(movie)}
						            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
						            src={`${Img_baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.original_name}
						      />
                ))}

            </div>

           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> } 

        </div>

       
    )
}

export default Row
