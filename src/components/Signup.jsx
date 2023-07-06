import React, { useRef } from 'react'
import { Form, Button, Card } from "react-bootstrap"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'> Sign Up</h2>
                </Card.Body>
                <Form>
                    <Form.Group id="email">
                        
                    </Form.Group>
                </Form>
            </Card>
        </>
    )
}
