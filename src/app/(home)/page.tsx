
import React from 'react'
import { ImGithub } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsBrowserChrome } from "react-icons/bs";

function HomePage() {
  return (
    <div className='w-full text-center mt-7'>
      <h2 className='text-5xl font-bold'>Welcome To <span className='text-amber-500' >Blog</span> Landing Page</h2>
      <p className='text-lg mt-6 w-1/2 mx-auto text-start'>
        Discover a variety of articles, insights, and stories on our blog. Stay informed, inspired, and entertained as you explore our latest posts.
        </p>
        <div className='flex justify-end pr-7 mt-8 gap-10'>
        <FaLinkedinIn  size={30}/>
        <ImGithub  size={30}/>
        <BsBrowserChrome  size={30}/>
        </div>
    </div>
  )
}

export default HomePage