import React, { useCallback, useMemo } from 'react'
import { BUTTON_STYLES } from '../../commons/Constant.ts'
import styles from './Button.module.css'

export const Button = ({
  label,
  isLoading,
  onPress,
  disabled,
  textColor,
  isLowerCase,
  leftIcon,
  rightIcon,
  tag,
  buttonStyle,
  width,
  rounded,
}) => {
  const _onPress = useCallback(() => {
    onPress?.(tag || label)
  }, [label, onPress, tag])

  const getContainerStyle = useMemo(() => {
    let containerStyle = styles.pinkButton

    switch (buttonStyle) {
      case BUTTON_STYLES.PINK:
        containerStyle = styles.pinkButton
        break

      case BUTTON_STYLES.WHITE:
        containerStyle = styles.whiteButton
        break
      case BUTTON_STYLES.ORANGE:
        containerStyle = styles.orangeButton
        break
      case BUTTON_STYLES.LIGHT_BLUE:
        containerStyle = styles.lightBlueButton
        break
      case BUTTON_STYLES.BORDER_LIGHT_BLUE:
        containerStyle = styles.borderLightBlueButton
        break
      case BUTTON_STYLES.BORDER_PINK:
        containerStyle = styles.borderPink
        break
      default:
        containerStyle = styles.grayButton
        break
    }

    return `${styles.container} ${containerStyle} ${styles.buttonHover}`
  }, [buttonStyle])

  const getTextColor = useMemo(() => {
    let color

    switch (buttonStyle) {
      case BUTTON_STYLES.PINK:
        color = styles.white
        break
      case BUTTON_STYLES.WHITE:
        color = styles.white
        break
      case BUTTON_STYLES.BORDER_PINK:
        color = styles.textPink
        break
      default:
        color = styles.black
        break
    }
    return textColor || color
  }, [buttonStyle, textColor])

  const getTextStyle = useMemo(() => {
    const color = getTextColor

    return `${styles.text} ${styles.padding} ${color}`
  }, [getTextColor])

  return (
    <button
      disabled={isLoading || disabled}
      className={`${getContainerStyle} ${rounded ? styles.borderFull : ''}`}
      style={{ width: width + '%' }}
      onClick={_onPress}
    >
      {leftIcon}
      <span className={getTextStyle}>
        {isLowerCase ? label : `${label} `.toUpperCase()}
      </span>
      {rightIcon}
    </button>
  )
}
