"use client"

import GroupData from "@/app/JsonData/GroupsData.json"
import Image from "next/image";
import { useState } from "react"

const Groups = () => {

  const [filter, setFilter] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredGroups =
    filter === "All"
      ? GroupData
      : GroupData.filter((group) => group.tag === filter)



  return (
    <>
      <div className='mt-5 pb-20'>
        <div className='flex flex-wrap justify-between items-center gap-5'>
          <h1 className='clash-font font-semibold text-5xl md:text-9xl'>
            Groups
          </h1>

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="px-6 py-2 border border-gray-500 text-white rounded-md clash-font flex items-center gap-2 cursor-pointer bg-[#1E1E1E]"
            >
              {filter}
              <i className="bi bi-chevron-down"></i>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-body border border-gray-600 rounded-md shadow-lg z-20">
                <div
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer clash-font"
                  onClick={() => {
                    setFilter("All")
                    setShowDropdown(false)
                  }}
                >
                  All Groups
                </div>

                <div
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer clash-font"
                  onClick={() => {
                    setFilter("Public Group")
                    setShowDropdown(false)
                  }}
                >
                  Public Groups
                </div>

                <div
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer clash-font"
                  onClick={() => {
                    setFilter("Private Group")
                    setShowDropdown(false)
                  }}
                >
                  Private Groups
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGroups.map((group, index) => (
              <div key={index}>
                <div className="p-5 rounded-2xl bg-[#2D333C] cursor-pointer">
                  <span className={`
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
                    <p className="text-gray-400 text-shadow-md">•</p>
                    <p className="text-gray-400 text-xs">{group.member}</p>
                  </div>

                  <div className="mt-5 rounded-2xl overflow-hidden group">
                    <Image
                      src={group.image}
                      alt={group.title}
                      width={500}
                      height={500}
                      className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300"
                    />
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

export default Groups