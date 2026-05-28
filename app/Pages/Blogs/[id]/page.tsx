"use client"

import BlogsData from '@/app/JsonData/BlogsData.json'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import post1 from "@/public/Images/blog-detail-post1.jpg"
import post2 from "@/public/Images/blog-detail-post2.jpg"
import post3 from "@/public/Images/blog-detail-post3.jpg"

const BlogDetails = () => {

  const params = useParams();
  const { id } = params;
  const blog = BlogsData.find((item) => item.id.toString() === id);
  if (!blog) {
    return (
      <div className='text-center py-20 text-white clash-font text-3xl'>
        Blog not Found
      </div>
    )
  }


  return (
    <>
      <div className='mt-5 pb-20'>
        <div className='pb-3 border-b border-gray-600 flex flex-wrap items-center gap-2'>
          <Link href="/" className="hover:text-prim text-2xl">
            Home
          </Link>

          <i className='bi bi-chevron-right pt-1.5'></i>

          <Link href="/Pages/Blogs" className="hover:text-prim text-2xl">
            Blogs
          </Link>

          <i className='bi bi-chevron-right pt-1.5'></i>

          <Link href={`/Pages/Blogs/${id}`} className="text-prim text-2xl">
            {blog.title}
          </Link>
        </div>

        {/* Blog Info */}
        <div className='p-10 border border-gray-500 mt-5 rounded-2xl'>
          <div className='rounded-2xl border border-gray-500 overflow-hidden'>
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={900}
              className='w-full h-full hover:scale-110 transition-all duration-300'
            />
          </div>

          <div className='mt-5'>
            <span className='inline-block mt-7 clash-font font-medium bg-third text-black px-4  rounded uppercase'>
              {blog.tag}
            </span>

            <h1 className='clash-font font-semibold text-4xl lg:text-6xl mt-4'>
              {blog.title}
            </h1>

            <p className='mt-3 w-full lg:w-[80%]'>
              {blog.desc}
            </p>

            <div className='flex flex-wrap items-center gap-3 mt-5 text-gray-400 clash-font'>
              <p className='clash-font font-medium text-gray-400 text-sm'>{blog.date}</p>
              <span className='text-gray-600'>•</span>
              <p className='clash-font font-medium text-gray-400 text-sm'>{blog.comment}</p>
              <span className='text-gray-600'>•</span>
              <p className='clash-font font-medium text-gray-400 text-sm'>{blog.author}</p>
              <Image
                src={blog.authorimg}
                alt={blog.author}
                width={100}
                height={100}
                className='w-6 h-6 rounded-full object-cover'
              />
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className='p-10 px-10 lg:px-30 bg-[#2D333C] mt-5 rounded-2xl text-white'>
          <p className='text-xl clash-font text-gray-400 font-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
            provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
            Quibusdam.
          </p>

          <p className='text-xl clash-font text-gray-400 font-normal mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
            provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
            Quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus alias iure incidunt illo aliquam esse explicabo voluptatibus nobis
            quia officia dolorum laudantium cumque est veniam et sit, quaerat odio non?
          </p>

          <p className='text-xl clash-font text-gray-400 font-normal mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
            provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
            Quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus alias iure incidunt illo aliquam esse explicabo voluptatibus nobis
            quia officia dolorum laudantium cumque est veniam et sit, quaerat odio non?
          </p>

          <p className='text-xl clash-font text-gray-400 font-normal mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
            provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
            Quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus alias iure incidunt illo aliquam esse explicabo voluptatibus nobis
            quia officia dolorum laudantium cumque est veniam et sit, quaerat odio non?
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
            <div>
              <Image
                src={post1}
                alt='post1'
                width={500}
                height={500}
                className='w-full h-full rounded-2xl object-cover'
              />

              <p className='text-center mt-1 clash-font font-medium text-gray-400'>
                Cryptomate: Wallet App Design
              </p>
            </div>

            <div>
              <Image
                src={post2}
                alt='post2'
                width={500}
                height={500}
                className='w-full h-full rounded-2xl'
              />

              <p className='text-center mt-1 clash-font font-medium text-gray-400'>
                Content Management Platform
              </p>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default BlogDetails