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
    <div className="mt-5 py-10 mb-20">

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-5 mb-10">
        <h1 className="clash-font font-semibold text-5xl md:text-6xl">
          <Link href={`/Pages/Blogs`} className="cursor-pointer">
            Latest News
          </Link>
        </h1>

        <div className="flex items-center gap-3">
          <div
            ref={prevRef}
            className="w-11 h-11 cursor-pointer border border-gray-500 rounded-md hover:bg-white hover:text-black flex justify-center items-center transition-all duration-300"
          >
            <i className="bi bi-arrow-left text-xl"></i>
          </div>
          <div
            ref={nextRef}
            className="w-11 h-11 cursor-pointer border border-gray-500 rounded-md hover:bg-white hover:text-black flex justify-center items-center transition-all duration-300"
          >
            <i className="bi bi-arrow-right text-xl"></i>
          </div>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          const nav = swiper.params.navigation as any
          nav.prevEl = prevRef.current
          nav.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: { slidesPerView: 1 },
          991: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        // 👇 Clave para altura uniforme
        style={{ alignItems: "stretch" }}
        className="overflow-hidden"
      >
        {BlogsData.map((blog, index) => (
          <SwiperSlide key={index} className="h-auto!">
            <Link href={`/Pages/Blogs/${blog.id}`} className="h-full block">

              <div className="h-full flex flex-col p-6 rounded-2xl bg-[#2d333c] hover:bg-[#353c47] transition-colors duration-300 cursor-pointer">

                {/* Imagen */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 shrink-0">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Tag */}
                <span className="clash-font font-medium bg-third text-black px-3 py-1 rounded uppercase text-xs w-fit mb-3">
                  {blog.tag}
                </span>

                {/* Título */}
                <h2 className="clash-font font-semibold text-2xl lg:text-3xl text-white hover:text-prim transition-colors duration-300 mb-2 line-clamp-2">
                  {blog.title}
                </h2>

                {/* Descripción — flex-grow empuja el footer hacia abajo */}
                <p className="clash-font font-medium text-gray-400 text-sm leading-relaxed line-clamp-3 flex-grow">
                  {blog.desc}
                </p>

                {/* Footer de la tarjeta */}
                <div className="flex flex-wrap items-center gap-2 mt-5 pt-4 border-t border-gray-600">
                  <Image
                    src={blog.authorimg}
                    alt={blog.author}
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <p className="clash-font font-medium text-gray-400 text-sm">{blog.author}</p>
                  <span className="text-gray-600">•</span>
                  <p className="clash-font font-medium text-gray-400 text-sm">{blog.date}</p>
                  <span className="text-gray-600">•</span>
                  <p className="clash-font font-medium text-gray-400 text-sm">{blog.comment}</p>
                </div>

              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default BlogComponent