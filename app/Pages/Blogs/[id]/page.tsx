// Original desing

// "use client"

// import BlogsData from '@/app/JsonData/BlogsData.json'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useParams } from 'next/navigation'
// import post1 from "@/public/Images/blog-detail-post1.jpg"
// import post2 from "@/public/Images/blog-detail-post2.jpg"
// import post3 from "@/public/Images/blog-detail-post3.jpg"

// const BlogDetails = () => {

//   const params = useParams();
//   const { id } = params;
//   const blog = BlogsData.find((item) => item.id.toString() === id);
//   if (!blog) {
//     return (
//       <div className='text-center py-20 text-white clash-font text-3xl'>
//         Blog not Found
//       </div>
//     )
//   }


//   return (
//     <>
//       <div className='mt-5 pb-20'>
//         <div className='pb-3 border-b border-gray-600 flex flex-wrap items-center gap-2'>
//           <Link href="/" className="hover:text-prim text-2xl">
//             Home
//           </Link>

//           <i className='bi bi-chevron-right pt-1.5'></i>

//           <Link href="/Pages/Blogs" className="hover:text-prim text-2xl">
//             Blogs
//           </Link>

//           <i className='bi bi-chevron-right pt-1.5'></i>

//           <Link href={`/Pages/Blogs/${id}`} className="text-prim text-2xl">
//             {blog.title}
//           </Link>
//         </div>

//         {/* Blog Info */}
//         <div className='p-10 border border-gray-500 mt-5 rounded-2xl'>
//           <div className='rounded-2xl border border-gray-500 overflow-hidden'>
//             <Image
//               src={blog.image}
//               alt={blog.title}
//               width={1200}
//               height={900}
//               className='w-full h-full hover:scale-110 transition-all duration-300'
//             />
//           </div>

//           <div className='mt-5'>
//             <span className='inline-block mt-7 clash-font font-medium bg-third text-black px-4  rounded uppercase'>
//               {blog.tag}
//             </span>

//             <h1 className='clash-font font-semibold text-4xl lg:text-6xl mt-4'>
//               {blog.title}
//             </h1>

//             <p className='mt-3 w-full lg:w-[80%]'>
//               {blog.desc}
//             </p>

//             <div className='flex flex-wrap items-center gap-3 mt-5 text-gray-400 clash-font'>
//               <p className='clash-font font-medium text-gray-400 text-sm'>{blog.date}</p>
//               <span className='text-gray-600'>•</span>
//               <p className='clash-font font-medium text-gray-400 text-sm'>{blog.comment}</p>
//               <span className='text-gray-600'>•</span>
//               <p className='clash-font font-medium text-gray-400 text-sm'>{blog.author}</p>
//               <Image
//                 src={blog.authorimg}
//                 alt={blog.author}
//                 width={100}
//                 height={100}
//                 className='w-6 h-6 rounded-full object-cover'
//               />
//             </div>
//           </div>
//         </div>

//         {/* Blog Content */}
//         <div className='p-10 px-10 lg:px-30 bg-[#2D333C] mt-5 rounded-2xl text-white'>
//           <p className='text-xl font-clash text-gray-400 font-normal'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
//             provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
//             Quibusdam.
//           </p>

//           <p className='text-xl font-clash text-gray-400 font-normal mt-4'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
//             provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
//             Quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus alias iure incidunt illo aliquam esse explicabo voluptatibus nobis
//             quia officia dolorum laudantium cumque est veniam et sit, quaerat odio non?
//           </p>

//           <p className='text-xl font-clash text-gray-400 font-normal mt-4'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
//             provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
//             Quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus alias iure incidunt illo aliquam esse explicabo voluptatibus nobis
//             quia officia dolorum laudantium cumque est veniam et sit, quaerat odio non?
//           </p>

//           <p className='text-xl font-clash text-gray-400 font-normal mt-4'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
//             provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
//             Quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus alias iure incidunt illo aliquam esse explicabo voluptatibus nobis
//             quia officia dolorum laudantium cumque est veniam et sit, quaerat odio non?
//           </p>

//           <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
//             <div>
//               <Image
//                 src={post1}
//                 alt='post1'
//                 width={500}
//                 height={500}
//                 loading="eager"
//                 className='w-full h-full rounded-2xl object-cover'
//               />

