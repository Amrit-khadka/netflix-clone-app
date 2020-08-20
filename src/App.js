import React from 'react';
import Row from './Row';
import requests from './requests';
import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (

      <div className="App">
        <Navbar />
        <Banner />

        <Row title = "NETFLIX ORIGINALS" 
             fetchUrl = {requests.fetchNetflixOriginals}
             isLargeRow //is equal to with isLargeRow = {true} ,default 'true' 
        />
        <Row title = "Trending Now" fetchUrl = {requests.fetchTrending} />
        <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated} />
        <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
        <Row title = "Comedy Movies" fetchUrl = {requests.fetchComdeyMovies}/>
        <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
        <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
        <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
      </div>
  );
}

export default App;
