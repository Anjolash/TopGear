import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay,  A11y } from 'swiper';
import { customerReviews } from '../data';
import Reviewjs from './ui/Reviewjs';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Review = () => {

    

    return (
        <section id="Review">
            <div class="container">
                <div class="row">
                    <h1 class="section__header">Client's <span class="gold">Review</span></h1>
                    <div class="client__reviews">
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
                        {customerReviews.slice(0,6)
                        .map((customerReviews) => (
                            <SwiperSlide>
                                <Reviewjs customerReviews={customerReviews} key={customerReviews.id} />
                            </SwiperSlide>
                        ))} 

                        </Swiper>
            
                              

                            

                            
                        
                        
                    </div>
                            
                </div>
            </div>

        </section>
    );
}

export default Review;
