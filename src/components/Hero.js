import React from 'react'
import imag from "../imgs/Group.png"
const Hero = () => {
  return (
    <section className='hero'>
        <img className='img-hero' src={imag}/>
        <h1 className='head-hero'>Online Experiences</h1>
        <p className='para-hero'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </section>
  )
}

export default Hero