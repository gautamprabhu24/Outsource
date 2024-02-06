import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isActiveCategories, setIsActiveCategories] = useState(false);
  const [isActiveAbout, setIsActiveAbout] = useState(false);
  const [isActiveSupport, setIsActiveSupport] = useState(false);
  const [isActiveCommunity, setIsActiveCommunity] = useState(false);
  const [isActiveBusiness, setIsActiveBusiness] = useState(false);
  

  return (
    <div className='m-0 ml-0 py-0 w-full h-90'>
      <div className='dropdown w-full m-0 mx-auto p-10 bg-[#1B263B] shadow-md text-white font-bold flex flex-col gap-20  justify-between relative left-0 cursor-pointer transition-all duration-200 select-none'>
      <div>
        <div className='dropdown-btn' onClick={() => setIsActiveCategories(!isActiveCategories)}>
          Categories
          {isActiveCategories ? <span className="ml-2">&#x25BC;</span> : <span className="ml-2">&#x25B6;</span>}
        </div>
       
        {isActiveCategories && (
        //   <div className="dropdown-content absolute top-13 my-0 m-auto p-10 bg-[#1B263B] shadow-md text-white font-medium w-full left-0 cursor-pointer ">
        <div className=''>
            <div className="dropdown-item foropt">
              <span>Graphics & Design</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Digital Marketing</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Writing & Translation</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Video & Animation</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Music & Audio</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Programming & Tech</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Data</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Business</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Lifestyle</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Photography</span>
            </div>
            <div className="dropdown-item foropt">
              <span>End-to-End Projects</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Sitemap</span>
            </div>
          </div>
        )}
        </div>
        <div>
         <div className='dropdown-btn' onClick={() => setIsActiveAbout(!isActiveAbout)}>
          About
          {isActiveAbout ? <span className="ml-2">&#x25BC;</span> : <span className="ml-2">&#x25B6;</span>}
        </div>
        {isActiveAbout && (
          <div className="">
            <div className="dropdown-item foropt">
              <span>Careers</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Press & News</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Partnerships</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Privacy Policy</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Terms of Service</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Intellectual Property Claims</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Investor Relations</span>
          </div>
          </div>
        )}
        </div>
        <div>
        <div className='dropdown-btn' onClick={() => setIsActiveSupport(!isActiveSupport)}>
          Support and Education
          {isActiveSupport ? <span className="ml-2">&#x25BC;</span> : <span className="ml-2">&#x25B6;</span>}
        </div>
        {isActiveSupport && (
          <div className="">
            <div className="dropdown-item foropt">
              <span>Help & Support</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Trust & Safety</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Selling on Platform</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Buying on Platform</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Guides</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Workspace</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Invoice Software</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Learn</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Online Courses</span>
            </div>
          </div>
        )}
        </div>
        <div>
        <div className='dropdown-btn' onClick={() => setIsActiveCommunity(!isActiveCommunity)}>
          Community
          {isActiveCommunity ? <span className="ml-2">&#x25BC;</span> : <span className="ml-2">&#x25B6;</span>}
        </div>
        {isActiveCommunity && (
          <div className="">
            <div className="dropdown-item foropt">
              <span>Customer Success Stories</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Community Hub</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Forum</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Events</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Blog</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Influencers</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Affiliates</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Podcast</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Invite a Friend</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Become a Seller</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Community Standards</span>
            </div>
          </div>
        )}
        </div>
        <div>
         <div className='dropdown-btn' onClick={() => setIsActiveBusiness(!isActiveBusiness)}>
          Business Solutions
          {isActiveBusiness ? <span className="ml-2">&#x25BC;</span> : <span className="ml-2">&#x25B6;</span>}
        </div>
        {isActiveBusiness && (
          <div className="">
            <div className="dropdown-item foropt">
              <span>About Business Solutions</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Pro</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Certified</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Enterprise</span>
            </div>
            <div className="dropdown-item foropt">
              <span>ClearVoice</span>
            </div>
            <div className="dropdown-item foropt">
              <span>Content Marketing</span>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu;
