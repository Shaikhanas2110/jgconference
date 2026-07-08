import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Committees from './pages/Committees'
import Tracks from './pages/Tracks'
import Speakers from './pages/Speakers'
import Registration from './pages/Registration'
import CallForPaper from './pages/CallForPaper'
import Guidelines from './pages/Guidelines'
import ReviewProcess from './pages/ReviewProcess'
import Publication from './pages/Publication'
import Downloads from './pages/Downloads'
import PaperStatus from './pages/PaperStatus'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Contact from './pages/Contact'
import ImportantDates from './pages/ImportantDates'
import Submission from './pages/Submission'
import ScrollToTop from './pages/ScrollToTop'

function App() {


  return (
    <BrowserRouter basename='/jgconference'>
      <>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/committees' element={<Committees />} />
          <Route path='/call-for-paper' element={<CallForPaper />} />
          <Route path='/tracks' element={<Tracks />} />
          <Route path='/speakers' element={<Speakers />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/guidelines' element={<Guidelines />} />
          <Route path='/review-process' element={<ReviewProcess />} />
          <Route path='/publication' element={<Publication />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/impdates' element={<ImportantDates />} />
          <Route path='/submission' element={<Submission />} />
          <Route path='/downloads' element={<Downloads />} />
          <Route path='/paper-status' element={<PaperStatus />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
