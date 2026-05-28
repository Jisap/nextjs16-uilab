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
          <p className='text-xl font-clash text-gray-400 font-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
            provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
            Quibusdam.
          </p>

          <p className='text-xl font-clash text-gray-400 font-normal mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
            provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
            Quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus alias iure incidunt illo aliquam esse explicabo voluptatibus nobis
            quia officia dolorum laudantium cumque est veniam et sit, quaerat odio non?
          </p>

          <p className='text-xl font-clash text-gray-400 font-normal mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
            provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
            Quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus alias iure incidunt illo aliquam esse explicabo voluptatibus nobis
            quia officia dolorum laudantium cumque est veniam et sit, quaerat odio non?
          </p>

          <p className='text-xl font-clash text-gray-400 font-normal mt-4'>
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
                loading="eager"
                className='w-full h-full rounded-2xl object-cover'
              />

              <p className='text-center mt-1 font-clash font-medium text-gray-400'>
                Cryptomate: Wallet App Design
              </p>
            </div>

            <div>
              <Image
                src={post2}
                alt='post2'
                width={500}
                height={500}
                loading="eager"
                className='w-full h-full rounded-2xl'
              />

              <p className='text-center mt-1 font-clash font-medium text-gray-400'>
                Content Management Platform
              </p>
            </div>
          </div>

          <div className='my-20'>
            <h1 className='text-3xl lg:text-5xl clash-font font-semibold'>
              1. Keep it Simple
            </h1>

            <p className='text-xl clash-font font-normal text-gray-300 mt-5'>
              One of the top rules you should keep in mind during the ecommerce design process is "kiss"-keep it simple, silly!
            </p>

            <p className='text-xl font-clash font-normal text-gray-300 mt-5'>
              When it comes to designing an ecommerce website, <span className='text-prim'> simple is always better</span>.
              The more elements you have on the page, the more it takes away from the entire point of the website-closing a sale.
            </p>

            <p className='text-xl font-clash font-normal text-gray-300 mt-5'>
              You dont need a ton of bells and whistles on your ecommerce website-all they do is act as distraction. Keep your
              design clear, clean, and simple-and keep the focus on the sale.
            </p>
          </div>

          <div className='my-20'>
            <h1 className='text-3xl lg:text-5xl clash-font font-semibold'>
              2. Make Branding a Priority
            </h1>

            <p className='text-xl font-clash font-normal text-gray-300 mt-5'>
              In todays fast-paced world, customers expect businesses to have a strong online presence.
            </p>

            <p className='text-xl font-clash font-normal text-gray-300 mt-5'>
              Building a strong brand identity for your ecommerce business is essential for standing out in a crowded market. Your brand
            </p>

            <p className='text-xl font-clash font-normal text-gray-300 mt-5'>
              A strong brand identity helps you create a memorable and recognizable presence that resonates with your target audience.
              This can be achieved through a combination of consistent visual elements, such as logos, color schemes, and typography,
              as well as a clear brand voice and messaging that reflects your brand values and personality.
            </p>

            <p className='text-xl font-clash font-normal text-gray-300 mt-5'>
              <span className='text-prim'> In addition to visual consistency</span> , it is also important to have a clear brand message
              that communicates your unique value proposition and resonates with your target audience.
              Ask yourself questions like:
            </p>

            <p className='text-md lg:text-xl font-clash font-normal text-white mt-8'>
              <i className='bi bi-arrow-right text-prim pe-2'></i>{" "}
              If my brand was a person, who would it be?
            </p>

            <p className='text-md lg:text-xl font-clash font-normal text-white mt-3'>
              <i className='bi bi-arrow-right text-prim pe-2'></i>{" "}
              If I had to describe my brand in three words, what would the be?
            </p>

            <p className='text-md lg:text-xl font-clash font-normal text-white mt-3'>
              <i className='bi bi-arrow-right text-prim pe-2'></i>{" "}
              What makes my brand different from other ecommerce shops out there?
            </p>

            <p className='text-md lg:text-xl font-clash font-normal text-white mt-3'>
              <i className='bi bi-arrow-right text-prim pe-2'></i>{" "}
              What do we do better than anyone else on the market?
            </p>

            <p className='text-xl font-clash font-normal text-gray-300 mt-8'>
              Once you know who you are, you can work it into the branding of your ecommerce site.
              And that branding it'll help build trust with your audience and drive serious sales in the process
            </p>
          </div>

          <div className='my-20'>
            <Image
              src={post3}
              alt="post3"
              loading="eager"
              className='w-full h-full object-cover rounded-2xl'
            />

            <h1 className='text-3xl lg:text-5xl clash-font font-semibold mt-10'>
              3. Think Like a Website Visitor
            </h1>

            <p className='text-xl clash-font font-normal text-gray-300 mt-8'>
              The next thing you should do during the ecommerce design process is think like a website visitor. It can be easy to get caught up in
              designing your website-especially if you have a specific vision in mind. But try to take a step back and view your
              website from the perspective of a customer. What will they be looking for on your site? Will they be able to find what they need
              easily and intuitively ?
            </p>

            <p className='text-xl clash-font font-normal text-gray-300 mt-8'>
              During the design process, put yourself in your visitor's shoes. What kind of layout is going to be easiest
              for them to navigate. How can you organize your products in a way that makes sense for the end user? How can
              you simplify the checkout process to make it as easy as possible for customers to complete their purchase? These
              types of questions are what you should be asking yourself as you begin to design your ecommerce website.
            </p>
          </div>

          <div className='my-20'>
            <div className='border border-gray-500 rounded-2xl flex flex-col items-center px-5 py-10'>
              <h1 className='text-2xl lg:text-5xl text-center clash-font font-semibold text-third'>
                "A great online shop need great web design."
              </h1>

              <h2 className='clash-font font-medium text-2xl mt-3'>Henry Walker</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetails