import React, { forwardRef, useImperativeHandle, useState } from 'react'
import Modal from './Modal'

// eslint-disable-next-line react/display-name
const Popup = forwardRef(
  (
    {
      title,
      description,
      onSuccessPress,
      size,
      btnCancelText,
      btnSubmitText,
      content,
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false)

    const hideModal = () => {
      setVisible(false)
    }

    const showModal = () => {
      setVisible(true)
    }

    useImperativeHandle(ref, () => ({
      showModal,
      hideModal,
    }))

    const handleOk = () => {
      setTimeout(() => {
        setVisible(false)
      }, 2000)
      onSuccessPress?.()
    }

    const handleCancel = () => {
      setVisible(false)
    }

    return (
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        size={size}
        btnCancelText={btnCancelText}
        btnSubmitText={btnSubmitText}
        content={content}
      />
    )
  }
)

export default Popup
