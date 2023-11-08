import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO GNDUPortal' title='Best website for the students' />
            <p>Best website for the students of Guru Nanak Dev University, Amritsar</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
