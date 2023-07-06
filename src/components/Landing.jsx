import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeimg from '../assets/homeimg.png';
import homeVid from '../assets/newvid.mp4';


const Landing = () => {
   
    return (
        <section id="landing">
            <header className="header">
                <div className="container header__container">
                    <div className="row hidden">
                        <h1 className="Title">Unleash Your Automotive <span className="gold ">Passion</span></h1>
                        <figure className="landing__img--container">
                            <img src={homeimg} alt="" className="landing__img" />
                        </figure>
                        <Link to="/vehicles"><button className="explore">Explore Cars</button></Link>
                    </div>
                    <video autoPlay muted loop id="myVideo">
                        <source src={ homeVid } type="video/mp4" preload="auto" />
                    </video>
                </div>
            </header>
            
            
        </section>
    );
}

export default Landing;
