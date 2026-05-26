"use client"

import Image from "next/image"
import Work1 from "@/public/Images/Work-1.jpg"
import Work2 from "@/public/Images/Work-2.jpg"
import Work3 from "@/public/Images/Work-3.jpg"
import Work4 from "@/public/Images/Work-4.jpg"
import WorkerImg from "@/public/Images/Worker.png"

const workData = [
  { id: 1, img: Work1, name: "Elodie Hardin", title: "Wallet App Design" },
  { id: 2, img: Work2, name: "Maddox Patel", title: "Frontend Development" },
  { id: 3, img: Work3, name: "Kianna Smith", title: "Landing Page Design" },
  { id: 4, img: Work4, name: "Nathaniel Kim", title: "Branding Design" },
  { id: 5, img: Work1, name: "Elodie Hardin", title: "Wallet App Design" },
  { id: 6, img: Work2, name: "Maddox Patel", title: "Frontend Development" },
  { id: 7, img: Work3, name: "Kianna Smith", title: "Landing Page Design" },
  { id: 8, img: Work4, name: "Nathaniel Kim", title: "Branding Design" },
]

const NewWork = () => {
  return (
    <>
      <div className="my-5 py-10 lg:py-20">
        <div className="title mb-8">
          <h1 className="clash-font font-semibold text-6xl">
            New Works
          </h1>
        </div>

        <div className="bg-[#2d333c] rounded-2xl p-8 lg:p-15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workData.map((item) => (
              <div className="work-data group relative overflow-hidden" key={item.id}>
                <div className="work-image cursor-pointer mb-5 relative overflow-hidden rounded-2xl">
                  <Image
                    src={item.img}
                    alt="Work Image"
                    className="rounded-2xl w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute left-0 right-0 px-5 py-5 rounded-tr-2xl opacity-0 -bottom-10 transition-all duration-500 
                  group-hover:opacity-100 group-hover:bottom-0"
                  >
                    <div className="bg-white rounded-md clash-font font-medium text-sm text-black px-3 py-1">
                      {item.title}
                    </div>
                  </div>
                </div>

                <div className="work-content flex items-center gap-3">
                  <Image
                    src={WorkerImg}
                    alt=""
                    className="w-12"
                  />

                  <div>
                    <h4 className="clash-font text-white">
                      {item.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewWork