import React from 'react'
import { useState } from 'react';
import "./ContactForm.css"

function ContactForm() {

    const [success, setSuccess] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        access_key: '8f7cd656-fec0-4e74-8279-c70496d238cf'
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = JSON.stringify(formData);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: data
        }).then(res => res.json())
            .then(data => {
                setSuccess(true)
                setFormData({
                    ...formData,
                    name: '',
                    email: '',
                    message: ''
                })
                setTimeout(() => {
                    setSuccess(false)
                }, 2000);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='contact-form-container'>
            <form onSubmit={handleSubmit}>
                <input name='name' value={formData.name} onChange={handleChange} type='text' placeholder='Enter your Name' />
                <input name='email' value={formData.email} onChange={handleChange} type='text' placeholder='Enter your Email Address' />
                <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Enter your message' cols='30' rows='10'></textarea>
                <button className='button' type='submit'>Submit</button>
            </form>
            {success && <p className='success-message'>Form submitted successfully!</p>}
        </div>
    )
}

export default ContactForm