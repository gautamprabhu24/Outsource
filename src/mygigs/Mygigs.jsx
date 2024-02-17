import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

function Mygigs() {
  const currentUser = {
    id: 1,
    username: "gautam",
    isSeller: true,
  };

  return (
    <div name="myGigs" className="flex justify-center bg-[#DCF2F1]">
      <div name="container" className="w-[600px] p-5 md:w-[1200px]">
        <div name="title" className="flex justify-between font-amaze font-semibold text-[18px] mb-3" >
          <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button className="transition-transform transform hover:scale-125">Add New Gig</button>
            </Link>
          )}
        </div>
        <table className="w-full text-center text-white">
          <tr className="h-[50px] p-2 m-2 bg-[#0F1035]">
            <th className="mr-1">Title</th>
            <th className="mr-1">Image</th>
            <th className="mr-2">Price</th>
            <th className="mr-2">Sales</th>
            <th className="mr-2">Action</th>
          </tr>
          <tr className="bg-[#365486]">
            <td>
              <img
                name="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-[40px] w-[40px] rounded-full object-cover mx-auto mb-2 mt-1"
              />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>13</td>
            <td>
            <MdDeleteForever className="mx-auto cursor-pointer"/>
            </td>
          </tr>
          <tr className="bg-[#365486]">
            <td>
              <img
                name="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-[40px] w-[40px] rounded-full object-cover mx-auto mb-2"
              />
            </td>
            <td>Ai generated concept art</td>
            <td>120.<sup>99</sup></td>
            <td>41</td>
            <td>
            <MdDeleteForever className="mx-auto cursor-pointer" />
            </td>
          </tr>
          <tr className="bg-[#365486]">
            <td>
              <img
                name="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-[40px] w-[40px] rounded-full object-cover mx-auto mb-2"
              />
            </td>
            <td>High quality digital character</td>
            <td>79.<sup>99</sup></td>
            <td>55</td>
            <td>
            <MdDeleteForever className="mx-auto cursor-pointer" />
            </td>
          </tr>
          <tr className="bg-[#365486]">
            <td>
              <img
                name="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-[40px] w-[40px] rounded-full object-cover mx-auto mb-2"
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>119.<sup>99</sup></td>
            <td>29</td>
            <td>
            <MdDeleteForever className="mx-auto cursor-pointer" />
            </td>
          </tr>
          <tr className="bg-[#365486]">
            <td>
              <img
                name="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-[40px] w-[40px] rounded-full object-cover mx-auto mb-2"
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>59.<sup>99</sup></td>
            <td>34</td>
            <td>
            <MdDeleteForever className="mx-auto cursor-pointer" />
            </td>
          </tr >
          <tr className="bg-[#365486]">
            <td>
              <img
                name="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-[40px] w-[40px] rounded-full object-cover mx-auto mb-2"
              />
            </td>
            <td>Text based ai generated art</td>
            <td>110.<sup>99</sup></td>
            <td>16</td>
            <td>
            <MdDeleteForever className="mx-auto cursor-pointer" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Mygigs;