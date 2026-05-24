"use client"

import Image from 'next/image'
import MenuIcon from '@/public/Images/menu-open.svg';
import IconChat from "@/public/Images/chat-icon.svg";
import IconNotifications from "@/public/Images/notification-icon.svg";
import IconShopping from "@/public/Images/shopping-bag-icon.svg";
import user from "@/public/Images/Nav-user.png"
import Link from 'next/link';
import { useTheme } from '../ThemeProvider';
import { sidebarContext } from '../SidebarProvider';
import { useContext } from 'react';



const Navbar = () => {

  const { toggleSidebar } = useContext(sidebarContext)
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='px-[18%] md:px-[16%] pr-[8%] py-4 bg-body z-50 border-b border-gray-600 fixed top-0 left-0 w-full'>
      <button
        onClick={toggleTheme}
        className='fixed bottom-2 right-10 px-5 py-2 rounded-full border border-white bg-body hover:bg-white hover:text-black transition-all duration-300 shadow-lg z-50 cursor-pointer'
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Sidebar Toggle */}
      <div
        onClick={toggleSidebar}
        className='absolute h-full w-15 md:w-20 flex items-center justify-center cursor-pointer bg-white top-0 left-0 z-50'
      >
        <Image
          src={MenuIcon}
          alt="MenuIcon"
          width={24}
          height={24}
          className={theme === "light" ? "invert" : ""}
        />
      </div>

      <div className='flex items-center justify-between gap-5'>
        {/* Logo */}
        <Link href="/" className='clash-font font-semibold text-5xl text-white flex'>
          UI <div className='text-prim -translate-y-1 '>●</div>Lab
        </Link>

        <div className='flex items-center gap-10'>
          <div className='items-center gap-3 hidden md:flex'>
            <div className='relative cursor-pointer'>
              <Image
                src={IconChat}
                alt="IconChat"
                width={30}
                height={30}
                className={`${theme === "light" ? "invert" : "invert-50 hover:invert-0 transition-all duration-300"}`}
              />

              <span className='absolute bg-second rounded-full -top-2 -right-2 text-black font-bold text-xs w-5 h-5 flex justify-center items-center'>
                2
              </span>
            </div>

            <div className='relative cursor-pointer'>
              <Image
                src={IconNotifications}
                alt="IconNotifications"
                width={30}
                height={30}
                className={`${theme === "light" ? "invert" : "invert-50 hover:invert-0 transition-all duration-300"}`}
              />

              <span className='absolute bg-second rounded-full -top-2 -right-2 text-black font-bold text-xs w-5 h-5 flex justify-center items-center'>
                2
              </span>
            </div>

            <div className='relative cursor-pointer'>
              <Image
                src={IconShopping}
                alt="IconShopping"
                width={30}
                height={30}
                className={`${theme === "light" ? "invert" : "invert-50 hover:invert-0 transition-all duration-300"}`}
              />

              <span className='absolute bg-second rounded-full -top-2 -right-2 text-black font-bold text-xs w-5 h-5 flex justify-center items-center'>
                2
              </span>
            </div>
          </div>

          {/* User */}
          <div className='hidden md:flex items-center gap-2'>
            <Image
              src={user}
              alt="user"
              width={40}
              height={40}
            />
            <h2 className='clash-font font-medium text-2xl'>Isabella</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar