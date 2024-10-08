import React from 'react'
import {HashRouter,Routes, Route, BrowserRouter} from 'react-router-dom';

import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Hireme from './components/Hireme';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';


function App() {
  return (
    <div>
      <HashRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/home' element = {<Home/>}/>
          <Route exact path='/qualification' element = {<Education/>}/>
          <Route exact path='/contact' element = {<Contact/>}/>
          <Route exact path='/hireme'   element = {<Hireme/>}/>
          <Route exact path='/projects' element = {<Projects/>}/>
        </Routes>
      <Footer/>
      </HashRouter>
    </div>
  )
}

export default App
