"use client"

import CountUp from "react-countup"

const Hero = () => {
  return (
    <>
      <div className="mt-5 pb-20">
        <h1 className="text-5xl md:text-7xl lg:text-9xl clash-font font-bold">
          <span className="hero-span1">Join</span> the Ultimate Community for Designers {" "}
          <span className="hero-span2"> and</span> Creatives
        </h1>

        {/* Info Count */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {/* Card 1 */}
          <div className="bg-prim rounded-2xl px-8 py-5 group cursor-pointer">
            <div className="w-full flex justify-end items-end">
              <i className="bi bi-arrow-right-short w-13 flex items-center justify-center text-white bg-black rounded-md group-hover:bg-white group-hover:text-black text-3xl transition-all duration-200"></i>
            </div>

            <div className="flex flex-col mt-15">
              <h1 className="text-black text-7xl clash-font font-semibold">
                <CountUp end={39} duration={2.5} separator="," />K+
              </h1>

              <h4 className="text-black text-2xl clash-font font-medium">Members</h4>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-second rounded-2xl px-8 py-5 group cursor-pointer">
            <div className="w-full flex justify-end items-end">
              <i className="bi bi-arrow-right-short w-13 flex items-center justify-center text-white bg-black rounded-md group-hover:bg-white group-hover:text-black text-3xl transition-all duration-200"></i>
            </div>

            <div className="flex flex-col mt-15">
              <h1 className="text-black text-7xl clash-font font-semibold">
                <CountUp end={230} duration={2.5} separator="," />+
              </h1>

              <h4 className="text-black text-2xl clash-font font-medium">Groups</h4>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-third rounded-2xl px-8 py-5 group cursor-pointer">
            <div className="w-full flex justify-end items-end">
              <i className="bi bi-arrow-right-short w-13 flex items-center justify-center text-white bg-black rounded-md group-hover:bg-white group-hover:text-black text-3xl transition-all duration-200"></i>
            </div>

            <div className="flex flex-col mt-15">
              <h1 className="text-black text-7xl clash-font font-semibold">
                <CountUp end={50} duration={2.5} separator="," />+
              </h1>

              <h4 className="text-black text-2xl clash-font font-medium">Online Courses</h4>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-600 rounded-2xl px-8 py-5 group cursor-pointer">
            <div className="w-full flex justify-end items-end">
              <i className="bi bi-arrow-right-short w-13 flex items-center justify-center text-white bg-black rounded-md group-hover:bg-white group-hover:text-black text-3xl transition-all duration-200"></i>
            </div>

            <div className="flex flex-col mt-15">
              <h1 className="text-white text-7xl clash-font font-semibold">
                <CountUp end={4} duration={2.5} />.
                <CountUp end={9} duration={2.5} />
                <i className="bi bi-star-fill text-yellow-300"></i>
              </h1>

              <h4 className="text-white text-2xl clash-font font-medium">320+ rating</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero