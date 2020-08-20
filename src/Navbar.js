import React, {useState,useEffect} from 'react'
import './Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100 ) {
        handleShow(true);
      }else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, []);


  return (
    <div className={`nav ${show && "nav_black"}`}>

        <img className="nav_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1024px-Netflix_logo.svg.png?1597659940783"
             alt="Netflix_logo"
        />

        <img className="nav_avatar"
             src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
             alt="avatar_logo"
        />

    </div>
  )
}

export default Navbar
