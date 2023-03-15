import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LetterPage from './pages/LetterPage'
function App() {
  return (
    <div className='app '>
      <BrowserRouter>
        <Routes>
          <Route path='/letterPage' element={<LetterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
