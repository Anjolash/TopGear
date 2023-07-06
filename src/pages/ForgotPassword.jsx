import React, { useRef, useState } from 'react'
import { Container, Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    let isLoginOpen = false;
    let isSignUpOpen = false;

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setMessage('')
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("check your email for further instructions")
        }
        catch(error){
            setError("Failed to reset Password")
        }
        setLoading(false)
    }


    function toggleLoginForm(){
        if (isLoginOpen){
            isLoginOpen = false;
            return document.body.classList.remove("login__form--open")
        }
        isLoginOpen = true;
        document.body.classList += " login__form--open";
    }

    function toggleSignUpForm(){
        if (isLoginOpen){
            isLoginOpen = false;
            document.body.classList.remove("login__form--open")
        }
        if (isSignUpOpen){
            isSignUpOpen = false;
            return document.body.classList.remove("signup__form--open")
        }
        isSignUpOpen = true;
        document.body.classList += " signup__form--open";
    }

return (
    <>
    <Container className='mt-5 mb-4' style={{ maxwidth: "200px", minheight: "100vh"}}>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className='w-100' type='submit'>Reset Password</Button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <p className="login__para"> don't have an account?  </p>
                    <button className='login' onClick={toggleSignUpForm}> Sign Up </button>
                </div>
            </Card.Body>
        </Card>
    </Container>    
    </>
  )
}