//               <p className='text-center mt-1 font-clash font-medium text-gray-400'>
//                 Cryptomate: Wallet App Design
//               </p>
//             </div>

//             <div>
//               <Image
//                 src={post2}
//                 alt='post2'
//                 width={500}
//                 height={500}
//                 loading="eager"
//                 className='w-full h-full rounded-2xl'
//               />

//               <p className='text-center mt-1 font-clash font-medium text-gray-400'>
//                 Content Management Platform
//               </p>
//             </div>
//           </div>

//           <div className='my-20'>
//             <h1 className='text-3xl lg:text-5xl clash-font font-semibold'>
//               1. Keep it Simple
//             </h1>

//             <p className='text-xl clash-font font-normal text-gray-300 mt-5'>
//               One of the top rules you should keep in mind during the ecommerce design process is "kiss"-keep it simple, silly!
//             </p>

//             <p className='text-xl font-clash font-normal text-gray-300 mt-5'>
//               When it comes to designing an ecommerce website, <span className='text-prim'> simple is always better</span>.
//               The more elements you have on the page, the more it takes away from the entire point of the website-closing a sale.
//             </p>

//             <p className='text-xl font-clash font-normal text-gray-300 mt-5'>
//               You dont need a ton of bells and whistles on your ecommerce website-all they do is act as distraction. Keep your
//               design clear, clean, and simple-and keep the focus on the sale.
//             </p>
//           </div>

//           <div className='my-20'>
//             <h1 className='text-3xl lg:text-5xl clash-font font-semibold'>
//               2. Make Branding a Priority
//             </h1>

//             <p className='text-xl font-clash font-normal text-gray-300 mt-5'>
//               In todays fast-paced world, customers expect businesses to have a strong online presence.
//             </p>

//             <p className='text-xl font-clash font-normal text-gray-300 mt-5'>
//               Building a strong brand identity for your ecommerce business is essential for standing out in a crowded market. Your brand
//             </p>

//             <p className='text-xl font-clash font-normal text-gray-300 mt-5'>
//               A strong brand identity helps you create a memorable and recognizable presence that resonates with your target audience.
//               This can be achieved through a combination of consistent visual elements, such as logos, color schemes, and typography,
//               as well as a clear brand voice and messaging that reflects your brand values and personality.
//             </p>

//             <p className='text-xl font-clash font-normal text-gray-300 mt-5'>
//               <span className='text-prim'> In addition to visual consistency</span> , it is also important to have a clear brand message
//               that communicates your unique value proposition and resonates with your target audience.
//               Ask yourself questions like:
//             </p>

//             <p className='text-md lg:text-xl font-clash font-normal text-white mt-8'>
//               <i className='bi bi-arrow-right text-prim pe-2'></i>{" "}
//               If my brand was a person, who would it be?
//             </p>

//             <p className='text-md lg:text-xl font-clash font-normal text-white mt-3'>
//               <i className='bi bi-arrow-right text-prim pe-2'></i>{" "}
//               If I had to describe my brand in three words, what would the be?
//             </p>

//             <p className='text-md lg:text-xl font-clash font-normal text-white mt-3'>
//               <i className='bi bi-arrow-right text-prim pe-2'></i>{" "}
//               What makes my brand different from other ecommerce shops out there?
//             </p>

//             <p className='text-md lg:text-xl font-clash font-normal text-white mt-3'>
//               <i className='bi bi-arrow-right text-prim pe-2'></i>{" "}
//               What do we do better than anyone else on the market?
//             </p>

//             <p className='text-xl font-clash font-normal text-gray-300 mt-8'>
//               Once you know who you are, you can work it into the branding of your ecommerce site.
//               And that branding it'll help build trust with your audience and drive serious sales in the process
//             </p>
//           </div>

//           <div className='my-20'>
//             <Image
//               src={post3}
//               alt="post3"
//               loading="eager"
//               className='w-full h-full object-cover rounded-2xl'
//             />

//             <h1 className='text-3xl lg:text-5xl clash-font font-semibold mt-10'>
//               3. Think Like a Website Visitor
//             </h1>

