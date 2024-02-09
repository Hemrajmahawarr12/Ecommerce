import React from 'react';
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbBrandElectronicArts } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import './nav.css';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=' w-[100%]'>
        <div className=' top-hearder px-20 p-[5px] flex bg-[#d6f0fa]'>
          <div className='my-1 color-[#87CEFA]'>
            <MdOutlineLocalShipping />
          </div>
          <div className='ml-5 text-[18px] '>
            <p className='color-[#87CEFA]'>Free shipping when shopping upto $1000</p>
          </div>

        </div>
        <div className='mid-header flex justify-between'>
          <div className='logo flex ml-[10px]  '>
            <TbBrandElectronicArts className='text-[60px] ' />
            <h2 className='my-2 text-[30px]'>ElectroMart</h2>
          </div>
          <div className='search-box my-2 flex'>
            <input type='text' placeholder='Search...' className='w-[300px] pl-[15px] sm:text-[17px] border border-[black] rounded-tl-[15px] rounded-bl-[15px]'></input>
            <button className='border text-[32px] h-[45px] w-[75px] rounded-tr-[15px] rounded-br-[15px] flex justify-center items-center border-[#bc3232] text-[#bc3232]  hover:bg-[#bc3232]  hover:text-[#fed700]' ><IoMdSearch /></button>
          </div>
          <div className='user flex mr-[50px] mt-3'>
            <div className='login-icon mt-[9px]'>
              <FiLogIn />
            </div>
            <div className='btn '>
              <button className='bg-[#bc3232] text-[#ffffff] rounded-md w-[60px] h-[35px]'>Login</button>
            </div>
          </div>
          <div className='user flex mr-[50px] mt-3'>
            <div className='login-icon mt-[9px]'>
              <CgLogOut />
            </div>
            <div className='btn '>
              <button className='bg-[#bc3232] text-[#ffffff] rounded-md w-[70px] h-[35px]'>Log Out</button>
            </div>
          </div>

        </div>
        <div className='last-header flex justify-between items-center w-[100%] p-[10px] bg-[#bc3232] text-[white]'>
          <div className='userName flex'>
            <div className='usertag mt-[4.5px]'><FaUser /></div>
            <h5 className='pl-[10px]'>Please Login</h5>
          </div>
          <div className='nav-li'> 
            <ul className='flex w-[500px] justify-between text-[18px]'>
              <li className='font-[600] cursor-pointer hover:text-[#fed700]' onClick={() => { navigate("/") }}>Home</li>
              <li className='font-[600] cursor-pointer hover:text-[#fed700]' onClick={() => { navigate("/shop") }}>Shop</li>
              <li className='font-[600] cursor-pointer hover:text-[#fed700]' onClick={() => { navigate("/collection") }}>Collection</li>
              <li className='font-[600] cursor-pointer hover:text-[#fed700]' onClick={() => { navigate("/about") }}>About</li>
              <li className='font-[600] cursor-pointer hover:text-[#fed700]' onClick={() => { navigate("/contect") }}>Contect</li>
            </ul>
          </div>
          <div >
            <p className='offer-nav mr-[20px] bg-[#fed700] text-[17px] font-[1000] text-[black] rounded p-[5px]'>FLAT 10% OVER ALL IPHONE</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Nav;

