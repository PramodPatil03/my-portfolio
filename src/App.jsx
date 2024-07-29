import React from 'react'
import {HashRouter,Routes, Route, BrowserRouter} from 'react-router-dom';

import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Hireme from './components/Hireme';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Education from './components/Education';


function App() {
  return (
    <div>
      <HashRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/my-portfolio/' element = {<Home/>}/>
          <Route exact path='/my-portfolio/home' element = {<Home/>}/>
          <Route exact path='/my-portfolio/about' element = {<About/>}/>
          <Route exact path='/my-portfolio/qualification' element = {<Education/>}/>
          <Route exact path='/my-portfolio/contact' element = {<Contact/>}/>

          <Route exact path='/my-portfolio/hireme'   element = {<Hireme/>}/>
          {/* <Route exact path='/my-portfolio/resume' element = {<Resume/>} /> */}
          <Route exact path='/my-portfolio/projects' element = {<Projects/>}/>
        </Routes>
      <Footer/>
      </HashRouter>
    </div>
  )
}

export default App
