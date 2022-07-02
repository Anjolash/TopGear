import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';

const Nav = ({ numberOfItems}) => {
    let isMenuOpen = false;
    let isLoginOpen = false;

    function toggleLoginForm(){
        if (isLoginOpen){
          isLoginOpen = false;
          return document.body.classList.remove("login__form--open")
      
        }
      
        isLoginOpen = true;
        document.body.classList += " login__form--open";
      }
      

    function toggleMenu() {
        if (isMenuOpen){
            isMenuOpen = false;
            return document.body.classList.remove("menu--open")
          }
        
          isMenuOpen = true;
        
        document.body.classList += " menu--open"
    }
    
    return (
        
        <nav>
            <div className="nav__container">
                <figure className="logo">
                    <span>Top<span className="grey">Gear</span></span>
                </figure>

                <ul className="nav__links">
                    <li className="nav__link">
                        <Link to="/" className="nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black">Home</Link>
                    </li>

                    <li className="nav__link">
                        <Link to="/vehicles" className="nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black">Vehicles</Link>
                    </li>

                    <li className="nav__link" onClick="toggleModal()">
                        <Link to="/#services" className="nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black" >Services</Link>
                    </li>

                    <li className="nav__link" onClick="toggleModal()">
                        <Link to="/#featured" className="nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black" >Featured</Link>
                    </li>

                    <li className="nav__link" onClick="toggleModal()">
                        <Link to="/#Review" className="nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black" >Reviews</Link>
                    </li>

                    <li className="nav__link" onClick="toggleModal()">
                        <Link to="/#contact" className="nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black" >Contact</Link>
                    </li>

                    <li className="nav__icon">
                        <Link to="/cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart" />

                        </Link>
                        { numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>
                        }
                        
                    </li>

                </ul>
                <button className="login" onClick={toggleLoginForm}>Login</button>
                <button className="btn__menu" onClick={toggleMenu}>
                    
                    <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
                </button>  
                
                <button className="btn__login" onClick={toggleLoginForm}>
                    <FontAwesomeIcon icon="user"></FontAwesomeIcon>
                </button>
                <div className="cart__responsive">  
                    <Link to="/cart" className="nav__link--cart">
                                <FontAwesomeIcon icon="shopping-cart" />

                            </Link>
                            { numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>
                            }

                </div>        
                

                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close"  onClick={toggleMenu}>
                        
                        <FontAwesomeIcon icon="times"></FontAwesomeIcon>
                    </button>  
                    <ul className="menu__links" >
                        <li className="menu__list">
                            <Link to="/" className="menu__link " onClick={toggleMenu}>Home</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/vehicles" className="menu__link " onClick={toggleMenu}>Vehicles</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/#services" className="menu__link " onClick={toggleMenu}>Services</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/#features" className="menu__link " onClick={toggleMenu}>Featured</Link>

                        </li>
                        <li className="menu__list">
                            <Link to="#Review" className="menu__link " onClick={toggleMenu}>Reviews</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/#contact" className="menu__link " onClick={toggleMenu}>Contact</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className="login__form--container">
                    
                    <span className="close__form click" onClick={toggleLoginForm}>
                        <FontAwesomeIcon className='button__close' icon="times" ></FontAwesomeIcon>
                    </span>
                        
                   
                    <form className="login__form" >
                        <h3 className="section__header">user login</h3>
                        <input type="email" placeholder="email" className="login__form--input" />
                        <input type="password" placeholder="password" className="login__form--input" />
                        <p className="login__para"> forget your password <a href="#">click here</a> </p>
                        <button className="login__form--button">Login</button>
                        <p className="login__para">or login with</p>
                        <div className="other__buttons--login">
                            <button> google </button>
                            <button> facebook </button>
                        </div>
                        <p className="login__para"> don't have an account <a href="#">create one</a> </p>
                    </form>

                </div>
            </div>    
        </nav>
        
    );
}

export default Nav;
