import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';
import Ratings from './Ratings';

const FeaturedCar = ({ car }) => {
    return (
        <Link to={`/vehicles/${car.id}`}>
            <div className="tile__shell  featured__car">
                
                    <div className=" popular__car">
                        <div className="car-tile--image">
                            
                                <figure className="featured__car--img--wrapper">
                                    <img src={require('../../assets/' + car.url )} alt="" className="featured__car--img" />
                                </figure>
                            
                        </div>
                        <div className="car-tile--content popular__car--features">    
                            
                            <h3 className="model__info">{car.name}</h3>

                            <div className="car__details">  
                                <span className='car__ratings'>Rating: <Ratings rating={car.rating} /></span>
                                    
                                    <Price originalPrice={car.originalPrice} salePrice={car.salePrice} />
                                    {/* <span className="price">Price: {car.salePrice ? (<span className="yellow"><span className="price--normal">${(car.originalPrice).toLocaleString('en-US')}</span>${(car.salePrice).toLocaleString('en-US')}/-</span>) : (<span className="yellow">${(car.originalPrice).toLocaleString('en-US')}/-</span>)} </span> */}
                                

                            </div>  

                            
                            
                          
                          <span className='car-tile--button'><button >More Features</button></span>
                              
                            
                        </div>    
                    </div>  
                  

             </div>
            </Link>   
        
    );
}

export default FeaturedCar;
