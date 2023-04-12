
import Validate from '@/utils/Validate'
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'


import styles from './Input.module.css'

// import Ic_error from '@/assets/images/ic_error.png';
import Ic_success from '@/assets/home-image/ic_success.png'

// eslint-disable-next-line react/display-name

export const MyTextInput = forwardRef(
  (
    {
      label,
      disabled = true,
      containerInput,
      inputStyle,
      styleDisable,
      styleGroup,
      isIcon = false,
      icon,
    },
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      setValue,
      fillValue,
      getValue,
      focus,
      blur,
      setErrorMsg,
    }))

    const setErrorMsg = useCallback((msg) => {
      if (Validate.isStringEmpty(msg)) {
        return
      }
      setIsFocus(false)
      setErrMsg(msg)
    }, [])

    const containerStyle = useMemo(() => {
      let style = ' '

      if (containerInput) {
        style += containerInput + ' '
      }

      if (errMsg !== '') {
        style += styles.errMsg
      }

      return style
    }, [containerInput, errMsg])

    return (
      <div className={`${styles.boxGroupInput} ${styleGroup}`}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={`${styles.formGroup}${containerStyle}`}>
          <input
            disabled={!disabled}
            className={`${styles.form_control} ${
              inputStyle ? inputStyle : ''
            } ${!disabled ? styleDisable : ''}`}
          />
          {isIcon && <div className={styles.ic_icon}>{icon}</div>}
        </div>
        <div className={styles.messageError}>
          <p>{errMsg}</p>
        </div>
      </div>
    )
  }
)
