import React from 'react'
import TitleSection from '../components/TitleSection'
import TitleDescribe from '../components/TitleDescribe'
import phoneMain from '../assets/home-image/phone-main.svg'
import phoneSecond from '../assets/home-image/phone-second.svg'
const Congrats = ({ setModalContent, setIsOpen }) => {
  return (
    <div className='py-10' id='congrat'>
      <TitleSection title='CHÚC PHÚC' />
      <div className='flex justify-center'>
        <div className='text-center px-8'>
          <h2>Việt Anh</h2>
          <div>
            <a href='tel:+84985145293' className='href-call text-center pb-3'>
              <div className='phone-container'>
                <img src={phoneMain} alt='phone chu rể' className='href-icon' />
                0985 145 293
              </div>
            </a>
            {/* <button
              className='btn-congrat-main bg-main px-3 py-1'
              onClick={() => {
                setIsOpen(true)
                setModalContent(ModalContentCongrat)
              }}
            >
              Chúc phúc chú rể
            </button> */}
          </div>
        </div>
        <div className='text-center px-8'>
          <h2>Phương Anh</h2>
          <div>
            <a href='tel:+84985145293' className='href-call text-center pb-3'>
              <div className='phone-container'>
                <img
                  src={phoneSecond}
                  alt='phone chu rể'
                  className='href-icon'
                />
                0985 145 285
              </div>
            </a>
            {/* <button className='btn-congrat-main bg-second px-3 py-1'>
              Chúc phúc cô dâu
            </button> */}
          </div>
        </div>
      </div>
      <div className='pt-8'>
        <TitleDescribe title='Đại diện gia đình' />
        <div className='flex justify-center'>
          <div className='text-center px-8'>
            <h2 className='text-main'>Nhà trai</h2>
            <p>Nguyễn Duy Đông</p>
            <p>Trần Thị Tuyết</p>
          </div>
          <div className='text-center px-8'>
            <h2 className='text-second'>Nhà Gái</h2>
            <p>Thạch Quốc Trường</p>
            <p>Nguyễn Thị Thuỷ</p>
          </div>
        </div>
      </div>
      <h3 className='pt-4 text-center'>Rất hân hạnh được đón tiếp!</h3>
    </div>
  )
}

export default Congrats
