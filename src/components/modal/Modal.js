import React from 'react'
import closeIcon from '../../assets/home-image/close-icon.svg'
import { Button } from '../button'
const Modal = ({
  title,
  visible,
  onOk,
  onCancel,
  size,
  btnCancelText,
  btnSubmitText,
  content,
}) => {
  // const newTitle = title?.toUpperCase()
  return (
    <div className={`modal ${visible ? 'active' : '1'} layout-mw`}>
      <div className='modal-container' onClick={onCancel}></div>
      <div className='modal-block layout-mw'>
        <div className='modal-content overflow-hidden layout-mw'>
          <h1 className='text-second'> dmm</h1>
          {content}
          {onCancel && <Button onPress={onCancel} label={btnCancelText} />}
          {onOk && <Button onPress={onCancel} label={btnSubmitText} />}
        </div>
      </div>
    </div>
  )
}

export default Modal
