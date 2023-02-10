import React from 'react'
import qrMb from '../assets/home-image/qr-mb.png'
const ModalContentCongrat = () => {
  return (
    <div>
      <h3 className='text-center text-main'>Thông tin chú rể</h3>
      <div>
        <h2 className='m-0'>NGUYEN VIET ANH</h2>
        <span>0985145293</span>
      </div>
      <div className='flex justify-center'>
        <img src={qrMb} alt='' />
      </div>
    </div>
  )
}

export default ModalContentCongrat
