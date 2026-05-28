"use client"

import BlogsData from '@/app/JsonData/BlogsData.json'
import Link from 'next/link'
import { useParams } from 'next/navigation'


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
      </div>
    </>
  )
}

export default BlogDetails