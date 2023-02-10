import React from 'react'
import invitationBg from '../assets/home-image/invitation-bg.png'
import InvitationRight from '../components/icons/InvitationRight'
import InvitationLeft from '../components/icons/InvitationLeft'
import TitleSection from '../components/TitleSection'
const Invitation = () => {
  return (
    <section
      style={{ backgroundImage: `url(${invitationBg})` }}
      className='bg-center bg-no-repeat bg-cover'
      id='invitation'
    >
      <div className='text-center pb-28 pt-28 pr-20 pl-20'>
        <TitleSection title='LỜI MỜI' />
        <p>
          <span>Thân mời,</span>
          <br />
          đến dự buổi tiệc chung vui cùng gia đình chúng tôi tại
        </p>
        <h2 className='pt-4 second-text-pink'>Khách sạn Petro</h2>
        <p>Số 458 Lý Bôn, P. Đề Thám, TP. Thái Bình</p>
        <h2 className='pt-4 second-text-pink'>Thứ bảy, ngày 18.02.2023</h2>
        <p>Sự hiện diện quý khách là niềm vinh hạnh cho gia đình chúng tôi!</p>
      </div>
    </section>
  )
}

export default Invitation
