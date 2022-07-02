import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import homeimg from '../assets/homeimg.png'

const Landing = () => {

    

    

    return (
        <section id="landing">
            <header className="header">
                <div className="container header__container">
                    <div className="row">
                        <h1 className="Title">FIND YOUR <span className="gold ">CAR</span></h1>
                        <figure className="landing__img--container">
                            <img src={homeimg} alt="" className="landing__img" />
                        </figure>
                        <Link to="/vehicles"><button className="explore">Explore Cars</button></Link>

                    </div>
                </div>
                
                


            </header>
            
            
        </section>
    );
}

export default Landing;
