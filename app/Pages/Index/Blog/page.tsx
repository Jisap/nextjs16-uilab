"use client"


import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import BlogsData from "@/app/JsonData/BlogsData.json"

const BlogComponent = () => {

  const prevRef = useRef<HTMLDivElement | null>(null)
  const nextRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <div className="mt-5 py-10 lg:py-10 mb-20">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <div className="title">
            <h1 className="clash-font font-semibold text-5xl md:text-6xl">
              Latest News
            </h1>
          </div>


          <div className="flex items-center gap-3">
            <div
              ref={prevRef}
              className="w-13 h-13 cursor-pointer border border-gray-500 rounded-md hover:bg-white hover:text-black flex justify-center items-center transition-all duration-300"
            >
              <i className="bi bi-arrow-left text-2xl"></i>
            </div>

            <div
              ref={nextRef}
              className="w-13 h-13 cursor-pointer border border-gray-500 rounded-md hover:bg-white hover:text-black flex justify-center items-center transition-all duration-300"
            >
              <i className="bi bi-arrow-right text-2xl"></i>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000
            }}
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              const nav = swiper.params.navigation as any;
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              1200: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {BlogsData.map((blog, index) => (
              <SwiperSlide key={index}>
                <Link href={`/Pages/Blogs/${blog.id}`}>
                  <div className="p-8 rounded-2xl bg-[#2d333c] cursor-pointer">
                    <div className="mt-5 mb-8 rounded-2xl overflow-hidden group w-full relative h-48">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-all duration-300"
                      />
                    </div>

                    <span className="clash-font font-medium bg-third text-black px-3 py-1 rounded uppercase">
                      {blog.tag}
                    </span>

                    <h2 className="clash-font font-semibold text-3xl lg:text-4xl hover:text-prim text-white transition-all duration-300">
                      {blog.title}
                    </h2>

                    <p className="clash-font font-medium mt-3 text-gray-400">
                      {blog.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mt-5">
                      <p className="text-gray-400 clash-font font-medium text-sm">{blog.date}</p>
                      <br />
                      <p className="text-gray-400 text-md">•</p>
                      <p className="text-gray-400 clash-font font-medium text-sm">{blog.comment}</p>
                      <p className="text-gray-400 text-md">•</p>
                      <p className="text-gray-400 clash-font font-medium text-sm">{blog.author}</p>
                      <Image
                        src={blog.authorimg}
                        alt={blog.author}
                        width={100}
                        height={100}
                        className="w-6 object-cover"
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </>
  )
}

export default BlogComponent