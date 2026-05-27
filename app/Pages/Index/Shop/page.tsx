"use client"

import shopData from "@/app/JsonData/ShopData.json"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import ShopData from "@/app/JsonData/ShopData.json"


const Shop = () => {

  const prevRef = useRef<HTMLDivElement | null>(null)
  const nextRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <div className="mt-5 py-10 lg:py-10 mb-20">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <div className="title">
            <h1 className="clash-font font-semibold text-5xl md:text-6xl">
              Our Shop
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
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000
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
            {ShopData.map((product, index) => (
              <SwiperSlide key={index}>
                <Link href={`/Pages/Shop/${product.id}`}>
                  <div className="p-5 md:p-8 rounded-2xl bg-[#2d333c] cursor-pointer">
                    <div className="rounded-2xl overflow-hidden group relative">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={500}
                        height={500}
                        loading="eager"
                        className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300"
                      />

                      <span className={`
                        absolute top-5 left-5 px-4 rounded-2xl clash-font font-semibold 
                        ${product.sale === "Sale" ? "bg-prim text-black" : ""} 
                        ${product.sale === "New" ? "bg-second text-black" : ""} 
                        ${product.sale === "" ? "hidden" : ""}`
                      }
                      >
                        {product.sale}
                      </span>
                    </div>

                    <div className="mt-5">
                      <p className="text-gray-400">{product.tag}</p>
                      <h2 className="clash-font font-medium text-4xl lg:text-5xl hover:text-prim text-white transition-all duration-300">{product.title}</h2>
                      <h4 className="text-4xl clash-font font-semibold text-forth mt-3">{product.price}</h4>

                      <div className="border border-gray-400 text-white text-center mt-3 py-3 rounded-xl hover:bg-white hover:text-black font-bold transition-all duration-300 ">
                        View Product
                      </div>
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

export default Shop