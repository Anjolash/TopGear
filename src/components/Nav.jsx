import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import { Alert, Dropdown } from "react-bootstrap";


const Nav = ({ numberOfItems}) => {
    const emailRef = useRef();
    const emailRef2 = useRef();
    const passwordRef = useRef()
    const passwordRef2 = useRef();
    const passwordConfirmRef = useRef()
    const { signup, login, logout,  currentUser } = useAuth()
    const [error, setError] = useState("")
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [isLoginButtonVisible, setIsLoginButtonVisible] = useState(true)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    let isMenuOpen = false;

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }

        try{
            setError("")
            setLoading(true)
            console.log("Creating user with email:", emailRef.current.value);
            await signup(emailRef.current.value, passwordRef.current.value);
            setIsSignUpOpen(prevState => !prevState);
        }
        catch(error){
            console.log("signup error", error)
            setError("Failed to create an account")
        }
        setLoading(false)
    }



    async function handleSubmit2(e){
        e.preventDefault()
        try{
            setError("")
            setLoading(true)
            console.log("logging in user with email:", emailRef2.current.value);
            await login(emailRef2.current.value, passwordRef2.current.value)
            toggleLoginForm()
        }
        catch(error){
            console.log("signup error", error)
            setError("Failed to log in", error)
        }
        setLoading(false)
    }

    async function handleLogout(e){
        e.preventDefault()
        try{
            setError("")
            setLoading(true)
            await logout()
        }
        catch(error){
            console.log("logout error", error)
        }
    }

    function toggleLoginForm(){
        if (isLoginOpen){
            setIsLoginOpen(prevState => !prevState);
            return document.body.classList.remove("login__form--open")
        }
        setIsLoginOpen(prevState => !prevState);
        document.body.classList += " login__form--open";
    }

    function toggleSignUpForm(){
        if (isLoginOpen){
            setIsLoginOpen(prevState => !prevState);
            document.body.classList.remove("login__form--open")
        }
        if (isSignUpOpen){
            setIsSignUpOpen(prevState => !prevState);
            return document.body.classList.remove("signup__form--open")
        }
        setIsSignUpOpen(prevState => !prevState);
        document.body.classList += " signup__form--open";
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
                {!currentUser && (<button className="login button-visible" onClick={toggleLoginForm}>Login</button>)}
                {currentUser && (
                    <Dropdown>
                        <Dropdown.Toggle  id="dropdown-basic" className='dropdown-label toggle-no-arrow'>
                            {currentUser.email.charAt(0)}
                        </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className="login2 button-visible" onClick={handleLogout}>Log Out</Dropdown.Item>
                        <Dropdown.Item><Link to="/update-profile">Update Profile</Link></Dropdown.Item> 
                    </Dropdown.Menu>
                    </Dropdown>
                    )
                }
                <button className="btn__menu" onClick={toggleMenu}>
                    <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
                </button>  
                {!currentUser && (<button className="btn__login" onClick={toggleLoginForm}>
                    <FontAwesomeIcon icon="user"></FontAwesomeIcon>
                </button>)}
                <div className="cart__responsive">  
                    <Link to="/cart" className="nav__link--cart">
                        <FontAwesomeIcon icon="shopping-cart" />
                    </Link>
                    { 
                        numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>
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
                    <div className="df">
                        <form className="login__form" onSubmit={handleSubmit2}>
                            <h3 className="section__header">user login</h3>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <input type="email" placeholder="email" ref={emailRef2} className="login__form--input" />
                            <input type="password" placeholder="password" ref={passwordRef2} className="login__form--input" />
                            <p className="login__para"><Link to="/forgot-password">forgot your password?</Link> </p>
                            <button disabled={loading} className="login__form--button">Login</button>
                            <p className="login__para">or login with</p>
                            <div className="other__buttons--login">
                                <button> google </button>
                                <button> facebook </button>
                            </div>
                            <p className="login__para"> don't have an account?  </p>
                        </form>
                        <button className='login button-visible' onClick={toggleSignUpForm}> Sign Up </button>
                    </div>    
                </div>
                <div className="signup__form--container">
                        <span className="close__form click" onClick={toggleSignUpForm}>
                            <FontAwesomeIcon className='button__close' icon="times" ></FontAwesomeIcon>
                        </span> 
                        <form className="signup__form" onSubmit={handleSubmit}>
                            <h3 className="section__header">Sign Up</h3>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <input type="email" placeholder="email" ref={emailRef} className="signup__form--input" />
                            <input type="password" placeholder="password" ref={passwordRef} className="signup__form--input" />
                            <input type="password" placeholder="confirm password" ref={passwordConfirmRef} className="signup__form--input" />
                            <button disabled={loading} className="signup__form--button">Sign Up</button>
                            <p className="signup__para">or sign up with</p>
                            <div className="other__buttons--login">
                                <button> google </button>
                                <button> facebook </button>
                            </div>
                        </form>
                    </div>
            </div>    
        </nav>
        
    );
}

export default Nav;
