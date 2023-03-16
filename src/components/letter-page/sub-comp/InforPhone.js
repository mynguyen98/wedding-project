import React from 'react'
import phoneMain from '../../../assets/home-image/phone-main.svg'
import phoneSecond from '../../../assets/home-image/phone-second.svg'

const InforPhone = ({ title, name, phoneNumber, phoneColor }) => {
  return (
    <div className='text-center px-8'>
      <p>{title}</p>
      <h2>{name}</h2>
      <div>
        <a href='tel:+84985145293' className='href-call text-center pb-3'>
          <div className='phone-container'>
            <img
              src={phoneColor === 'main' ? phoneMain : phoneSecond}
              alt='phone chu rể'
              className='href-icon'
            />
            {phoneNumber}
          </div>
        </a>
      </div>
    </div>
  )
}

export default InforPhone
