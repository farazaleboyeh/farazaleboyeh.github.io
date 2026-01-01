import './App.css'
import { useState } from 'react'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import ForFun from './pages/for-fun.jsx'
import Layout from './Layout.jsx'

import { HashRouter as Router, Routes, Route } from 'react-router-dom' /* Router is an alias for HashRouter */

function App() {

  return (
   
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/for-fun" element={<ForFun/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

/* <a href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons">Hamburger icons created by feen - Flaticon</a> */
/* <a href="https://www.flaticon.com/free-icons/eliminate" title="eliminate icons">Eliminate icons created by feen - Flaticon</a> */