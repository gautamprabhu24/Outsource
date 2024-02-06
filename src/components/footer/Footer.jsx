import React, { useState, useEffect } from 'react';


const Footer = () => {
  const [isMobile, setisMobile] = useState(false);
  const [showFeatures, setShowFeatures] = useState(true);
  const [isActiveCategories, setIsActiveCategories] = useState(false);
  const [isActiveAbout, setIsActiveAbout] = useState(false);
  const [isActiveSupport, setIsActiveSupport] = useState(false);
  const [isActiveCommunity, setIsActiveCommunity] = useState(false);
  const [isActiveBusiness, setIsActiveBusiness] = useState(false);

  const catfields = [
    "Graphics & Design",
    "Digital Marketing",
    "Writing & Translation",
    "Video & Animation",
    "Music & Audio",
    "Programming & Tech",
    "Data",
    "Business",
    "Lifestyle",
    "Photography",
    "End-to-End Projects",
    "Sitemap"
  ];

  const catAbout = [
    "Careers",
    "Press & News",
    "Partnerships",
    "Privacy Policy",
    "Terms of Service",
    "Intellectual Property Claims",
    "Investor Relations"
  ];

  const catSupport = [
    "Help & Support",
    "Trust & Safety",
    "Selling on Platform",
    "Buying on Platform",
    "Guides",
    "Workspace",
    "Invoice Software",
    "Learn",
    "Online Courses",
  ];

  const catCom = [
    "Customer Success Stories",
    "Community Hub",
    "Forum",
    "Events",
    "Blog",
    "Influencers",
    "Affiliates",
    "Podcast",
    "Invite a Friend",
    "Become a Seller",
    "Community Standards",
  ];

  const catSol = [
    "About Business Solutions",
    "Pro",
    "Certified",
    "Enterprise",
    "ClearVoice",
    "Content Marketing",
  ];

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setisMobile(true);
      setShowFeatures(false);
    } else {
      setisMobile(false);
      setShowFeatures(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className='footer flex flex-col bottom-0 w-full text-white bg-[#0D1B2A] mt-3 mb-3 overflow-x-hidden'>
      <div className='container mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pt-10 px-3 flex flex-col justify-between min-h-screen'>
        <div className={` ${isMobile ? ' fordropbtn ' : 'top flex justify-between gap-20 cursor-pointer'}`}>
          
        <div className={`item  ${isMobile ? "w-96 m-0 mx-auto p-10 bg-[#1B263B] shadow-md text-white font-bold flex flex-col gap-20 justify-between relative ${isActiveCategories ? 'absolute top-13 my-0 m-auto p-10 bg-[#1B263B] shadow-md text-white font-medium w-full left-0 cursor-pointer' : ''} cursor-pointer transition-all duration-200 select-none" : "foritem"}`}>
          <span className={`text-lg`} onClick={() => setIsActiveCategories(!isActiveCategories)}>
            Categories
            {isMobile ? (
              isActiveCategories ? <span className="ml-2">&#x25BC;</span> : <span className="ml-2">&#x25B6;</span>
            ) : null}
          </span>
          {(isMobile && isActiveCategories) || !isMobile ? (
          <div className={` ${isMobile ? 'fordropbtn' : 'flex flex-col font-normal gap-3'}`}>
              {catfields.map((category, index) => (
                <span key={index} className={`${isMobile ? 'foropt' : ''}`}>{category}</span>
              ))}
          </div>
          ):null}
        </div>

        <div className={`item  ${isMobile ? "w-96 m-0 mx-auto p-10 bg-[#1B263B] shadow-md text-white font-bold flex flex-col gap-20 justify-between relative ${isActiveCategories ? 'absolute top-13 my-0 m-auto p-10 bg-[#1B263B] shadow-md text-white font-medium w-full left-0 cursor-pointer' : ''} cursor-pointer transition-all duration-200 select-none" : "foritem"}`}>
          <span className={`text-lg`} onClick={() => setIsActiveAbout(!isActiveAbout)}>
            About
            {isMobile ? (
              isActiveAbout ? <span className="ml-2">&#x25BC;</span> : <span className="ml-2">&#x25B6;</span>
            ) : null}
          </span>
          {(isMobile && isActiveAbout) || !isMobile ? (
          <div className={` ${isMobile ? 'fordropbtn' : 'flex flex-col font-normal gap-3'}`}>
              {catAbout.map((category, index) => (
                <span key={index}  className={`${isMobile ? 'foropt' : ''}`}>{category}</span>
              ))}
          </div>
          ):null}
        </div>

        <div className={`item  ${isMobile ? "w-96 m-0 mx-auto p-10 bg-[#1B263B] shadow-md text-white font-bold flex flex-col gap-20 justify-between relative ${isActiveCategories ? 'absolute top-13 my-0 m-auto p-10 bg-[#1B263B] shadow-md text-white font-medium w-full left-0 cursor-pointer' : ''} cursor-pointer transition-all duration-200 select-none" : "foritem"}`}>
          <span className={`text-lg`} onClick={() => setIsActiveSupport(!isActiveSupport)}>
            Support and Education
            {isMobile ? (
              isActiveSupport ? <span className="ml-2">&#x25BC;</span> : <span className="ml-2">&#x25B6;</span>
            ) : null}
          </span>
          {(isMobile && isActiveSupport) || !isMobile ? (
          <div className={` ${isMobile ? 'fordropbtn' : 'flex flex-col font-normal gap-3'}`}>
              {catAbout.map((category, index) => (
                <span key={index} className={`${isMobile ? 'foropt' : ''}`}>{category}</span>
              ))}
          </div>
          ):null}
        </div>

        <div className={`item  ${isMobile ? "w-96 m-0 mx-auto p-10 bg-[#1B263B] shadow-md text-white font-bold flex flex-col gap-20 justify-between relative ${isActiveCategories ? 'absolute top-13 my-0 m-auto p-10 bg-[#1B263B] shadow-md text-white font-medium w-full left-0 cursor-pointer' : ''} cursor-pointer transition-all duration-200 select-none" : "foritem"}`}>
          <span className={`text-lg`} onClick={() => setIsActiveCommunity(!isActiveCommunity)}>
            Community
            {isMobile ? (
              isActiveCommunity ? <span className="ml-2">&#x25BC;</span> : <span className="ml-2">&#x25B6;</span>
            ) : null}
          </span>
          {(isMobile && isActiveCommunity) || !isMobile ? (
          <div className={` ${isMobile ? 'fordropbtn' : 'flex flex-col font-normal gap-3'}`}>
              {catCom.map((category, index) => (
                <span key={index} className={`${isMobile ? 'foropt' : ''}`}>{category}</span>
              ))}
          </div>
          ):null}
        </div>

        <div className={`item  ${isMobile ? "w-96 m-0 mx-auto p-10 bg-[#1B263B] shadow-md text-white font-bold flex flex-col gap-20 justify-between relative ${isActiveCategories ? 'absolute top-13 my-0 m-auto p-10 bg-[#1B263B] shadow-md text-white font-medium w-full left-0 cursor-pointer' : ''} cursor-pointer transition-all duration-200 select-none" : "foritem"}`}>
          <span className={`text-lg`} onClick={() => setIsActiveBusiness(!isActiveBusiness)}>
            Business
            {isMobile ? (
              isActiveBusiness ? <span className="ml-2">&#x25BC;</span> : <span className="ml-2">&#x25B6;</span>
            ) : null}
          </span>
          {(isMobile && isActiveBusiness) || !isMobile ? (
          <div className={` ${isMobile ? 'fordropbtn' : 'flex flex-col font-normal gap-3'}`}>
              {catCom.map((category, index) => (
                <span key={index} className={`${isMobile ? 'foropt' : ''}`}>{category}</span>
              ))}
          </div>
          ):null}
        </div>
      </div>

      <hr className={`my-2 h-0 border border-solid border-gray-400 `} />

      <div className={`bottom flex items-center justify-between cursor-pointer pb-4 ${isMobile ? 'flex-col pt-3' : ''}`}>
        <div className='left flex items-center gap-2'>
          <img src='../../images/logo-name.png' alt='logo' className={`w-60 h-10 ${isMobile ? 'w-20.5 h-7 gap-2' : ''}`} />
        </div>
        <div className={`right flex items-center gap-7.5 transition-all duration-300 ${isMobile ? 'flex-col mt-2' : ''}`}>
          <div className={`socials flex items-center gap-5 ${isMobile ? 'text-xs mt-4 ' : ''}`}>
            <img src="/images/twitter.png" alt="" />
            <img src="/images/facebook.png" alt="" />
            <img src="/images/linkedin.png" alt="" />
            <img src="/images/pinterest.png" alt="" />
            <img src="/images/instagram.png" alt="" />
          </div>
        </div>
      </div>
      </div>
      </footer>
      );
      }

export default Footer;
