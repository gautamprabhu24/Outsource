import './index.css'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Headroom from 'react-headroom'
function App()
 {
  return (
    <div >
      <Headroom><Navbar/></Headroom>
    
    </div>
  )
}

export default App
