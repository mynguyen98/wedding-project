import React from 'react'
import msgCmtTitle from '@/assets/home-image/msgCmtTitle.png'
import closeIcon from '@/assets/svg/icon-close-outline.svg'
import { Button } from '@/components/button'
import { BUTTON_STYLES } from '@/commons/Constant.ts'
const WeddingCmt = () => {
  return (
    <div className='max-w-md p-4  ' style={{ width: '100%' }}>
      <div
        className='p-4 rounded-lg'
        style={{ background: 'rgba(238, 241, 239, 0.5)', width: '100%' }}
      >
        <img
          src={closeIcon}
          alt=''
          // className=' w-6 '
          style={{
            width: '28px',
            position: 'absolute',
            right: '24px',
            top: '24px',
          }}
        />
        <img
          src={msgCmtTitle}
          alt=''
          className='w-4'
          style={{ width: '90px' }}
        />
        <p className='text-text text-lg p-4'>
          Happy wedding day 💝. Looking forward your beautiful days! See you
          then 😍🥰
        </p>
        <div>
          <h2 className='texxt-base font-medium'>-Minh Khang-</h2>
          <p className='text-base font-light'>2023.02.02 14:21:56</p>
        </div>
      </div>
    </div>
  )
}

export default WeddingCmt
