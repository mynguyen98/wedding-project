import React from "react";
// import closeIcon from '@/assets/home-image/close-icon.svg'
import closeIcon from "@/assets/svg/icon-close-outline.svg";
import { Button } from "../button";
import { BUTTON_STYLES } from "@/commons/Constant.ts";
// import classes from './modal.module.css'
import CloseIcon from "../icons/CloseIcon";
const Modal = ({
  title,
  visible,
  onOk,
  onCancel,
  size,
  btnCancelText,
  btnSubmitText,
  btnOrrangeText,
  content,
}) => {
  // const newTitle = title?.toUpperCase()
  return (
    <div className={`modal ${visible ? "active" : "1"} margin-auto`}>
      <div className="modal-container" onClick={onCancel}></div>
      <div className="modal-block ">
        <div className="modal-content overflow-hidden modal-sm modal-mw p-4 rounded-lg">
          {/* <div className='close-modal-icon'>
            <CloseIcon />
          </div> */}
          <img
            src={closeIcon}
            alt=""
            className="close-modal-icon"
            onClick={onCancel}
          />
          <h1 className="text-text text-center text-3xl"></h1>
          {content}
          <div className="flex justify-center items-center gap-4">
            {btnCancelText && (
              <Button
                onPress={onCancel}
                label={btnCancelText}
                buttonStyle={BUTTON_STYLES.BORDER_PINK}
              />
            )}
            {btnSubmitText && (
              <Button
                onPress={onOk}
                label={btnSubmitText}
                buttonStyle={BUTTON_STYLES.PINK}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
