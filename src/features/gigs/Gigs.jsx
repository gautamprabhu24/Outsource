import React, {useState} from 'react'
import Gigcard from '../../components/gigcard/Gigcard'
import { gigs } from '../../data';
import {FaAngleDown} from "react-icons/fa6";

const Gigs = () => {

  const [open, setOpen]=useState(false);
  const [sort, setSort]=useState("sales");

  const reSort=(type)=>
  {
    setSort(type);
    setOpen(false);
  }

  return (
    <div name='gig' className=''>
      <div name='container' className='m-5 md:flex md:flex-col md:gap-[15px] md:px-[100px]'>
        <span name='breadcrumbs' className='font-amaze text-gray-500 text-sm font-medium'>OUTSOURCE &gt; GRAPHIC DESIGN</span>
        <h1 className='text-[#0D1B2A] text-[30px] font-semibold py-2'>AI Artists</h1>
        <p className='text-gray-600 font-amaze font-medium'>Explore the boundaries of Art & Technology with Outsource AI Artists.</p>
        <div name='menu' className='py-2 md:flex md:justify-between'>
          <div name='left' className='flex gap-3 w-full items-center'>
            <span className='font-amaze font-semibold text-[#0D1B2A]'>Budget</span>
            <input type='text' placeholder='min' className='text-gray-500 font-medium w-1/4 border-gray-400 border-[1px] rounded-lg px-1 focus:border-blue-400 focus:outline-none'></input>
            <input type='text' placeholder='max' className='text-gray-500 font-medium w-1/4 border-gray-400 border-[1px] rounded-lg px-1 focus:border-blue-400 focus:outline-none'></input>
            <button className='forpopular font-medium px-2'>Apply</button>
          </div>
          <div name='right' className='flex gap-2 items-center pt-2 md:w-1/2 md:justify-end '>
            <span className='font-amaze font-semibold text-[#0D1B2A]'>Sort By: </span>
            <div className='flex items-center gap-2 relative group cursor-pointer' onClick={()=>setOpen(!open)}>
            <span className='text-gray-500 font-medium '>{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <FaAngleDown className={`text-gray-500 font-medium transition duration-150 ease-in-out transform ${open ? 'rotate-180' : ''}`}/>
            
            {open && <div name='rightdrop' className='fordrop absolute top-5'>
              {sort === "sales" ? <span className='foroptspa' onClick={()=>reSort("createdAt")}>Newest</span> :
              <span className='foroptspa' onClick={()=>reSort("sales")}>Best Selling</span>}
            </div>}</div>

          </div>
        </div>
        <div name='cards' className='md:flex md:flex-wrap md:justify-between'>
        {gigs.map(card=>(
          <Gigcard key={card.id} item={card}/>
        ))}</div>
      </div>
      

    </div>
  )
}

export default Gigs