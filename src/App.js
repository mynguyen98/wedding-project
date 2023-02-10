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
function App() {
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
    <div>
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
      <TimeLocation />
      <Schedule />
      <Congrats setModalContent={setModalContent} setIsOpen={setIsOpen} />
      <Footer />
    </div>
  )
}

export default App
