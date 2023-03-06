import React from 'react'
import { useState } from 'react';
import "./ContactForm.css"

function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <div className='contact-form-container'>
            <form onSubmit={handleSubmit}>
                <input name='name' onChange={handleChange} type='text' placeholder='Enter your Name' />
                <input name='email' onChange={handleChange} type='text' placeholder='Enter your Email Address' />
                <textarea name='message' onChange={handleChange} placeholder='Enter your message' cols='30' rows='10'></textarea>
                <button className='button' type='submit'>Submit</button>
            </form> 
        </div>
    )
}

export default ContactForm