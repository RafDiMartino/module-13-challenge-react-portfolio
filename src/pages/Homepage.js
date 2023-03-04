import React from 'react'
import "./Homepage.css"

function Homepage() {
  return (
    <div className='homepage-container'>
      <div className='hero-section'>
        <h1>RAF DI MARTINO</h1>
        <img src="https://avatars.dicebear.com/api/male/RaffaeleDiMArtino.svg" alt="My avatar"></img>
      </div>
      <div className='brand-statement'>
        <h2>Welcome to my portfolio!!</h2>
        <p>I am a Junior Web Developer with a Bachelor’s Honours degree in Design and Applied Arts.</p>
        <p>I have been creating websites for small and large business clients. My attention to detail guarantees the quality of the final product and my good interpersonal skills help foster meaningful relationships. My creativity enables me to deliver pixel perfect webpages in HTML/CSS and JavaScript. Aswell as ensuring they adhere to W3C standards, I use also JavaScript and CSS frameworks like React, jQuery, Tailwind, Bootstrap, to deliver interactive engaging experiences.</p>
      </div>
    </div>
  )
}

export default Homepage