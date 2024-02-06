import './index.css'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './features/homepage/Homepage'
import Footer from './components/footer/Footer'
import Headroom from 'react-headroom'
function App()
 {
   const Layout=()=>{
    return ( <><Navbar/>
    <Outlet/>
    <Footer/></>)
   }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/> ,
      children:[{
        path:"/",
        element: <Home />
      },
      {
        path:"/gigs",
        element: <Gig />
      },
      {
        path:"/gig/:id",
        element: <Gig />
      },
      {
        path:"/orders",
        element: <Orders />
      },
      {
        path:"/mygigs",
        element: <Mygigs />
      },
      {
        path:"/add",
        element: <Add />
      },
      {
        path:"/chats",
        element: <Chats />
      },
      {
        path:"/chat:id",
        element: <Chat />
      }
    ]
    },
  ]);

  return (
    <div >
      <Headroom><Navbar/></Headroom>
    
    </div>
  )
}

export default App;
