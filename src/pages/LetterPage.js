import React from 'react'
import Hero from '../components/letter-page/Hero'
import { useEffect, useState } from 'react'
import Invitation from '../components/letter-page/Invitation'
import TimeLocation from '../components/letter-page/TimeLocation'
import Schedule from '../components/letter-page/Schedule'
import Congrats from '../components/letter-page/Congrats'
import Footer from '../components/letter-page/Footer'
import Gallery from '../components/letter-page/Gallery'
import Modal from '../components/letter-page/sub-comp/Modal'
import { galleryImage } from '../utils/gallery-data'
import Sidebar from '../components/letter-page/sub-comp/Sidebar'
import YoutubeVideo from '../components/letter-page/YoutubeVideo'
import Snowfall from 'react-snowfall'
import snowImage from '../assets/home-image/snow.png'
import NavButton from '../components/letter-page/sub-comp/NavButton'
const LetterPage = () => {
  const snowImg = document.createElement('img')
  snowImg.src = snowImage
  snowImg.width = 20
  const images = [snowImg]
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [index, setIndex] = useState(0)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const numberImage = galleryImage.length
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  return (
    <div className='app letter-layout'>
      <Snowfall
        color='#E29C67'
        snowflakeCount={40}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 11,
        }}
        images={images}
        radius={[2, 15]}
      />
      <NavButton setIsNavOpen={setIsNavOpen} />
      <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalContent={modalContent}
        index={index}
        numberImage={numberImage}
      />
      <Hero setIsNavOpen={setIsNavOpen} />
      <Invitation />
      <Gallery
        setModalContent={setModalContent}
        setIsOpen={setIsOpen}
        setIndex={setIndex}
      />
      <YoutubeVideo />
      <TimeLocation />
      <Schedule />
      <Congrats setModalContent={setModalContent} setIsOpen={setIsOpen} />
      <Footer />
    </div>
  )
}

export default LetterPage
