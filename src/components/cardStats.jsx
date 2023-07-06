import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CardStats = () => {
    return (
        <section id="card__stats">
            <div className="container">
                <div className="row">
                    <div className="card__container">
                        <div className="cardnotboot">
                            <div className="icon">
                                <FontAwesomeIcon icon="house"></FontAwesomeIcon>
                            </div>
                            <div className="stats">
                                <span className="yellow">150+</span>
                                <span>Branches</span>
                            </div>
                        </div>

                        <div className="cardnotboot">
                            <div className="icon">
                                <FontAwesomeIcon icon="car"></FontAwesomeIcon>
                           </div>
                            <div className="stats">
                                <span className="yellow">150+</span>
                                <span>Branches</span>
                            </div>
                        </div>

                        <div className="cardnotboot">
                            <div className="icon">
                                <FontAwesomeIcon icon="users"></FontAwesomeIcon>
                          </div>
                            <div className="stats">
                                <span className="yellow">150+</span>
                                <span>Branches</span>
                            </div>
                        </div>

                        <div className="cardnotboot">
                            <div className="icon">
                                <FontAwesomeIcon icon="car"></FontAwesomeIcon>
                            </div>
                            <div className="stats">
                                <span className="yellow">150+</span>
                                <span>Branches</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    );
}

export default CardStats;
