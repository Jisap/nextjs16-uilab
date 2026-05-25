import React from 'react'

const Footer = () => {
  return (
    <div className='px-[8%] lg:px-[16%] py-4 z-10 bg-body border-t border-gray-600 fixed bottom-0 left-0 w-full'>
      <div className='flex flex-wrap justify-between items-center gap-5'>
        <p className='GolosText'>
          Copyright @ 2026 <span className="text-prim hover:underline hover:text-prim/80">UI Lab.</span> All Rights Reserved.
        </p>
        <div className='hidden lg:flex items-center gap-5'>
          <i className='bi bi-facebook text-xl hover:text-prim cursor-pointer'></i>
          <i className='bi bi-twitter text-xl hover:text-prim cursor-pointer'></i>
          <i className='bi bi-instagram text-xl hover:text-prim cursor-pointer'></i>
          <i className='bi bi-youtube text-xl hover:text-prim cursor-pointer'></i>
          <i className='bi bi-github text-xl hover:text-prim cursor-pointer'></i>
        </div>
      </div>
    </div>
  )
}

export default Footer