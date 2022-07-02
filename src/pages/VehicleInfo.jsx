import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Ratings from '../components/ui/Ratings';
import FeaturedCar from '../components/ui/FeaturedCar';
import Price from '../components/ui/Price';


const VehicleInfo = ({cars, addToCart, cart}) => {
    const { id } = useParams();
    const car = cars.find((car) => +car.id === +id);
    
       
    
        
    
        function addBookToCart(car) {
            addToCart(car)
        }
    
        function bookExistsOnCart() {
        
            return cart.find(car => car.id === +id);
                   
    
        }
        

    return (
        <div id="vehicles__body">
           <main id="vehicles__main">
               <div className="container">
                   <div className="row recommended__cars--row">
                       <div className="vehicle__selected--top">
                           <Link to="/vehicles" className="vehicle__link">
                               <FontAwesomeIcon icon="arrow-left" />
                           </Link>
                           
                       </div>
                       <div className="vehicle__selected">
                           <figure className="vehicle__selected--figure">
                               <img src={require('../assets/' + car.url )} alt="" className="vehicle__selected--img" />
                           </figure>
                           <div className="vehicle__selected--description">
                               <h2 className="vehicle__selected--title">
                                   {car.name} <span className='vehicle__selected--subtitle'>{car.Make}</span>
                               </h2>
                               <div className="vehicle__selected--price-rating--container">
                                    <div className="vehicle__selected--price__container">
                                        <Price originalPrice={car.originalPrice} salePrice={car.salePrice} />
                                    </div>
                                    <div className="vehicle__selected--rating__container">
                                        <p className="ratingp">Rating</p>
                                        <Ratings rating={car.rating} />
                                        
                                    </div>

                                       
                                        
                               </div>
                               
                               
                               
                               
                               
                               <div className="book__summary">
                                   <h3 className="vehicle__specs--title">
                                       Features & Specs
                                   </h3>
                                   <div className="specifications">
                                        <div className="specification">
                                            <p>Transmission</p>
                                            <p>{car.gearType}</p>
                                        </div>
                                        <div className="specification">
                                            <p>Fuel</p>
                                            <p>{car.fuelType}</p>
                                        </div>
                                        <div className="specification">
                                            <p>Top Speed</p>
                                            <p>{car.topSpeed} mph</p>
                                        </div>
                                        <div className="specification">
                                            <p>Engine Type</p>
                                            <p>{car.cylinders}-cyl</p>
                                        </div>
                                        <div className="specification">
                                            <p>Gear Type</p>
                                            <p>{car.gearType}</p>
                                        </div>
                                    </div>

                                    {bookExistsOnCart() ? 
                                (
                                   <Link to={`/cart`} className="book__link">
                                     <span className='car-tile--button'><button>Check Out</button></span>
                                   </Link> 
                           
                       ) : ( <span className='car-tile--button'><button onClick={() => addBookToCart(car)}>Add To cart</button></span>)}
                               </div>
                               
                               
                           </div>
                       </div>
                   </div>
               </div>
               <div className="container">
                   <div className="row recommended__cars--row">
                       <div className="vehicle__selected--top">
                           <h2 className="vehicle__selected--title--recommended">
                               Recommended for you
                           </h2>
                       </div>
                       <div className="vehicles">
                           {cars.filter((car) => car.rating === 5 && car.id !== +id)
                           .slice(0, 4)
                           .map((car) => (
                               <FeaturedCar car={car} key={car.id} addBookToCart={addBookToCart} bookExistsOnCart={bookExistsOnCart()} />
                           ))}
                       </div>
                   </div>

               </div>
           </main>
       </div>
    );
}

export default VehicleInfo;
