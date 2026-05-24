import Image from 'next/image'
import MenuIcon from '@/public/Images/menu-open.svg';
import IconChat from "@/public/Images/chat-icon.svg";
import IconNotifications from "@/public/Images/notification-icon.svg";
import IconShopping from "@/public/Images/shopping-bag-icon.svg";
import user from "@/public/Images/Nav-user.png"
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='px-[18%] md:px-[16%] pr-[8%] py-4 bg-body z-50 border-b border-gray-600 fixed top-0 left-0 w-full'>
      {/* Sidebar Toggle */}
      <div className='absolute h-full w-15 md:w-20 flex items-center justify-center cursor-pointer bg-(--white) top-0 left-0 z-50'>
        <Image
          src={MenuIcon}
          alt="MenuIcon"
        />
      </div>

      <div className='flex items-center justify-between gap-5'>
        {/* Logo */}
        <Link href="/" className='clash-font font-semibold text-5xl text-white flex'>
          UI <div className='text-prim -translate-y-1 '>●</div>Lab
        </Link>
      </div>
    </div>
  )
}

export default Navbar