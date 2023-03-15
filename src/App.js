import './App.css'
import Hero from './pages/Hero'
import React, { useEffect, useState } from 'react'
import Invitation from './pages/Invitation'
import TimeLocation from './pages/TimeLocation'
import Schedule from './pages/Schedule'
import Congrats from './pages/Congrats'
import Footer from './pages/Footer'
import Gallery from './pages/Gallery'
import Modal from './components/Modal'
import { galleryImage } from './utils/gallery-data'
import Sidebar from './components/Sidebar'
import YoutubeVideo from './pages/YoutubeVideo'
// import MetaTags from 'react-meta-tags'
// import imageMeta from './assets/gallery/'
import Snowfall from 'react-snowfall'
import snowImage from './assets/home-image/snow.png'
import NavButton from './components/NavButton'
// const snowImg = document.createElement('img')
// snowImg.src = './assets/home-image/snow.png'
// const images = [snowImg]
// console.log(images)
function App() {
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
    <div className='app app-layout'>
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

export default App
