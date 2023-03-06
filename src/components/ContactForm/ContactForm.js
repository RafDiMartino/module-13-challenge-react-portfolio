import React from 'react'
import { useState } from 'react';
import "./ContactForm.css"

function ContactForm() {

    // State to handle the success message
    const [success, setSuccess] = useState(false)

    // State to handle the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        access_key: '8f7cd656-fec0-4e74-8279-c70496d238cf'
    })

    //Function that handles the onchange event
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    //Function that handles the form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Connecting to Web3Form api for handling submission email to my email address
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