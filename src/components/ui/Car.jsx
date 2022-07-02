import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';

const Car = ({ car }) => {
    return (
        
            

                <div className=" popular__vehicle">
                    
                    <figure className="popular__vehicle--img--wrapper">
                        <img src={require('../../assets/' + car.url )} alt="" className="popular__car--img" />
                    </figure>
                    <div className="popular__car--features">
                        <h3 className="car__name">{car.name}</h3>
                        <span className="price">Price: {car.salePrice ? (<span className="yellow">${(car.salePrice).toLocaleString('en-US')}/-</span>) : (<span className="yellow">${(car.originalPrice).toLocaleString('en-US')}/-</span>)} </span>
                        <hr />
                        <ul className="popular__features">
                            { car.year >= 2022 ? (<li className="popular__feature">New</li>) : (<li className="popular__feature"></li>)}
                            
                            <li className="popular__feature"><FontAwesomeIcon icon="circle"></FontAwesomeIcon>         {car.year}</li>
                            <li className="popular__feature"><FontAwesomeIcon icon="circle"></FontAwesomeIcon>            {car.gearType}</li>
                            <li className="popular__feature"><FontAwesomeIcon icon="circle"></FontAwesomeIcon>            {car.fuelType}</li>
                            <li className="popular__feature"><FontAwesomeIcon icon="circle"></FontAwesomeIcon>            {car.topSpeed}mph</li>

                            
                        </ul>
                        <Link to="/vehicles"><button className="explore">Explore Cars</button></Link>

                    </div>
                </div>
           
               
           
    );
}

export default Car;
