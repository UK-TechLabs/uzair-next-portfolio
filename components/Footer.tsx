import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center w-full h-16 bg-primary'>
        <div className='flex justify-center space-x-6 w-full'>
        <div className="text-lg cursor-pointer h-16 flex items-center justify-center relative group px-4 hover:bg-gray-700">
            <i className="light-icon-user font-extrabold nav-icons"></i>
            <span className="absolute bottom-full mb-2 w-max p-1 bg-gray-700 text-white text-xs rounded hidden group-hover:block">About</span></div>
        </div>
    </div>
  )
}

export default Footer