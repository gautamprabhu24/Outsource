import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar, FaHeart } from "react-icons/fa6";

const Gigcard = ({item}) => {
  return (
    <div className='m-3'>
      <Link to='/gig/123'>
         <div name='gigcard' className='bg-white m-3 rounded-lg shadow-lg md:w-[324px] h-full'>
            <img src={item.img} alt='user'className='h-1/2 w-full rounded-t-lg'/>
            <div name='user' className='flex gap-3 py-3 px-2 items-center'>
               <img src={item.pp} alt='profile' className='h-[20px] w-[20px] rounded-full object-cover'/>
               <span className='font-amaze text-[15px] font-semibold text-black'>{item.username}</span>
            </div>
            <p name='desc' className='px-2 font-amaze text-[17px] font-medium leading-none'>{item.desc}</p>
            <div name='star' className='flex gap-1 p-2 items-center text-yellow-500'>
               <FaStar className='h-[18px]'/>
               <span className='font-amaze font-semibold text-[18px]'>{item.star}</span>
            </div>
            <hr className='w-full h-3'></hr>
            <div name='details' className='text-gray-500 px-2 flex justify-between'>
               <FaHeart/>
               <div name="price" className='flex gap-1 pb-2 items-center px-2'>
               <span className='font-amaze font-semibold text-[15px]'>Staring At</span>
               <h2 className='font-amaze font-semibold text-[15px]'>₹{(item.price)*82}</h2>
               </div>
            </div>
         </div>
      </Link>
      
    </div>
  )
}

export default Gigcard
