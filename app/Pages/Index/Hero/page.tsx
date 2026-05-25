"use client"

import CountUp from "react-countup"

const stats = [
  {
    bg: "bg-prim",
    value: 39,
    suffix: "K+",
    label: "Members",
    textColor: "text-black",
  },
  {
    bg: "bg-second",
    value: 230,
    suffix: "+",
    label: "Groups",
    textColor: "text-black",
  },
  {
    bg: "bg-third",
    value: 50,
    suffix: "+",
    label: "Online Courses",
    textColor: "text-black",
  },
]

const StatCard = ({
  bg,
  value,
  suffix,
  label,
  textColor,
}: {
  bg: string
  value: number
  suffix: string
  label: string
  textColor: string
}) => (
  <div className={`${bg} rounded-2xl px-8 py-5 group cursor-pointer`}>
    <div className="w-full flex justify-end items-end">
      <i className="bi bi-arrow-right-short w-13 flex items-center justify-center text-white bg-black rounded-md group-hover:bg-white group-hover:text-black text-3xl transition-all duration-200" />
    </div>

    <div className="flex flex-col mt-15">
      <h1 className={`${textColor} text-7xl clash-font font-semibold`}>
        <CountUp end={value} duration={2.5} separator="," />
        {suffix}
      </h1>

      <h4 className={`${textColor} text-2xl clash-font font-medium`}>{label}</h4>
    </div>
  </div>
)

const Hero = () => {
  return (
    <div className="mt-5 pb-20">
      <h1 className="text-5xl md:text-7xl lg:text-9xl clash-font font-bold">
        <span className="hero-span1">Join</span> the Ultimate Community for Designers{" "}
        <span className="hero-span2">and</span> Creatives
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}

        {/* Card 4 se mantiene aparte por su estructura diferente */}
        <div className="border border-gray-600 rounded-2xl px-8 py-5 group cursor-pointer">
          <div className="w-full flex justify-end items-end">
            <i className="bi bi-arrow-right-short w-13 flex items-center justify-center text-white bg-black rounded-md group-hover:bg-white group-hover:text-black text-3xl transition-all duration-200" />
          </div>

          <div className="flex flex-col mt-15">
            <h1 className="text-white text-7xl clash-font font-semibold">
              <CountUp end={4} duration={2.5} />.
              <CountUp end={9} duration={2.5} />
              <i className="bi bi-star-fill text-yellow-300" />
            </h1>

            <h4 className="text-white text-2xl clash-font font-medium">320+ rating</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero