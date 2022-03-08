import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../img/banner.jpg'
import choose from '../img/choose.jpg'
import connect from '../img/connect.jpg'
import prepare from '../img/prepare.jpg'

const HomePage = () => {
  return (
    <div className="container-fluid">
        <div class="lg:flex">
            <img src={banner} alt="" />
        </div>
        <div className="">
            <div className="">
            </div>
            <div className="lg:mx-12 my-4 ">
                <div className="mb-10 p-10">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-16 gap-8 ">
                        <div className="flex flex-col items-center justify-center shadow-md h-60 border-2 border-gray w-full  rounded-3xl bg-white">
                                hi
                        </div>
                        <div className="flex flex-col items-center justify-center shadow-md h-60 border-2 border-gray w-full rounded-3xl bg-white">
                                hi
                        </div><div className="flex flex-col items-center justify-center h-60 border-2 border-gray w-full shadow-md rounded-3xl bg-white">
                                hi
                        </div><div className="flex flex-col items-center justify-center h-60  border-2 border-gray w-full shadow-md rounded-3xl bg-white">
                                hi
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="flex flex-col pb-20 justify-center text-white items-center" style={{background:'#10a1ad'}}>
                    <h2 className='lg:text-3xl text-xl mt-20 font-bold'> In an Emergency ?  Need Help Now?</h2>
                    <p className='text-wrap lg:w-8/12 w-10/12 lg:mt-10 md:mt-5 mt-4 lg:text-lg md:text-md sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et beatae, odit nihil ducimus, 
                        natus quos itaque hic porro obcaecati explicabo laudantium impedit soluta eius officia sunt tenetur placeat quia.</p>
                    <Link to={""} className="border rounded-full border-white mt-10 lg:text-2xl md:text-xl text-lg font-bold md:px-3 lg:px-5 md:py-2 lg:py-3 px-3 py-2 lg:w-4/12">
                        Make Appointment
                    </Link>
            </div>  
            <div className="flex flex-col lg:py-40 md:py-20 py-20 text-gray-700 justify-center text-white items-center" >
                    <h2 className='lg:text-2xl text-xl  font-bold'> Find the right care, doctor,hospital <br />
                    right at your finger tips</h2>
                    <p className='text-wrap lg:w-8/12 w-10/12 lg:mt-8 md:mt-3 mt-3 lg:text-md md:text-md sm:text-sm text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et beatae, odit nihil ducimus:</p>
                    
            </div>   
            <div className="mx-5 bg-gray-100 mb-5">
                <div className="py-4 px-8 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 justify-items-center">
                    <div className="w-full flex flex-col m-3 shadow-md bg-white justify-center place-items-center">
                        <p className="my-8 font-semibold text-center text-3xl">Choose</p>
                        <img src={choose} alt="" width="250" className=" my-6" />
                        <p className=" text-center text-1xl text-wrap w-8/12 mb-4">Find Doctors and hospitals based on the factors that matter most to you.</p>
                    </div>
                    <div className="w-full flex flex-col m-3 shadow-md bg-white justify-center place-items-center">
                        <p className="my-8 font-semibold text-center text-3xl">Connect</p>
                        <img src={connect} alt="" width="250" className=" my-6" />
                        <p className=" text-center text-1xl text-wrap w-8/12 mb-4">Conveniently shedule your appointment by phone or online when available.</p>
                    </div>
                    <div className="w-full flex flex-col lg:m-3 shadow-md bg-white justify-center place-items-center">
                        <p className="my-8 font-semibold text-center text-3xl">Prepare</p>
                        <img src={prepare} alt="" width="250" className=" my-6" />
                        <p className=" text-center text-1xl text-wrap w-8/12 mb-4">Learn what you need to know and which questions to ask your doctor.</p>
                    </div>
                </div>
            </div> 
            <div className="py-20">         
            </div>
        </div>
    </div>
  )
}

export default HomePage