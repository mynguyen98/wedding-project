import React from 'react'

const CloseIcon = () => {
  return (
    <div>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='24' height='24' rx='4' fill='white' fill-opacity='0.25' />
        <path
          d='M17.25 17.25L6.75 6.75'
          stroke='white'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M17.25 6.75L6.75 17.25'
          stroke='white'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </div>
  )
}

export default CloseIcon
