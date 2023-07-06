import React, { useRef, useState } from 'react'
import { Container, Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"


export default function ForgotPassword() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmailAddress, createNewPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate =  useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }

        const promises = []

        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmailAddress(emailRef.current.value))
        }
        if(passwordRef.current.value){
            promises.push(createNewPassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            navigate('/')
        }).catch((error) => {
            console.log('Error:', error); // Log the error to the console
            setError('Failed to update account: ' + error.message); // Display the error message to the user
        }).finally(() =>{
            setLoading(false)
        })
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
                        <Form.Control type="email" ref={emailRef} placeholder='Leave blank to keep the same' required defaultValue={currentUser.email}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder='Leave blank to keep the same'/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} placeholder='Leave blank to keep the same' />
                    </Form.Group>
                    <Button disabled={loading} className='w-100' type='submit'>Update Profile</Button>
                </Form>
            </Card.Body>
        </Card>
    </Container>    
    </>
  )
}