//             <p className='text-xl clash-font font-normal text-gray-300 mt-8'>
//               The next thing you should do during the ecommerce design process is think like a website visitor. It can be easy to get caught up in
//               designing your website-especially if you have a specific vision in mind. But try to take a step back and view your
//               website from the perspective of a customer. What will they be looking for on your site? Will they be able to find what they need
//               easily and intuitively ?
//             </p>

//             <p className='text-xl clash-font font-normal text-gray-300 mt-8'>
//               During the design process, put yourself in your visitor's shoes. What kind of layout is going to be easiest
//               for them to navigate. How can you organize your products in a way that makes sense for the end user? How can
//               you simplify the checkout process to make it as easy as possible for customers to complete their purchase? These
//               types of questions are what you should be asking yourself as you begin to design your ecommerce website.
//             </p>
//           </div>

//           <div className='my-20'>
//             <div className='border border-gray-500 rounded-2xl flex flex-col items-center px-5 py-10'>
//               <h1 className='text-2xl lg:text-5xl text-center clash-font font-semibold text-third'>
//                 "A great online shop need great web design."
//               </h1>

//               <h2 className='clash-font font-medium text-2xl mt-3'>Henry Walker</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default BlogDetails

"use client"

import BlogsData from '@/app/JsonData/BlogsData.json'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import post1 from "@/public/Images/blog-detail-post1.jpg"
import post2 from "@/public/Images/blog-detail-post2.jpg"
import post3 from "@/public/Images/blog-detail-post3.jpg"

