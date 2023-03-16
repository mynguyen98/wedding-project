import React, { useRef } from 'react'
import TitleSection from './sub-comp/TitleSection'
import TitleDescribe from './sub-comp/TitleDescribe'
import phoneMain from '../../assets/home-image/phone-main.svg'
import phoneSecond from '../../assets/home-image/phone-second.svg'
import InforPhone from './sub-comp/InforPhone'
import Popup from '../modal/Popup'
const Congrats = ({ setModalContent, setIsOpen }) => {
  const modalRef = useRef()
  const handleShowModal = () => {
    modalRef.current.showModal()
  }
  return (
    <div className='py-10 section-mb layout-mw' id='congrat'>
      <TitleSection title='CHÚC PHÚC' />
      <div className='flex justify-center'>
        <InforPhone
          title='Chú rể'
          name='Việt Anh'
          phoneNumber='0985 145 293'
          phoneColor='main'
          onClick={() => handleShowModal()}
        />
        <button onClick={() => handleShowModal()}>click</button>
        <Popup ref={modalRef} />
        <InforPhone title='Chú rể' name='Việt Anh' phoneNumber='0985 145 293' />
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
