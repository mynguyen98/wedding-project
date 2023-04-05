import React, { useState } from 'react'
import { RadioButton } from '@/components/RadioButton'
const RadioCreate = ({ id, label, value }) => {
  const [radioValue, setRadioValue] = useState('')
  const radioChangeHandler = (e) => {
    setRadioValue(e.target.value)
  }
  return (
    <div className='options_select'>
      <RadioButton
        id={id}
        label={label}
        value={radioValue}
        onChange={radioChangeHandler}
        isSelected={radioValue === value}
      />
    </div>
  )
}

export default RadioCreate
