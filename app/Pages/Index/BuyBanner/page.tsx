"use client"

import Image from "next/image"
import BuyBannerImg from "@/public/Images/Buy-Banner.jpg"


const BuyBanner = () => {
  return (
    <>
      <div className="mt-5 py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-5 border border-[#4b515a] p-8 lg:p-15 rounded-2xl">
          <div className="w-full lg:w-1/2">
            <div className="buy-content">
              <h3 className="text-[#6d9985] mb-3 clash-font text-2xl font-semibold">
                Feb 27 - Mar 2, 2023
              </h3>

              <h1 className="clash-font font-semibold text-4xl lg:text-6xl mb-5">
                Big Global <br /> E-commerce Conference 23
              </h1>

              <span className="text-[#7d838c] font.medium clash-font">
                New York, NY, United States &nbsp; • &nbsp; IT Education Center
              </span>
            </div>

            <button className="btn text-white bg-[#6d9985] mt-5 px-4 py-3 clash-font font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#598571]">
              Buy a Ticket
            </button>
          </div>

          <div className="w-full lg:w-1/2">
            <Image
              src={BuyBannerImg}
              alt="BuyBannerImg"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyBanner