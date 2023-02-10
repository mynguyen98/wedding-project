import React from 'react'
import homeMain from '../assets/home-image/home-main.png'
import menuNav from '../assets/home-image/menu-nav.svg'
const Hero = ({ setIsNavOpen }) => {
  return (
    <div className='text-center pt-20 pb-20 relative section-mb' id='hero'>
      <button className='button-nav fixed' onClick={() => setIsNavOpen(true)}>
        <img src={menuNav} alt='' />
      </button>
      <h2 className='text-main'>Thân mời tới dự bữa tiệc</h2>
      <h1>Việt Anh & Phương Anh</h1>
      <div className='flex justify-center pt-3'>
        <img src={homeMain} alt='' />
      </div>
      <h1 className='wind-song big-size text-9xl'>18.02</h1>
      <div>
        <h1>
          SAVE<span className='wind-song text-main text-2xl'>the</span>DATE
        </h1>
      </div>
    </div>
  )
}

export default Hero
