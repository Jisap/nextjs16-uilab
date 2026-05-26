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
          </div>
        </div>
      </div>
    </>
  )
}

export default EventBanner