const BlogDetails = () => {
  const params = useParams()
  const { id } = params
  const blog = BlogsData.find((item) => item.id.toString() === id)

  if (!blog) {
    return (
      <div className="text-center py-20 text-white font-serif text-3xl italic">
        Blog not Found
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pb-24">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 py-6 border-b border-white/10 mb-10 font-audiowide text-[11px] tracking-widest uppercase text-white/40">
        <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
        <span className="opacity-30">›</span>
        <Link href="/Pages/Blogs" className="hover:text-white/80 transition-colors">Blogs</Link>
        <span className="opacity-30">›</span>
        <span className="text-white/70">{blog.title}</span>
      </nav>

      {/* Hero Image */}
      <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-8">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
        {/* subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Tag */}
      <span className="inline-block font-audiowide text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-sm bg-[#c9a96e] text-white mb-4">
        {blog.tag}
      </span>

      {/* Title */}
      <h1 className="clash-font text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6 text-white">
        {blog.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 font-audiwide text-[11px] tracking-wider text-white/40 border-t border-white/10 pt-4 mb-8">
        <span>{blog.date}</span>
        <span className="opacity-30 text-base">·</span>
        <span>{blog.comment}</span>
        <span className="opacity-30 text-base">·</span>
        <span className="flex items-center gap-2">
          <Image
            src={blog.authorimg}
            alt={blog.author}
            width={28}
            height={28}
            className="rounded-full object-cover"
          />
          {blog.author}
        </span>
      </div>

      {/* Lede / Intro */}
      <p className="clash-font text-xl lg:text-2xl italic font-normal leading-relaxed text-white/50 border-b border-white/10 pb-8 mb-8">
        {blog.desc}
      </p>

      {/* Body Content */}
      <div className="space-y-5 text-base leading-[1.85] text-white/50 font-light">
        <p className="first-letter:float-left first-letter:font-serif first-letter:text-6xl first-letter:font-black first-letter:leading-[0.85] first-letter:mr-2 first-letter:mt-1.5 first-letter:text-[#c9a96e]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
          provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
          provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
          Quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam reprehenderit expedita sit,
          provident itaque. Minima inventore voluptatibus sunt nulla odio praesentium ex blanditiis aliquam harum, libero et.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
        <div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src={post1}
              alt="Cryptomate Wallet"
              width={500}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <p className="text-center mt-2 font-audiowide text-[11px] tracking-wider text-white/30 uppercase">Cryptomate: Wallet App Design</p>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src={post2}
              alt="CMS Platform"
              width={500}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <p className="text-center mt-2 font-audiowide text-[11px] tracking-wider text-white/30 uppercase">Content Management Platform</p>
        </div>
      </div>

      <hr className="border-white/10 my-10" />

      {/* Section 1 */}
      <section className="my-12">
        <h2 className="clash-font text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5 flex items-baseline gap-3">
          <span className="font-audiowide text-[11px] tracking-[0.12em] text-[#c9a96e] font-normal">01 —</span>
          Keep it Simple
        </h2>
        <p className="text-base leading-[1.85] text-white/50 font-light mb-4">
          One of the top rules you should keep in mind during the ecommerce design process is "kiss" — keep it simple. When it comes to designing an ecommerce website,{" "}
          <span className="text-[#c9a96e]">simple is always better</span>. The more elements you have on the page, the more it takes away from the entire point of the website.
        </p>
        <p className="text-base leading-[1.85] text-white/50 font-light">
          You don't need a ton of bells and whistles on your ecommerce website — all they do is act as distractions. Keep your design clear, clean, and simple, and keep the focus on the sale.
        </p>
      </section>

      <hr className="border-white/10 my-10" />

      {/* Section 2 */}
      <section className="my-12">
        <h2 className="clash-font text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5 flex items-baseline gap-3">
          <span className="font-audiowide text-[11px] tracking-[0.12em] text-[#c9a96e] font-normal">02 —</span>
          Make Branding a Priority
        </h2>
        <p className="text-base leading-[1.85] text-white/50 font-light mb-4">
          In today's fast-paced world, customers expect businesses to have a strong online presence. Building a strong brand identity for your ecommerce business is essential for standing out in a crowded market.
        </p>
        <p className="text-base leading-[1.85] text-white/50 font-light mb-4">
          A strong brand identity helps you create a memorable and recognizable presence that resonates with your target audience through consistent visual elements, brand voice, and messaging.
        </p>
        <p className="text-base leading-[1.85] text-white/50 font-light mb-6">
          <span className="text-[#c9a96e]">In addition to visual consistency</span>, it is also important to have a clear brand message. Ask yourself:
        </p>

        <div className="space-y-3 mb-6">
          {[
            "If my brand was a person, who would it be?",
            "If I had to describe my brand in three words, what would they be?",
            "What makes my brand different from other ecommerce shops?",
            "What do we do better than anyone else on the market?",
          ].map((q, i) => (
            <div key={i} className="flex items-baseline gap-3 text-white/80 text-[15px] leading-relaxed">
              <span className="text-[#c9a96e] text-xs mt-0.5 flex-shrink-0">→</span>
              <span>{q}</span>
            </div>
          ))}
        </div>

        <p className="text-base leading-[1.85] text-white/50 font-light">
          Once you know who you are, you can work it into the branding of your ecommerce site — and that branding will build trust with your audience and drive serious sales in the process.
        </p>
      </section>

      <hr className="border-white/10 my-10" />

      {/* Full width image */}
      <div className="rounded-2xl overflow-hidden my-10">
        <Image
          src={post3}
          alt="Think like a visitor"
          width={900}
          height={500}
          className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Section 3 */}
      <section className="my-12">
        <h2 className="clash-font text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5 flex items-baseline gap-3">
          <span className="font-audiowide text-[11px] tracking-[0.12em] text-[#c9a96e] font-normal">03 —</span>
          Think Like a Visitor
        </h2>
        <p className="text-base leading-[1.85] text-white/50 font-light mb-4">
          The next thing you should do during the ecommerce design process is think like a website visitor. It can be easy to get caught up in designing your website — especially if you have a specific vision in mind. Try to take a step back and view your website from the perspective of a customer.
        </p>
        <p className="text-base leading-[1.85] text-white/50 font-light">
          Put yourself in your visitor's shoes. What layout will be easiest for them to navigate? How can you organize products in a way that makes sense for the end user? How can you simplify the checkout process? These are the questions you should be asking yourself throughout the design process.
        </p>
      </section>

      {/* Pull Quote */}
      <blockquote className="relative border border-white/10 rounded-2xl px-8 py-10 my-14 text-center">
        <span className="absolute top-4 left-6 clash-font text-7xl leading-none text-[#c9a96e] opacity-20 select-none">"</span>
        <p className="clash-font text-2xl lg:text-3xl font-bold italic leading-snug text-white mb-4">
          "A great online shop needs{" "}
          <span className="text-[#c9a96e]">great web design.</span>"
        </p>
        <cite className="font-audiowide text-[11px] tracking-[0.12em] uppercase text-white/30 not-italic">
          — Henry Walker
        </cite>
      </blockquote>

    </div>
  )
}

export default BlogDetails