import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Services = () => {
   
    return (
        <section id="services">
        <div className="container">
            <div className="row">
                <h2 className="section__header">Our <span className="gold">Services</span></h2>
                <div className="our__services">
                    <div className="our__service">
                        <div className="icon services__icon">
                            <FontAwesomeIcon icon="car"></FontAwesomeIcon>   </div>
                        <h3 className="our__service--title">Car Selling</h3>
                        <p className="our__services--para">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                             <button>Read More</button>     

                    </div>

                    <div className="our__service">
                        <div className="icon services__icon">
                            <FontAwesomeIcon icon="screwdriver-wrench"></FontAwesomeIcon>    </div>
                        <h3 className="our__service--title">Parts Repair</h3>
                        <p className="our__services--para">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                             <button>Read More</button>     

                    </div>

                    <div className="our__service">
                        <div className="icon services__icon">
                            <FontAwesomeIcon icon="car-burst"></FontAwesomeIcon>    </div>
                        <h3 className="our__service--title">Car Repair</h3>
                        <p className="our__services--para"> Repellendus quis minima doloremque fugiat ullam perspiciatis reiciendis dolorem nulla perferendis.</p>
                             <button >Read More</button>     

                    </div>

                    <div className="our__service">
                        <div className="icon services__icon">
                            <FontAwesomeIcon icon="car-battery"></FontAwesomeIcon>   </div>
                        <h3 className="our__service--title">Battery Replacement</h3>
                        <p className="our__services--para">
                             Repellendus quis minima doloremque fugiat ullam perspiciatis reiciendis dolorem nulla perferendis.</p>
                             <button >Read More</button>     

                    </div>

                    <div className="our__service">
                        <div className="icon services__icon">
                            <FontAwesomeIcon icon="gas-pump"></FontAwesomeIcon>    </div>
                        <h3 className="our__service--title">Oil Change</h3>
                        <p className="our__services--para">
                             Repellendus quis minima doloremque fugiat ullam perspiciatis reiciendis dolorem nulla perferendis.</p>
                             <button>Read More</button>     

                    </div>

                    <div className="our__service">
                        <div className="icon services__icon">
                            <FontAwesomeIcon icon="headset"></FontAwesomeIcon>    </div>
                        <h3 className="our__service--title">24 hour support</h3>
                        <p className="our__services--para">
                             Repellendus quis minima doloremque fugiat ullam perspiciatis reiciendis dolorem nulla perferendis.</p>
                        <button>Read More</button>     

                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default Services;
