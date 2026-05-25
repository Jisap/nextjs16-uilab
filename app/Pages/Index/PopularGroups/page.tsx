"use client"

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import GroupData from "@/app/JsonData/GroupsData.json";
import Image from "next/image";
import { useRef } from "react";


const PopularGroups = () => {

  const prevRef = useRef<(HTMLDivElement | null)>(null);
  const nextRef = useRef<(HTMLDivElement | null)>(null);

  return (
    <>
      <div className="mt-5 py-10 lg:py-10 mb-20">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <div className="title">
            <h1 className="clash-font font-semibold text-5xl md:text-6xl">
              Popular Groups
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
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2000 }}
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
              0: { slidesPerView: 1 }
            }}
            className=""
          >
            {GroupData.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="p-5 rounded-2xl bg-[#2D333C] cursor-pointer">
                  <span
                    className={`
                      clash-font font-medium text-black px-2 py-1 rounded
                      ${group.tag === "Public Group" ? "bg-forth" : ""}
                      ${group.tag === "Private Group" ? "bg-second" : ""}  
                    `}
                  >
                    {group.tag}
                  </span>

                  <h2 className="clash-font font-semibold text-4xl mt-3 text-white hover:text-prim transition-all duration-300">
                    {group.title}
                  </h2>

                  <div className="flex items-center gap-2">
                    <p className="text-gray-400 text-xs">{group.date}</p>
                    <p className="text-gray-400 text-md">•</p>
                    <p className="text-gray-400 text-xs">{group.member}</p>
                  </div>

                  <div>
                    <Image
                      src={group.image}
                      alt={group.title}
                      width={500}
                      height={500}
                      className="w-full h-full rounded-2xl gorup-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default PopularGroups