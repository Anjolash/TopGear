import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Ratings from './Ratings';



const Reviewjs = ({ customerReviews }) => {
    return (
        <div className="client__review">
            
                <figure className="client--img--wrapper">
                    <img src={require('../../assets/' + customerReviews.url )} alt="" className="client--img" />
                </figure>
                <div className="review--para">
                    <p>{customerReviews.comment}                        </p>
                        <h3 className="our__service--title">{customerReviews.name}</h3>    
                    <div className="yellow">
                        <Ratings rating={customerReviews.rating} />
                    </div>
                    

                
           </div>  
        </div>   
    );
}

export default Reviewjs;
