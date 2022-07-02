import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>

        <div className="container footer__container">
            <div className="footer__nav">
                <div className="footer__lists">
                    <h2 className="our__service--title">Our Branches</h2>
    
                    <ul className="footer__list">
                        <li><FontAwesomeIcon icon="fa-location-dot"></FontAwesomeIcon>  India</li>
                        <li><FontAwesomeIcon icon="fa-location-dot"></FontAwesomeIcon>  Japan</li>
                        <li><FontAwesomeIcon icon="fa-location-dot"></FontAwesomeIcon>  France</li>
                        <li><FontAwesomeIcon icon="fa-location-dot"></FontAwesomeIcon>  Russia</li>
                        <li><FontAwesomeIcon icon="fa-location-dot"></FontAwesomeIcon>  USA</li>
                    </ul>
                </div>   

                <div className="footer__lists">
                    <h2 className="our__service--title">Quick Links</h2>
    
                    <ul className="footer__list">
                        <li><Link to="/"><FontAwesomeIcon icon="fa-arrow-right"></FontAwesomeIcon>  Home</Link></li>
                        <li><Link to="/vehicles"><FontAwesomeIcon icon="fa-arrow-right"></FontAwesomeIcon>  Vehicles</Link></li>
                        <li><Link to="/#services"><FontAwesomeIcon icon="fa-arrow-right"></FontAwesomeIcon>  Services</Link></li>
                        <li><Link to="/#features"><FontAwesomeIcon icon="fa-arrow-right"></FontAwesomeIcon>  Featured</Link></li>
                        <li><Link to="/#Review"><FontAwesomeIcon icon="fa-arrow-right"></FontAwesomeIcon>  Reviews</Link></li>
                        <li><Link to="/#contact"><FontAwesomeIcon icon="fa-arrow-right"></FontAwesomeIcon>  Contact</Link></li>
                    </ul>
                </div>  

                <div className="footer__lists">
                    <h2 className="our__service--title">Phone</h2>
    
                    <ul className="footer__list">
                        <li><FontAwesomeIcon icon="fa-phone-flip"></FontAwesomeIcon> +123-456-7890</li>
                        <li><FontAwesomeIcon icon="fa-phone-flip"></FontAwesomeIcon>+111-222-3333</li>
                        <li><FontAwesomeIcon icon="fa-envelope"></FontAwesomeIcon> Shaikhanas@gmail.com</li>
                        <li><FontAwesomeIcon icon="fa-location-dot"></FontAwesomeIcon> Mumbai, India = 400104</li>
                    </ul>
                </div>  

                <div className="footer__lists">
                    <h2 className="our__service--title">Contact Info</h2>
    
                    <ul className="footer__list">
                        <li><FontAwesomeIcon icon="fab fa-facebook"></FontAwesomeIcon> Facebook</li>
                        <li><FontAwesomeIcon icon="fab fa-twitter"></FontAwesomeIcon> Twitter</li>
                        <li><FontAwesomeIcon icon="fab fa-instagram"></FontAwesomeIcon> Instagram</li>
                        <li><FontAwesomeIcon icon="fab fa-linkedin"></FontAwesomeIcon> Linkedin</li>
                        <li><FontAwesomeIcon icon="fab fa-pinterest"></FontAwesomeIcon> Pinterest</li>
                    </ul>
                </div>  

                
            </div>

            <div className="footer__Profile">
                

                <span className="copyright">&copy 2022 TopGear Motors All Rights Reserved.</span>

                <div className="social__icons">
                    <div className="icon social__icon social__icon--facebook">
                        <FontAwesomeIcon icon="fab fa-facebook-f"></FontAwesomeIcon>
                    </div>
                    <div className="icon social__icon">
                        <FontAwesomeIcon icon="fab fa-twitter"></FontAwesomeIcon>
                    </div>
                    <div className="icon social__icon">
                        <FontAwesomeIcon icon="fab fa-youtube"></FontAwesomeIcon>
                    </div>

                </div>

            </div>
            
        </div>        

    </footer>
    );
}

export default Footer;
