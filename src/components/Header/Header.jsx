import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { FiMenu  } from 'react-icons/fi';
import { IoMdClose } from "react-icons/io";



const Header = () => {

    const [open, setOpen] = useState(false)


    return (
        <nav className='flex flex-col md:flex-row justify-between items-center p-4 border-b-2 border-red-300'>
           
           <div className='md:hidden' onClick={()=>setOpen(!open)}>
            {
                open === true ? 
                  <IoMdClose className='text-2xl'></IoMdClose>
                : <FiMenu className='text-2xl '></FiMenu> 
            }
          </div>
           

            <h1 className='text-2xl md:text-4xl font-bold mb-4 md:mb-0'>
                <span className='text-red-500'>TASTE</span>NEST
            </h1>

            <div className={`md:flex md:flex-row sm:flex-none list-none gap-4 md:gap-8 text-base md:text-lg items-center justify-center
            ${open ? '' : 'hidden'}`}>
                <a className='hover:bg-red-500 rounded-lg p-2' href="#Home">Home</a>
                <a className='hover:bg-red-500 rounded-lg p-2' href="#Recipe">Recipe</a>
                <a className='hover:bg-red-500 rounded-lg p-2' href="#About">About</a>
                <a className='hover:bg-red-500 rounded-lg p-2' href="#Email">Email</a>
            </div>

            <div className='flex items-center gap-4 md:gap-8 mt-4 md:mt-0'>
                <div className='relative'>
                    <input 
                        className='p-2 pl-10 rounded-xl bg-slate-200 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-red-500'
                        type="search" 
                        placeholder='Search...'
                    />
                    <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-700' />
                </div>
                <CgProfile className='text-red-400 text-2xl md:text-3xl cursor-pointer' />
            </div>
        </nav>
    );
};

export default Header;
