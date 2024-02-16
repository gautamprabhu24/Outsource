import React from 'react'
import { FaStar} from "react-icons/fa6";
import Slide from '../../components/slider/Slide';
import Slider from 'react-slick';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaClock, FaArrowsRotate, FaCheck } from "react-icons/fa6";

const Gig = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className} 
        style={{
          ...style,
          display: "block",background: "grey",borderRadius: "50%",cursor: "pointer",width:"19px",height:"20px"
        }}
        onClick={onClick}
      />
    );
  }

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", borderRadius:"20px",cursor:"pointer", width:"19px",height:"20px" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: false,
    centerPadding: '0'
  };
  return (
    <div name='gig' className=''>
      <div name='container' className='m-5 flex flex-col xl:mx-[125px] xl:flex-row xl:flex-wrap xl:relative'>
      <div name='left' className='flex flex-col xl:w-[48vw]'>
        <span name='breadcrumbs' className='font-amaze text-gray-500 text-sm font-medium'>OUTSOURCE &gt; GRAPHIC DESIGN</span>
          <h1 className='text-[#0D1B2A] text-[30px] font-semibold py-7 leading-none'>I will create AI Generated Art for you</h1>
          <div name='profile' className='flex items-center gap-2'>
            <img src='https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' className='h-[35px] w-[35px] rounded-full object-cover'/>
            <span className='font-amaze font-semibold text-gray-500'>Jhon Doe</span>
            <div name='stars' className='flex items-center text-yellow-500'>
                <FaStar/>
            </div>
            <span className='font-amaze font-medium text-[18px] text-gray-500'>5</span>
          </div>
      <div>
      <div name="slider" className='w-3/4 m-auto'>
    <div name="container" className='mt-5 mb-5' >
      <Slider {...settings} className="mx-auto" >
       <img src='https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
       <img src='https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
       <img src='https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
      </Slider>

    </div>
  </div>
      </div>
      </div>
      <div name='right' className='flex flex-col p-3 xl:w-[25pc] xl:sticky xl:top-[10pc] xl:left-[60pc]'>
          <div name='pricing' className='border-[1px] border-slate-500 p-5'>
            <div className='flex justify-between'>
              <h2 className='font-amaze text-[#0D1B2A] font-semibold'>1 AI Generated Image</h2>
              <h2 className='font-amaze text-gray-600 text-[20px]'>₹2000</h2>
            </div>
            <p className='font-amaze text-gray-600 font-medium py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, porro quidem delectus at soluta nostrum, excepturi tenetur aut ea, nam quae.</p>
            <div className='flex justify-between'>
              <div className='flex gap-1 items-center text-gray-700'>
                <FaClock/>
                <span className='text-[15px] font-medium'>2 days delivery</span>
              </div>
              <div className='flex gap-1 items-center text-gray-700'>
                <FaArrowsRotate/>
                <span className='text-[15px] font-medium'>3 Revisions</span>
              </div>
            </div>
            <div className='py-2 flex flex-col'>
              <div className='flex gap-2 items-center'>
                <FaCheck className='text-[#365486]'/>
                <span>Prompt writing</span>
              </div>
              <div className='flex gap-2 items-center'>
                <FaCheck className='text-[#365486]'/>
                <span>Artwork delivery</span>
              </div>
              <div className='flex gap-2 items-center'>
                <FaCheck className='text-[#365486]'/>
                <span>Image upscaling</span>
              </div>
              <div className='flex gap-2 items-center'>
                <FaCheck className='text-[#365486]'/>
                <span>Additional design</span>
              </div>
            </div>
            <button className='hover:border-[#365486] hover:text-[#365486] border-[1px] w-full p-2 my-2 font-medium text-white bg-[#365486] hover:bg-white'>Continue</button>

          </div>

      </div>
      <div name='remainleft' className='flex flex-col xl:w-[48vw]'>
      <h2 className='font-amaze font-semibold text-[#365486] text-[18px] py-4 pt-2'>About this Gig</h2>
      <p name='desc' className='font-amaze text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint delectus ea, consectetur fugiat atque ad officia aut magnam itaque laudantium dicta consequatur minima quos repudiandae molestiae rerum cum, labore, possimus dolorem ipsam commodi iure iste. Voluptatem.</p>
      
      <div name="seller" className='py-3'>
        <h2 className='font-amaze font-semibold text-[#365486] text-[18px] py-4'>About the Seller</h2>
        <div className='flex flex-col justify-center w-full items-center gap-3 xl:flex-row'>
          <img src='https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' className='h-[80px] w-[80px] rounded-full object-cover xl:h-[90px] xl:w-[90px]'/>
          <div className='flex flex-col justify-center w-full items-center xl:items-start'>
            <span className='font-amaze font-semibold text-gray-500'>Jhon Doe</span>
            <div className='flex gap-3 items-center'><FaStar className='text-yellow-500'/><span className='font-amaze font-medium text-[18px] text-gray-500'>5</span></div>
            <button className='border-[#365486] text-[#365486] border-[1px] w-full p-2 font-medium hover:text-white hover:bg-[#365486] xl:w-[150px] xl:p-1'>Contact Me</button>
          </div>
        </div>
        <div className='border-gray-500 border-[1px] my-3 p-5'>
          <div className='pb-2 xl:flex'>
            <div  className='flex flex-col gap-3 xl:w-1/2 xl:justify-start'>
              <div className='flex flex-col gap-1'>
                <span className='font-amaze font-medium text-gray-600'>From</span>
                <span className='font-amaze font-semibold text-gray-900'>USA</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-amaze font-medium text-gray-600'>Member since</span>
                <span className='font-amaze font-semibold text-gray-900'>Aug 2022</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-amaze font-medium text-gray-600'>Average response time</span>
                <span className='font-amaze font-semibold text-gray-900'>5 hrs</span>
              </div>
            </div>
          <div  className='flex flex-col gap-3  xl:w-1/2 xl:justify-start'>
            <div className='flex flex-col gap-1'>
              <span className='font-amaze font-medium text-gray-600'>Latest Delivery</span>
              <span className='font-amaze font-semibold text-gray-900'>1 Day</span>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='font-amaze font-medium text-gray-600'>Languages</span>
              <span className='font-amaze font-semibold text-gray-900'>English</span>
            </div>
          </div>
          </div>
          <hr className='py-2 border-2px border-slate-400'></hr>
          <p name='about'  className='font-amaze font-medium text-gray-600 leading-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo distinctio, nam provident necessitatibus voluptatibus itaque voluptates? Blanditiis cumque in dolores fugiat unde, quam voluptatum tempore vero! Impedit, omnis reiciendis.</p>
        </div>
      </div>
      <div name='review'>
        <h2  className='font-amaze font-semibold text-[#365486] text-[18px] py-4'>Reviews</h2>
        <div name='reviewall' className='flex flex-col gap-3'>
        <div name='reviewone'>
        <div name='infowho' className='flex gap-2'>
          <img src='https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' className='h-[50px] w-[50px] rounded-full object-cover'/>
          <div>
            <span className='font-amaze font-semibold text-[#0D1B2A] text-[14px]'>Aisha Takiya</span>
            <div className='flex gap-2 items-center'>
            <img src='https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg' alt='' className='h-[10px] w-[15px]'/>
            <span className='font-amaze font-medium text-gray-500'>Murican</span>
            </div>

          </div>
        </div>
        <div className='flex gap-3 items-center py-2'><FaStar className='text-yellow-500'/><span className='font-amaze font-medium text-[16px] text-gray-500'>5</span></div>
        <p className='font-amaze font-medium text-gray-600 leading-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore quis, temporibus voluptas omnis voluptatibus error beatae sapiente officia, aut vel corporis ipsa nemo eius sit amet. Asperiores, expedita cum?</p>
        <div className='flex py-2 items-center gap-2 font-medium text-[14px]'>
          <span>Helpful?</span>
          <AiFillLike/>
          <span>Yes</span>
          <AiFillDislike/>
          <span>No</span>

        </div>
        <hr className='border-2px border-slate-500'></hr>
        </div>
        <div name='reviewone'>
        <div name='infowho' className='flex gap-2'>
          <img src='https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' className='h-[50px] w-[50px] rounded-full object-cover'/>
          <div>
            <span className='font-amaze font-semibold text-[#0D1B2A] text-[14px]'>Aisha Takiya</span>
            <div className='flex gap-2 items-center'>
            <img src='https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg' alt='' className='h-[10px] w-[15px]'/>
            <span className='font-amaze font-medium text-gray-500'>Murican</span>
            </div>

          </div>
        </div>
        <div className='flex gap-3 items-center py-2'><FaStar className='text-yellow-500'/><span className='font-amaze font-medium text-[16px] text-gray-500'>5</span></div>
        <p className='font-amaze font-medium text-gray-600 leading-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore quis, temporibus voluptas omnis voluptatibus error beatae sapiente officia, aut vel corporis ipsa nemo eius sit amet. Asperiores, expedita cum?</p>
        <div className='flex py-2 items-center gap-2 font-medium text-[14px]'>
          <span>Helpful?</span>
          <AiFillLike/>
          <span>Yes</span>
          <AiFillDislike/>
          <span>No</span>

        </div>
        <hr className='border-2px border-slate-500'></hr>
        </div>
        
        <div name='reviewone' className=''>
        <div name='infowho' className='flex gap-2'>
          <img src='https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' className='h-[50px] w-[50px] rounded-full object-cover'/>
          <div>
            <span className='font-amaze font-semibold text-[#0D1B2A] text-[14px]'>Aisha Takiya</span>
            <div className='flex gap-2 items-center'>
            <img src='https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg' alt='' className='h-[10px] w-[15px]'/>
            <span className='font-amaze font-medium text-gray-500'>Murican</span>
            </div>

          </div>
        </div>
        <div className='flex gap-3 items-center py-2'><FaStar className='text-yellow-500'/><span className='font-amaze font-medium text-[16px] text-gray-500'>5</span></div>
        <p className='font-amaze font-medium text-gray-600 leading-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore quis, temporibus voluptas omnis voluptatibus error beatae sapiente officia, aut vel corporis ipsa nemo eius sit amet. Asperiores, expedita cum?</p>
        <div className='flex py-2 items-center gap-2 font-medium text-[14px]'>
          <span>Helpful?</span>
          <AiFillLike/>
          <span>Yes</span>
          <AiFillDislike/>
          <span>No</span>

        </div>
        <hr className='border-2px border-slate-500'></hr>
        </div>
        </div>
      </div>
      
      </div>
      </div>
    </div>
  )
}

export default Gig
