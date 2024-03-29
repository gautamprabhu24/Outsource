import React, { useState } from 'react'
import { FaAngleDown, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ScreenSizeDetector from 'screen-size-detector';



const Footer = () => {
  const screen = new ScreenSizeDetector();

  const checkdevice=()=>{  
      return screen.width < 768;};

      const [isMobile, setisMobile]=useState(checkdevice);
      const [showFeatures1, setShowFeatures1] = useState(!isMobile);
      const [showFeatures2, setShowFeatures2] = useState(!isMobile);
      const [showFeatures3, setShowFeatures3] = useState(!isMobile);
      const [showFeatures4, setShowFeatures4] = useState(!isMobile);
      const [showFeatures5, setShowFeatures5] = useState(!isMobile);

      const  handleResize=()=>{
        if (screen.width < 768) {
          setisMobile(true);
          setShowFeatures1(false);
          setShowFeatures2(false);
          setShowFeatures3(false);
          setShowFeatures4(false);
          setShowFeatures5(false);
          
        } else {
          setisMobile(false);
          setShowFeatures1(true);
          setShowFeatures2(true);
          setShowFeatures3(true);
          setShowFeatures4(true);
          setShowFeatures5(true);
          
        }
      };

      window.addEventListener("resize",handleResize);

      const handleBarsClick1 = () => {
        setShowFeatures1(!showFeatures1);
      };
      const handleBarsClick2 = () => {
        setShowFeatures2(!showFeatures2);
      };
      const handleBarsClick3 = () => {
        setShowFeatures3(!showFeatures3);
      };
      const handleBarsClick4 = () => {
        setShowFeatures4(!showFeatures4);
      };
      const handleBarsClick5 = () => {
        setShowFeatures5(!showFeatures5);
      };


  return (
    <div name="footer" className='bg-[#0F1035] flex flex-col'>
      <div name='drops' className='flex flex-col m-4 bg-[#1B263B] rounded-lg md:flex-row md:items-start'>
        <div name='heading' className='forfootheads group'>
          <div className='forfootfea' onClick= {isMobile ? handleBarsClick1 : null}><span>Categories</span>
          <FaAngleDown className={`md:hidden transition duration-150 ease-in-out transform ${showFeatures1 ? 'rotate-180' : ''}`}/></div>
          {showFeatures1 && <div className='flex flex-col gap-1 cursor-pointer'>
            <span className='hover:bg-[#365486]'>Graphics & Design</span>
            <span className='hover:bg-[#365486]'>Digital Marketing</span>
            <span className='hover:bg-[#365486]'>Photography</span>
            <span className='hover:bg-[#365486]'>Video & animation</span>
            <span className='hover:bg-[#365486]'>Business</span>
            <span className='hover:bg-[#365486]'>Music & audio</span>
          </div>}
                </div>
        <div name='heading' className='forfootheads group'>
        <div className='forfootfea' onClick= {isMobile ? handleBarsClick2 : null}><span>About</span>
        <FaAngleDown className={`md:hidden transition duration-150 ease-in-out transform ${showFeatures2 ? 'rotate-180' : ''}`}/></div>
        {showFeatures2 && <div className='flex flex-col gap-1 cursor-pointer'>
            <span className='hover:bg-[#365486]'>Careers</span>
            <span className='hover:bg-[#365486]'>Partnerships</span>
            <span className='hover:bg-[#365486]'>Privacy policy</span>
            <span className='hover:bg-[#365486]'>Terms of service</span>
          </div>}
          
        </div>
        <div name='heading' className='forfootheads group'>
          <div className='forfootfea' onClick= {isMobile ? handleBarsClick3 : null}>
          <span>Support and Education</span>
          <FaAngleDown className={`md:hidden transition duration-150 ease-in-out transform ${showFeatures3 ? 'rotate-180' : ''}`}/></div>
          {showFeatures3 && <div className='flex flex-col gap-1 cursor-pointer'>
            <span className='hover:bg-[#365486]'>Help & Support</span>
            <span className='hover:bg-[#365486]'>Selling on Outsource</span>
            <span className='hover:bg-[#365486]'>Buying on Outsource</span>
            <span className='hover:bg-[#365486]'>Outsource Guides</span>
          </div>}
          
        </div>
        <div name='heading' className='forfootheads group'>
        <div className='forfootfea' onClick= {isMobile ? handleBarsClick4 : null}><span>Community</span>
        <FaAngleDown className={`md:hidden transition duration-150 ease-in-out transform ${showFeatures4 ? 'rotate-180' : ''}`}/></div>
        {showFeatures4 && <div className='flex flex-col gap-1 cursor-pointer'>
            <span className='hover:bg-[#365486]'>Community hub</span>
            <span className='hover:bg-[#365486]'>Invite a freind</span>
            <span className='hover:bg-[#365486]'>Become a seller</span>
            <span className='hover:bg-[#365486]'>Affiliate</span>
          </div>}
          
        </div>
        <div name='heading' className='forfootheads group'>
        <div className='forfootfea' onClick= {isMobile ? handleBarsClick5 : null}><span>Business</span>
        <FaAngleDown className={`md:hidden transition duration-150 ease-in-out transform ${showFeatures5 ? 'rotate-180' : ''}`}/></div>
        {showFeatures5 && <div className='flex flex-col gap-1 cursor-pointer'>
            <span className='hover:bg-[#365486]'>About us</span>
            <span className='hover:bg-[#365486]'>Contact sales</span>
            <span className='hover:bg-[#365486]'>Pro</span>
            <span className='hover:bg-[#365486]'>Certified</span>
            <span className='hover:bg-[#365486]'>Agency</span>
          </div>}
          
        </div>

      </div>
      <div className='p-4'>
      <div name='sm' className='flex flex-col items-center md:flex-row md:justify-between'>
      <Link to="/"><img src='/images/logo-name.png' alt='OUTSOURCE' className='h-[35px] w-[130px]'></img></Link>
        <span className='pt-2 text-gray-500 font-amaze font-normal'>Outsource - Freelance Marketplace application</span>
        <div className='flex p-2 text-white gap-5'>
          <FaFacebook className='h-[20px] w-[20px]'/>
          <FaInstagram className='h-[20px] w-[20px]'/>
          <FaPinterest className='h-[20px] w-[20px]'/>
          <FaXTwitter className='h-[20px] w-[20px]'/>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Footer;