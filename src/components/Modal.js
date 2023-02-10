import React from 'react'
import closeIcon from '../assets/home-image/close-icon.svg'
const Modal = ({ isOpen, setIsOpen, modalContent, index, numberImage }) => {
  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className='modal-container' onClick={() => setIsOpen(false)}></div>
      <div className='modal-block'>
        <div onClick={() => setIsOpen(false)} className='cursor-pointer'>
          <img src={closeIcon} alt='' className='close-modal-icon' />
        </div>
        {/* <div className='index-image'>{`${index + 1} / ${numberImage}`}</div> */}
        <div className='modal-content overflow-hidden '>
          <div>{modalContent}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
