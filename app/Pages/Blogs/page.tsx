"use client"

import Image from "next/image"
import Link from "next/link"
import BlogsData from "@/app/JsonData/BlogsData.json"

const page = () => {
  return (
    <>
      <div className='mt-5 py-5 pb-20'>
        <div className='title'>
          <h1 className='clash-font font-semibold text-5xl md:text-8xl'>
            Our Blogs
          </h1>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BlogsData.map((blog, index) => (
              <Link href={`/Pages/Blogs/${blog.id}`} key={index} className="">
                <div className="p-8 rounded-2xl bg-[#2D333C] cursor-pointer">
                  <div className="mt-5 mb-8 rounded-2xl overflow-hidden group">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={500}
                      loading="eager"
                      className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300"
                    />
                  </div>

                  <span className="clash-font font-medium bg-third text-black px-3 rounded uppercase">
                    {blog.tag}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default page