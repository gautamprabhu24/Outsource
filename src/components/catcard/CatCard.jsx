import React from 'react';
import { Link } from 'react-router-dom';

const CatCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div name="catcard" className="w-252 h-full mx-2 text-white rounded-md cursor-pointer relative">
        <img src={item.img} alt="" className="w-full h-full object-contain rounded-md hover:opacity-80 " />
      </div>
    </Link>
  );
};

export default CatCard;
