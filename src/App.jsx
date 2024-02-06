import './index.css'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Headroom from 'react-headroom'
import Footer from './components/footer/Footer'

function App()
 {
  return (
    <div >
      <Headroom>
      <Navbar/>
      <Footer/>
      </Headroom>
    
    </div>
  )
}

export default App
