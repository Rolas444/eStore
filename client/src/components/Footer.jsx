import React from 'react'
import { logoStoreInvert } from '../assets';
import { BsFacebook, BsGithub, BsYoutube, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';
import {CiUser} from "react-icons/ci"
import {IoBagCheckOutline} from "react-icons/io5";
import {FaHome} from "react-icons/fa";
import {MdPlace} from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-TitleFont'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
        <div className='flex flex-col gap-7'>
          <img className='w-32' src={logoStoreInvert} alt='logoLight' />
          <p className='text-white text-sm tracking-wide'>mark registred</p>
          <div className='flex gap-5 text-lg text-gray-500'>
            <BsFacebook className='hover:text-white duration-300 cursor-pointer' />
            <BsGithub className='hover:text-white duration-300 cursor-pointer' />
            <BsYoutube className='hover:text-white duration-300 cursor-pointer' />
            <BsTwitter className='hover:text-white duration-300 cursor-pointer' />
            <BsLinkedin className='hover:text-white duration-300 cursor-pointer' />
            <BsInstagram className='hover:text-white duration-300 cursor-pointer' />
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            locate us
          </h2>
          <div className='text-base flex flex-col gap-2'>
            <p>xxxxx, xxxxx, xxxx </p>
            <p>Mobile: 00000 0000 000 </p>
            <p>Phone: 000 000 000</p>
            <p>e-mail: xxxxx@xxx.xx </p>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            profile
          </h2>
          <div className='text-base flex flex-col gap-2'>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span><CiUser/></span> my account
              </p>
              <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span><IoBagCheckOutline/></span> checkout
              </p>
              <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span><FaHome/></span> order tracking
              </p>
              <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span><MdPlace/></span> help & support
              </p>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <input 
          className='bg-transparent broder px-4 py-2 text-sm'
          placeholder='e-mail'
          type='text'
          />
          <button className='text-sm border tect-white border-t-0 hover:bg-gray-900
          active:bg-white active:text-black'>
            subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer;