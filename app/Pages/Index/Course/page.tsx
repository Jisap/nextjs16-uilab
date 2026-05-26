"use client"

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import CourseData from "@/app/JsonData/CoursesData.json";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const Courses = () => {

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="mt-5 py-10 lg:py-10 mb-20">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <div className="title">
            <h1 className="clash-font font-semibold text-5xl md:text-6xl">
              New Courses
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
            slidesPerView={2}
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
              1200: { slidesPerView: 2 },
              991: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 }
            }}
            className=""
          >
            {CourseData.slice(0, 3).map((course, index) => (
              <SwiperSlide key={index}>
                <div className="p-5 rounded-2xl bg-[#2D333C] cursor-pointer">
                  <span className="clash-font font-medium text-black px-2 py-1 rounded bg-second">
                    {course.tag}
                  </span>

                  <Link href={`/Pages/Course/${course.id}`}>
                    <h2 className="clash-font font-semibold text-3xl mt-3 text-white hover:text-prim transition-all duration-300">
                      {course.title}
                    </h2>
                  </Link>

                  <Link href={`/Pages/Course/${course.id}`}>
                    <div className="flex flex-wrap items-center gap-2 mt-5">
                      <p className="text-gray-400 clash-font font-medium text-md">4.5
                        <i className="bi bi-star-fill text-yellow-300"></i>
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Courses