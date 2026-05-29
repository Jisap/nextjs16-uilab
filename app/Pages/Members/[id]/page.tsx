"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import MembersData from "@/app/JsonData/MembersData.json"
import memberSkill1 from "@/public/Images/member-skill-1.svg"
import memberSkill2 from "@/public/Images/member-skill-2.svg"
import memberSkill3 from "@/public/Images/member-skill-3.svg"
import memberSkill4 from "@/public/Images/member-skill-4.svg"
import memberSkill5 from "@/public/Images/member-skill-5.svg"
import memberSkill6 from "@/public/Images/member-skill-6.png"
import gallery1 from "@/public/Images/Member-detail-gallery-1.jpg"
import gallery2 from "@/public/Images/Member-detail-gallery-2.jpg"
import gallery3 from "@/public/Images/Member-detail-gallery-3.jpg"
import gallery4 from "@/public/Images/Member-detail-gallery-4.jpg"
import gallery5 from "@/public/Images/Member-detail-gallery-5.jpg"
import gallery6 from "@/public/Images/Member-detail-gallery-6.jpg"
import gallery7 from "@/public/Images/Member-detail-gallery-7.jpg"
import gallery8 from "@/public/Images/Member-detail-gallery-8.jpg"
import GroupsData from "@/app/JsonData/GroupsData.json"
import BlogData from "@/app/JsonData/BlogsData.json"

const skills = [
  { id: 1, image: memberSkill1, title: "Photoshop" },
  { id: 2, image: memberSkill2, title: "Sketch" },
  { id: 3, image: memberSkill3, title: "Invision" },
  { id: 4, image: memberSkill4, title: "Figma" },
  { id: 5, image: memberSkill5, title: "Framer" },
  { id: 6, image: memberSkill6, title: "Zeplin" }
]

const MemberGallery = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8
]


const MembersDetails = () => {
  const { id } = useParams()
  const member = MembersData.find((item) => item.id.toString() === id)
  if (!member) {
    return (
      <div className="text-center py-20 text-white clash-font text-3xl">
        Member Not Found
      </div>
    )
  }

  const groups = GroupsData.filter((g) => g.member === member?.name)
  const blogs = BlogData.filter((b) => b.author === member?.name)

  return (
    <>
      <div className='mt-5 pb-20'>
        <div className='pb-3 border-b border-gray-600 flex flex-wrap items-center gap-2'>
          <Link href="/" className="hover:text-prim text-2xl">Home</Link>
          <i className='bi bi-chevron-right pt-1.5'></i>
          <Link href="/Pages/Shop" className='hover:text-prim text-xl'>Members</Link>
          <i className='bi bi-chevron-right pt-1.5'></i>
          <p className='text-prim text-xl'>{member.name}</p>
        </div>

        {/* Members Details */}
        <div className="mt-10">
          <div className="p-10 lg:px-20 border border-gray-500 rounded-2xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
              <div>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>

              <div className="w-full lg:w-1/1">
                <span className={`px-4 py-1 rounded clash-font font-semibold bg-prim text-black`}>
                  {member.role}
                </span>

                <h2 className="text-4xl text-white hover:text-prim mt-3 clash-font font-semibold">
                  {member.name}
                </h2>

                <h2 className="text-3xl text-forth mb-3 clash-font font-semibold">
                  {member.username}
                </h2>

                <div className="flex flex-wrap items-center gap-3 mt-5 text-gray-400 clash-font">
                  <p>{member.origin}</p>
                  <span>•</span>
                  <p>{member.joined}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MembersDetails