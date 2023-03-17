import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LetterPage from './pages/LetterPage'
import HomePage from './pages/Homepage/Homepage'
import { Alias } from './commons/Constant.ts'

function App() {
  return (
    <div className='app '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path={Alias.letterPage} element={<LetterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
