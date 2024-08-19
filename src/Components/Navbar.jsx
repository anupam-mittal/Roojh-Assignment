// Navbar.js
import React from 'react';
import Bell from '../assets/DashBoardIcons/Bell.png';
import Search from '../assets/DashBoardIcons/Search.png';
import ThemeBtn from '../assets/DashBoardIcons/ThemeBtn.png';
import UserLogo from '../assets/DashBoardIcons/UserLogo.png';
function Navbar(){
  return (
    <div className='w-[1190px] h-[80px] flex flex-row pl-2 pr-8 justify-between text-center items-center'>
        <p className='w-[112px] h-[26px] font-[500px] text-[24px]'>Dashboard</p>
        <div className='flex flex-row w-[502px] h-[44px] justify-between text-center items-center'>
            <div className='flex flex-row p-3 bg-[#F2F4F7] rounded-3xl w-[300px] h-[44px]'>
                <img src={Search} className='h-6'/>
                <input type='text' placeholder='Search' className='bg-[#F2F4F7]'/>
            </div>
            <img src={ThemeBtn} className='h-[24px] w-[24px]'/>
            <img src={Bell} className='h-[24px] w-[24px]'/>
            <img src={UserLogo} className='h-[24px] w-[24px]'/>
        </div>
    </div>
  );
};

export default Navbar;
