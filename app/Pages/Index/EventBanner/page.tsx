"use client"

import Image from "next/image"
import CountUp from "react-countup"
import EventBanner1 from "@/public/Images/EventBanner-1.png"
import EventBanner2 from "@/public/Images/EventBanner-2.png"
import EventBanner3 from "@/public/Images/EventBanner-3.png"
import EventBanner4 from "@/public/Images/EventBanner-4.png"
import EventBanner5 from "@/public/Images/EventBanner-5.png"




const EventBanner = () => {
  return (
    <>
      <div className="mt-5 py-10 lg:py-10 mb-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-7xl clash-font font-semibold">
              Elevate Your Design Game and <span className="text-forth">Connect with the Like-Minded Professionals </span> at Design Lab
            </h1>

            <button className="px-5 py-3 bg-forth my-5 rounded-md clash-font font-semibold text-white tracking-wider hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              Search Freelancers
            </button>

          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            <div className="event-banner-images z-1">
              <div className="event-banner-content text-center bg-prim rounded-full flex justify-center items-center flex-col text-black w-[300px] h-[300px]">
                <h2 className="text-8xl clash-font font-semibold">
                  <CountUp end={17} duration={4.5} separator="," />K+
                </h2>
                <p className="text-2xl clash-font font-medium">
                  Professionals
                </p>
              </div>
            </div>

            <div className="event-banner-elm event-banner-elm1">
              <Image
                src={EventBanner1}
                alt="EventBanner1"
                width={100}
                height={100}
              />
            </div>

            <div className="event-banner-elm event-banner-elm2">
              <Image
                src={EventBanner2}
                alt="EventBanner2"
                width={150}
                height={150}
              />
            </div>

            <div className="event-banner-elm event-banner-elm3">
              <Image
                src={EventBanner3}
                alt="EventBanner3"
                width={220}
                height={220}
              />
            </div>

            <div className="event-banner-elm event-banner-elm4">
              <Image
                src={EventBanner4}
                alt="EventBanner4"
                width={120}
                height={120}
              />
            </div>

            <div className="event-banner-elm event-banner-elm5">
              <Image
                src={EventBanner5}
                alt="EventBanner5"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventBanner