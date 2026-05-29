"use client"

import MembersData from "@/app/JsonData/MembersData.json"
import Image from "next/image"
import Link from "next/link"



const Members = () => {
  return (
    <>
      <div className="mt-5 py-5 pb-20">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <div className="title">
            <h1 className="clash-font font-semibold text-5xl md:text-9xl">
              Our Members
            </h1>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MembersData.map((member, index) => (
              <Link
                key={index}
                href={`/Pages/members/${member.id}`}
                className="p-5 md:p-8 rounded-2xl bg-[#2d333c] cursor-pointer"
              >
                <div className="rounded-2xl group">
                  <span className={`px-4 py-1 rounded clash-font font-semibold bg-prim text-black`}>
                    {member.role}
                  </span>

                  <h2 className="text-4xl text-white hover:text-prim mt-3 clash-font font-semibold">
                    {member.name}
                  </h2>

                  <h2 className="text-3xl text-forth mb-3 clash-font font-semibold">
                    {member.username}
                  </h2>

                  <p className="text-gray-400">
                    {member.joined}
                  </p>

                  <div className="mt-5 flex items-end gap-5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="object-contain"
                    />

                    <div className="border border-gray-400 text-white mt-3 text-center py-3 px-4 rounded-xl hover:bg-white hover:text-black font-bold transition-all duration-300">
                      Send Message
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Members