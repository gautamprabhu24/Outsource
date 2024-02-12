import React, { useState } from 'react'
import { FaBars, FaUser, FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ScreenSizeDetector from 'screen-size-detector';



const Navbar = () => {
  const screen = new ScreenSizeDetector();

  const checkdevice=()=>{  
      return screen.width < 768;};

const checkfull=()=>{  
      return screen.width < 1275;};



  const [open, setOpen]=useState(false);
  const [isMobile, setisMobile]=useState(checkdevice);
  const [isFull, setisFull]=useState(checkfull);
  const [showFeatures, setShowFeatures] = useState(!isMobile);
  const [showCats, setShowCats] = useState(!isFull);
  



  const  handleResize=()=>{
    if (screen.width < 768) {
      setisMobile(true);
      setShowFeatures(false);
      
    } else {
      setisMobile(false);
      setShowFeatures(true);
      
    }
  };

  const handleFull=()=>{
    if(screen.width < 1275){
      setisFull(true);
      setShowCats(false);
      }else{
        setisFull(false);
        setShowCats(true);
    }
  };

  window.addEventListener("resize",handleResize);
  window.addEventListener("resize",handleFull);

  

  const handleBarsClick = () => {
    setShowFeatures(!showFeatures);
  };

  const handleBrowseClick = () => {
    setShowCats(!showCats);
  };  
  
  const currentUser={
    id:1,
    username:"Gautam",
    isSeller:true
  };

  const slideLeft=()=>
  {
    var slider=document.getElementById("categories");
    slider.scrollLeft=slider.scrollLeft-500;
  }
  const slideRight=()=>
  {
    var slider=document.getElementById("categories");
    slider.scrollLeft=slider.scrollLeft+500;
  }

  
return (
    <div className='sticky top-0 z-[999] w-full'>
      <div name='container' className='flex items-center bg-[#0D1B2A] h-[4pc] justify-between p-3 md:justify-around shadow-lg sticky top-0 z-[999]'>

         <div name='opt' className='object-cover cursor-pointer relative order-1 md:order-2'><FaBars className='text-[#E0E1DD] h-[25px] w-[25px] md:hidden' onClick
         ={handleBarsClick} />
         {showFeatures && <><div name="features" className={isMobile ? 'fordrop absolute top-[2pc] left-3 z-20' : 'flex flex-row justify-between gap-7'}>
          <div className={isMobile ?'foroptspa group':'dropd group'}>
                <span className={isMobile ?'':'fortext'}>Business
                </span><FaAngleDown className={isMobile ?'group-hover:rotate-180':'forangle'}/>
              </div>
              <div className={isMobile ?'foroptspa group':'dropd group'}>
                <span className={isMobile ?'':'fortext'}>Discover
                </span><FaAngleDown className={isMobile ?'group-hover:rotate-180':'forangle'}/>
              </div>
              <div className={isMobile ?'foroptspa':'dropd'}>
                <span className={isMobile ?'':'fortext'}>Sign In</span>
              </div>  
              {!currentUser?.isSeller && <div name='freelance' className={isMobile ?'foroptspa':'dropd'}>
              <span className={isMobile ?'':'fortext'}>FreeLance</span>
              </div>}
         </div></>}
         </div>

        
         <div name='logo' className='order-2 md:order-1 border-none outline-none'>
          <Link to="/">
         <img src='/images/logo-name.png' alt='OUTSOURCE' className='h-[42px] w-[11pc] md:w-[12pc] -mr-3 cursor-pointer hover:scale-105 border-none outline-none'></img>
         </Link>
         </div>


          {!currentUser && <div name='joinbutton' className='order-3'>
              <button  className='forbtn'>Join</button>
            </div>}

          {currentUser && (
            <div name="user" className='md:hover:bg-[#415A77] md:px-2 md:py-1 md: rounded-lg flex items-center gap-1 relative cursor-pointer order-4 ' onClick={()=>setOpen(!open)}>
              <FaUser className='h-[25px] w-[25px] rounded-full object-cover text-[#0D1B2A] bg-[#E0E1DD] p-1'/>
              <span className='fortext tracking-tight hidden md:block'>{currentUser?.username}</span>
              {open && <div name="options" className="fordrop absolute top-[2pc] right-3 z-40">
                {currentUser?.isSeller && (
                  <>
                  <Link to="mygigs" className='foroptspa'>Gigs</Link>
                  <Link to="add" className='foroptspa'>Add new gig</Link>
                  </>
                )}
                <Link to="orders" className='foroptspa'>Orders</Link>
                <Link to="chats" className='foroptspa'>Messages</Link>
                <Link to="/" className='foroptspa'>Logout</Link>
                </div>}
            </div>

          )}

         
      </div>
      <hr></hr>
      <div className='relative'>
      <div className="flex justify-start bg-[#415A77] shadow-3
      xl" name="Menu">
        <div className={isFull ? 'block':'hidden'} onClick
         ={handleBrowseClick}>
        <div className='flex group items-center'>
          <span className='fortext p-2 text-[15px] group-hover:text-[#0D1B2A] group-hover:font-semibold'>Browse By Category
          </span>
          <FaAngleDown className='forangle group-hover:text-[#0D1B2A] group-hover:font-semibold'/>
        </div></div></div>{showCats && <><div className={isFull ?'fordrop w-[300px] absolute top-[2pc] left-3' :'flex h-[50px] justify-center gap-3 bg-[#415A77] shadow-3xl items-center relative z-0 p-3 flex-nowrap shrink-0'}>

          <Link to="" className={isFull ? 'foroptspa' : 'forcategories'}>Technology & Programming</Link>
          <Link to="" className={isFull ? 'foroptspa' : 'forcategories'}>Writing & Translation</Link>
          <Link to="" className={isFull ? 'foroptspa' : 'forcategories'}>Design</Link>
          <Link to="" className={isFull ? 'foroptspa' : 'forcategories'}>Digital Marketing</Link>
          <Link to="" className={isFull ? 'foroptspa' : 'forcategories'}>Video</Link>
          <Link to="" className={isFull ? 'foroptspa' : 'forcategories'}>Photo & Image</Link>
          <Link to="" className={isFull ? 'foroptspa' : 'forcategories'}>Business</Link>
          <Link to="" className={isFull ? 'foroptspa' : 'forcategories'}>Music & Audios</Link>
          <Link to="" className={isFull ? 'foroptspa' : 'forcategories'}>Marketing</Link>
          <Link to="" className={isFull ? 'foroptspa' : 'forcategories'}>Branding & Sales</Link>
          <Link to="" className={isFull ? 'foroptspa' : 'forcategories'}>Social Media</Link>

      </div></>}</div>
      
      </div>
      
    
    
  )
}

export default Navbar