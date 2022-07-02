import React, { useState } from 'react';
import car1 from '../assets/car-1.png'
import Car from './ui/Car';
import { cars } from "../data";
import { Navigation, Pagination, Scrollbar, Autoplay,  A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Popular = ({ cars: initialCars }) => {
    const [car, setCars] = useState(initialCars)

    
    
    document.addEventListener("DOMContentLoaded", function(event){
        var swiper = new swiper(".popular__cars", {
          grabCursor: true,
          centeredSlides: true,
          spaceBetween: 20,
          loop: true,
          
          autoplay: {
              delay: 95000,
              disableOnInteraction: false,
            },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
              
            },
      
            768: {
              slidesPerView: 2,
              
            },
            1024: {
              slidesPerView: 3,
              
            },
          },
        })

    
    })
    


    return (
        <section id="popular">
        <div className="container">
            <div className="row">
                <h2 className="section__header">Popular <span className="gold">Vehicles</span>
                </h2>
            

                <div className="popular__cars">
                    
                        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                          spaceBetween={50}
                          
                          breakpoints={{
                            0: {
                              slidesPerView: 1,
                              
                            },
                      
                            768: {
                              slidesPerView: 2,
                              
                            },
                            1024: {
                              slidesPerView: 3,
                              
                            },
                          }}
                          centeredSlides= {true}
                          grabCursor={true}
                          loop={true}
                          autoplay={
                            {delay: 6500,
                            disableOnInteraction:false}
                          }
                          
                          pagination={{ clickable: true }}
                          
                          
                            shouldSwiperUpdate>
                            {cars.filter((car) => car.rating===5)
                            .slice(0,4)
                            .map((car) => (
                              <SwiperSlide>
                                 <Car car={car} key={car.id}/>
                              </SwiperSlide>   
    
                            ))}   
                        </Swiper> 
                             

                         
            
                        


                     
                    <div className="swiper-pagination"></div>    
                </div>
            </div>    
        </div>
    </section>
    );
}

export default Popular;
