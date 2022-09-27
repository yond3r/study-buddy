import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//all files within page, to form the application
import Home from './components/Home'
import Header from './components/Header'
import Navbar from './components/Navbar'
// import Study from './components/Study'
// import BreakTime from './components/BreakTime'
// import Images from './components/Images'
// import Music from './components/Music'
import Footer from './components/Footer'


function App(){
  return(
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Navbar" element={<Navbar/>} />
          {/* <Route path="/Study" element={<Study />} /> */}
          {/* <Route path="/BreakTime" element={<BreakTime />} /> */}
          {/* <Route path="/Images" element={<Images />} /> */}
          {/* <Route path="/Music" element={<Music />} /> */}
          <Route path="*" element={<Home/>} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App;