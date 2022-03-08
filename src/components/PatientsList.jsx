import React from 'react'
import patient from '../img/patient.jpg';
import doctor from '../img/doctor-thumb-02.jpg';

const PatientsList = () => {
  return (
      <div className="">
          <div className="container-fluid h-24" style={{backgroundColor: "#15558d"}}>
          <div className="flex justify-content-start pt-4">
              <div className="pl-4 text-sm text-white">
                  <p>Home / Appointments</p>
              </div>
          </div>
          <div className="flex justify-content-start">
              <div className="pl-4 text-xl font-bold text-white">
                  <p>Appointments</p>
              </div>
          </div>
      </div>
      <div className="bg-gray-50 flex p-6">
            <div className="bg-grey-100 shadow-md w-1/4">
                    <div className="w-full flex  justify-center p-2">
                        <img src={doctor} alt="" width="120" height="120" className="border-4 border-gray-200 rounded-full"/>
                    </div>
                <div className="text-center">
                    <p className="font-semibold text-lg">Dr. Darren Elder</p>
                    <p className="font-normal text-gray-400 text-sm p-1">Newyork, United States</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-blue-400" >Dashboard</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Appointments</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >My Patients</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Schedule Timings</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Invoices</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Reviews</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Message</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Profile Settings</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Social Media</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Change Password</p>
                </div>
                <div className="container-fluid border-1 border-slate-100 py-4">
                    <p className="text-left	pl-4 pr-3 text-md capitalize text-gray-600	hover:text-sky-400" >Logout</p>
                </div>
            </div>
            <div className="w-3/4 ml-8 px-3 py-2 h-screen overflow-y-auto">
                <div className="bg-white shadow-sm mb-1 flex justify-between p-3">
                    <div className="p-1 flex">
                    <img src={patient} alt="" width="120" height="120"/>
                    <div className="text-left ml-8 p-2">
                        <p className="font-semibold text-lg">Richard Wilson</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">14 Nov 2019, 10.00 AM</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-xs p-0.5">Newyork, United States</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-xs p-0.5">richard@example.com</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-xs p-0.5">+1 923 782 4575</p>
                    </div>
                    </div>
                    <div className="flex m-4 pt-8">
                        <div className="">
                        <button type="button" class="bg-slate-100 text-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><i class="fa fa-eye-open"></i>View</button>
                        <button type="button" class="bg-green-100 text-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Accept</button>
                        <button type="button" class="bg-red-100 text-red-400	 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancel</button>

                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-sm mb-1 flex justify-between p-3">
                    <div className="p-1 flex">
                    <img src={patient} alt="" width="120" height="120"/>
                    <div className="text-left ml-8 p-2">
                        <p className="font-semibold text-lg">Richard Wilson</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">14 Nov 2019, 10.00 AM</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">Newyork, United States</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">richard@example.com</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">+1 923 782 4575</p>
                    </div>
                    </div>
                    <div className="flex m-4 pt-8">
                        <div className="">
                        <button type="button" class="bg-slate-100 text-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><i class="fa fa-eye-open"></i>View</button>
                        <button type="button" class="bg-green-100 text-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Accept</button>
                        <button type="button" class="bg-red-100 text-red-400	 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancel</button>

                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-sm mb-1 flex justify-between p-3">
                    <div className="p-1 flex">
                    <img src={patient} alt="" width="120" height="120"/>
                    <div className="text-left ml-8 p-2">
                        <p className="font-semibold text-lg">Richard Wilson</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">14 Nov 2019, 10.00 AM</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">Newyork, United States</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">richard@example.com</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">+1 923 782 4575</p>
                    </div>
                    </div>
                    <div className="flex m-4 pt-8">
                        <div className="">
                        <button type="button" class="bg-slate-100 text-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><i class="fa fa-eye-open"></i>View</button>
                        <button type="button" class="bg-green-100 text-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Accept</button>
                        <button type="button" class="bg-red-100 text-red-400	 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancel</button>

                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-sm mb-1 flex justify-between p-3">
                    <div className="p-1 flex">
                    <img src={patient} alt="" width="120" height="120"/>
                    <div className="text-left ml-8 p-2">
                        <p className="font-semibold text-lg">Richard Wilson</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">14 Nov 2019, 10.00 AM</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">Newyork, United States</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">richard@example.com</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">+1 923 782 4575</p>
                    </div>
                    </div>
                    <div className="flex m-4 pt-8">
                        <div className="">
                        <button type="button" class="bg-slate-100 text-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><i class="fa fa-eye-open"></i>View</button>
                        <button type="button" class="bg-green-100 text-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Accept</button>
                        <button type="button" class="bg-red-100 text-red-400	 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancel</button>

                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-sm mb-1 flex justify-between p-3">
                    <div className="p-1 flex">
                    <img src={patient} alt="" width="120" height="120"/>
                    <div className="text-left ml-8 p-2">
                        <p className="font-semibold text-lg">Richard Wilson</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">14 Nov 2019, 10.00 AM</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">Newyork, United States</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">richard@example.com</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">+1 923 782 4575</p>
                    </div>
                    </div>
                    <div className="flex m-4 pt-8">
                        <div className="">
                        <button type="button" class="bg-slate-100 text-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><i class="fa fa-eye-open"></i>View</button>
                        <button type="button" class="bg-green-100 text-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Accept</button>
                        <button type="button" class="bg-red-100 text-red-400	 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancel</button>

                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-sm mb-1 flex justify-between p-3">
                    <div className="p-1 flex">
                    <img src={patient} alt="" width="120" height="120"/>
                    <div className="text-left ml-8 p-2">
                        <p className="font-semibold text-lg">Richard Wilson</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-xs">14 Nov 2019, 10.00 AM</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">Newyork, United States</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">richard@example.com</p>
                        <p className="text-gray-400 font-normal hover:font-medium text-sm">+1 923 782 4575</p>
                    </div>
                    </div>
                    <div className="flex m-4 pt-8">
                        <div className="">
                        <button type="button" class="bg-slate-100 text-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><i class="fa fa-eye-open"></i>View</button>
                        <button type="button" class="bg-green-100 text-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Accept</button>
                        <button type="button" class="bg-red-100 text-red-400	 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancel</button>

                        </div>
                    </div>
                </div>

            </div>
      </div>
      </div>
      
      
  )
}

export default PatientsList