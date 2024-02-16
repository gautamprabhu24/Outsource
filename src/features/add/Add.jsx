import React from "react";


const Add = () => {
  return (
    <div Name="add" className="flex justify-center">
      <div Name="container" className="w-[600] p-9 md:w-[1400px] overflow-hidden">
        <h1 className="font-amaze w-full font-semibold text-[22px] ">Add New Gig</h1>
        <div Name="sections" className="flex flex-col gap-10 md:gap-24">
          <div Name="info" className="flex flex-col gap-3">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Type here..."
             className="p-2 rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] "
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats" className="p-5 rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" className="rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]"/>
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple className="rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]"/>
            <label htmlFor="">Description</label>
            <textarea name="" id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16" className="p-2 rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]"></textarea>
          </div>
          <div Name="details" className=" flex flex-col gap-3">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="e.g. web design"  className="rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] p-1"/>
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10" className="rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] p-1"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number"  className="rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]"/>
            <label htmlFor="">Revision Number</label>
            <input type="number" className="rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]" />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. page design" className="rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] p-1"/>
            <input type="text" placeholder="e.g. file uploading" className="rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] p-1" />
            <input type="text" placeholder="e.g. setting up a domain" className="rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] p-1"/>
            <input type="text" placeholder="e.g. hosting" className="rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] p-1" />
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
          <button className="p-5 font-amaze font-medium bg-[#0F1035] text-white  hover:bg-[#365486] rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]">Create</button>
        </div>
      </div>
    </div>
  );
};

export default Add;