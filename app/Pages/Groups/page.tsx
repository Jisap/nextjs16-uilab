"use client"

import GroupData from "@/app/JsonData/GroupsData.json"
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