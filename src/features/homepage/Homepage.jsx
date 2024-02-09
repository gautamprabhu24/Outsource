import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slider/Slide';
import { cards } from '../../data';
import CatCard from '../../components/catcard/CatCard';
import About from '../../components/aboutus/About';
import Bizz from '../../components/bizz/bizz';
const Homepage = () => {
  return (
    <div className='homepage'>
      <Featured/>
      <hr className='border border-solid border-gray-110'/>
      <div className='p-5 '>
      <Slide>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      </div>
      <About/>
      <Bizz/>
    </div>
  )
}

export default Homepage
