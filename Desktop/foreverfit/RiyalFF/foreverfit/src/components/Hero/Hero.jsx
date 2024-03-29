import React from 'react'
import './hero.css'
import FF from '../../assets/imgs/foreverfit.png'
import Ex from '../../assets/imgs/exercise.png'

const Hero = () => {
  return (
    <div className="hero-div">
      <div className="logo">
        <img src={FF}></img>
      </div>
      <div className='info'>
        <div className='column'>
          <h1> We will take <br></br> care of you</h1>
          <p>Sustain Your Health Journey</p>

        </div>
        <div className='column'>
          <img src={Ex}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
