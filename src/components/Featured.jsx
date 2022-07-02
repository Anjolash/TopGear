import React from 'react';
import { cars } from "../data";
import FeaturedCar from './ui/FeaturedCar';
import { Navigation, Pagination, Scrollbar, Autoplay,  A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Featured = () => {
    const handleClick = (id) => {
        const anchor = document.querySelector('#featured')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
     }
    return (
        <section id="featured">
            <div className="container">
                <div className="row">
                    <h2 className="section__header"><span className="gold">Featured</span> Cars</h2>
                    <div className="featured__cars">
                        
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
                        {cars.slice(0,5)
                            .map((car) => (
                                <SwiperSlide>
                                    <FeaturedCar car={car} key={car.id}/>
                                </SwiperSlide>    

                            ))} 
                        </Swiper>
                    </div>     

                    <div className="featured__cars">

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
                          {cars.slice(5,10)
                              .map((car) => (
                                  <SwiperSlide>
                                      <FeaturedCar car={car} key={car.id}/>
                                  </SwiperSlide>    

                              ))} 
                        </Swiper>
                          
                        
                            
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Featured;
