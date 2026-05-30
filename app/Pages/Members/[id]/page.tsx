"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import MembersData from "@/app/JsonData/MembersData.json"
import GroupsData from "@/app/JsonData/GroupsData.json"
import BlogData from "@/app/JsonData/BlogsData.json"
import gallery1 from "@/public/Images/Member-detail-gallery-1.jpg"
import gallery2 from "@/public/Images/Member-detail-gallery-2.jpg"
import gallery3 from "@/public/Images/Member-detail-gallery-3.jpg"
import gallery4 from "@/public/Images/Member-detail-gallery-4.jpg"
import gallery5 from "@/public/Images/Member-detail-gallery-5.jpg"
import gallery6 from "@/public/Images/Member-detail-gallery-6.jpg"
import gallery7 from "@/public/Images/Member-detail-gallery-7.jpg"
import gallery8 from "@/public/Images/Member-detail-gallery-8.jpg"

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
        {/* Breadcrumb */}
        <div className='pb-3 border-b border-gray-600 flex flex-wrap items-center gap-2'>
          <Link href="/" className="hover:text-prim text-2xl">Home</Link>
          <i className='bi bi-chevron-right pt-1.5'></i>
          <Link href="/Pages/Shop" className='hover:text-prim text-xl'>Members</Link>
          <i className='bi bi-chevron-right pt-1.5'></i>
          <p className='text-prim text-xl'>{member.name}</p>
        </div>

        {/* Members Details Card */}
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

                <div className="w-full mt-5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
                  <div className="flex gap-4">
                    <i className="bi bi-instagram w-8 h-8 border border-gray-500 rounded flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"></i>
                    <i className="bi bi-twitter w-8 h-8 border border-gray-500 rounded flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"></i>
                    <i className="bi bi-facebook w-8 h-8 border border-gray-500 rounded flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"></i>
                    <i className="bi bi-linkedin w-8 h-8 border border-gray-500 rounded flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"></i>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button className="border border-gray-500 px-5 py-5 text-white rounded-md text-xl clash-font font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                      <i className="bi bi-balloon-heart text-prim"></i> Follow
                    </button>
                    <button className="border border-gray-500 px-5 py-5 text-white rounded-md text-xl clash-font font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                      <i className="bi bi-person-plus text-prim"></i> Add Friend
                    </button>
                    <button className="border border-gray-500 px-5 py-5 text-white rounded-md text-xl clash-font font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Members Info */}
        <div className="mt-20">
          <div className="w-full flex flex-col lg:flex-row justify-between gap-5">
            <div className="w-full lg:w-full">
              <div className="p-10 bg-[#2d333c] text-white rounded-2xl">
                <h1 className="text-3xl lg:text-5xl clash-font font-semibold">
                  About {member.name}
                </h1>

                {/* Dynamic About Paragraphs */}
                <div className="mt-4 space-y-4">
                  {member.about.map((paragraph, idx) => (
                    <p key={idx} className="text-xl clash-font text-gray-300 font-normal">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Dynamic Skills */}
                <h2 className="clash-font font-semibold text-4xl my-4">Instruments</h2>
                <div className="flex flex-wrap items-center gap-5">
                  {member.skills.map((skill, index) => (
                    <div key={index} className="px-3 py-4 hover:border-gray-300 cursor-pointer transition-all duration-300 border border-gray-500 rounded flex items-center gap-2">
                      <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full">
                        <Image
                          src={skill.icon}
                          alt={skill.title}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm text-gray-300 clash-font">{skill.title}</span>
                    </div>
                  ))}
                </div>

                {/* Dynamic Experience */}
                <div className="flex flex-col gap-5 mt-4">
                  {(member.experience || []).map((exp, index) => (
                    <div key={index} className="border-b border-gray-600 pb-5 last:border-0 last:pb-0">
                      <span className="bg-forth px-3 py-1 rounded text-black clash-font font-medium">
                        {exp.period}
                      </span>
                      <h2 className="clash-font mt-2 font-semibold text-2xl">{exp.role}</h2>
                      <h4 className="text-gray-300">{exp.company}</h4>
                      <p className="mt-2 text-gray-400">{exp.description}</p>

                      {exp.activities && exp.activities.length > 0 && (
                        <ul className="mt-3 space-y-2 list-disc list-inside text-gray-300 clash-font">
                          {exp.activities.slice(0, 6).map((activity, actIndex) => (
                            <li key={actIndex} className="text-base leading-relaxed">
                              {activity}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              <div className="p-10 mt-6 bg-[#2d333c] text-white rounded-2xl">
                <h1 className="text-3xl lg:text-5xl clash-font font-semibold">Portfolio</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
                  {MemberGallery.map((item, idx) => (
                    <Image
                      key={idx}
                      src={item}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 sticky top-22 left-0 h-full">
              <div className="p-8 bg-[#2d333c] text-white rounded-2xl flex flex-col gap-3">
                <div className="flex justify-between items-center gap-3 border-b border-gray-500 pb-2">
                  <p className="clash-font font-medium">
                    <i className="bi bi-geo-alt pe-2"></i>
                    Location
                  </p>

                  <p className="clash-font font-medium">
                    {member.origin}
                  </p>
                </div>

                <div className="flex justify-between items-center gap-3 border-b border-gray-500 pb-2">
                  <p className="clash-font font-medium">
                    <i className="bi bi-briefcase pe-2"></i>
                    Type
                  </p>

                  <span className={`
                    inline-block px-2 py-0.5 rounded text-black font-medium 
                    ${member.type === 'freelancer' ? 'bg-prim' : member.type === 'full-time' ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                  >
                    {member.type.charAt(0).toUpperCase() + member.type.slice(1)}
                  </span>
                </div>

                {/* Languages Section */}
                <div className="flex flex-col gap-2 border-b border-gray-500 pb-3">
                  <p className="clash-font font-medium flex items-center gap-2 text-gray-300">
                    <i className="bi bi-translate"></i>
                    Languages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.languages.map((lang, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-800/50 border border-gray-600 rounded-lg text-sm clash-font hover:bg-gray-700 transition-colors">
                        <span className="text-white font-medium">{lang.language}</span>
                        <span className="text-prim mx-1">•</span>
                        <span className="text-gray-400 text-xs uppercase tracking-wider">{lang.level}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center gap-3 border-b border-gray-500 pb-2">
                  <p className="clash-font font-medium">
                    <i className="bi bi-person pe-2"></i>
                    Gender
                  </p>

                  <p className="clash-font font-medium">
                    {member.gender}
                  </p>
                </div>

                <div className="flex justify-between items-center gap-3 border-b border-gray-500 pb-2">
                  <p className="clash-font font-medium">
                    <i className="bi bi-calendar-event pe-2"></i>
                    Birth Date
                  </p>

                  <p className="clash-font font-medium">
                    {member.dateOfBirth}
                  </p>
                </div>

                <div className="flex justify-between items-center gap-3 border-b border-gray-500 pb-2">
                  <p className="clash-font font-medium">
                    <i className="bi bi-phone pe-2"></i>
                    Phone
                  </p>

                  <p className="clash-font font-medium">
                    {member.phone}
                  </p>
                </div>

                <button className="border border-gray-500 bg-forth px-5 py-3 rounded-md clash-font font-medium hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                  Send Message
                </button>
              </div>

              {/* Groups */}
              <div className="p-8 mt-5 bg-[#2d333c] text-white rounded-2xl flex flex-col gap-3">
                <h2 className="text-3xl clash-font font-semibold">Groups</h2>
                {GroupsData.slice(0, 4).map((group, index) => (
                  <div className="flex gap-5" key={index}>
                    <div>
                      <Image
                        src={group.image}
                        alt={group.title}
                        width={80}
                        height={80}
                        className="object-center rounded-md"
                      />
                    </div>

                    <div>
                      <h2 className="text-2xl clash-font font-semibold">{group.title}</h2>
                      <p className="text-gray-400">{group.member}</p>
                    </div>
                  </div>
                ))}

                <Link href={'/Pages/Groups'} className="w-full">
                  <button className="border border-gray-500 w-full py-2 rounded-md clash-font font-semibold hover:bg-gray-400/50 transition-all duration-300 cursor-pointer">
                    View More
                  </button>
                </Link>
              </div>

              {/* Members */}
              <div className="p-8 mt-5 bg-[#2d333c] text-white rounded-2xl flex flex-col gap-3">
                <h2 className="text-3xl clash-font font-semibold">Members</h2>

                {MembersData.slice(0, 4).map((member, index) => (
                  <Link href={`/Pages/Members/${member.id}`} className="flex gap-5" key={index}>
                    <div>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="object-center rounded-md"
                      />
                    </div>

                    <div>
                      <h2 className="text-2xl clash-font font-semibold">{member.name}</h2>
                      <p className="text-gray-400">{member.type}</p>
                    </div>
                  </Link>
                ))}

                <Link href={'/Pages/Members'} className="w-full">
                  <button className="border border-gray-500 w-full py-2 rounded-md clash-font font-semibold hover:bg-gray-400/50 transition-all duration-300 cursor-pointer">
                    View More
                  </button>
                </Link>
              </div>

              {/* Recent Posts */}
              <div className="p-8 mt-5 bg-[#2d333c] text-white rounded-2xl flex flex-col gap-4">
                <h2 className="text-2xl clash-font font-semibold">Recent Posts</h2>

                {BlogData && BlogData.length > 0 ? (
                  BlogData.slice(0, 4).map((blog, index) => (
                    <Link
                      href={`/Pages/Blogs/${blog.id}`}
                      key={blog.id || index}
                      className="group flex items-start gap-4 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="shrink-0">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>

                      <div className="flex flex-col justify-center min-w-0">
                        <h3 className="text-base clash-font font-medium leading-snug line-clamp-2 group-hover:text-prim transition-colors duration-300">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">{blog.date}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm clash-font py-2">No recent posts available.</p>
                )}

                <Link href="/Pages/Blogs" className="w-full mt-2">
                  <button className="w-full py-2.5 rounded-lg border border-gray-600 text-gray-300 clash-font font-medium hover:bg-prim hover:text-black hover:border-prim transition-all duration-300 cursor-pointer">
                    View More
                  </button>
                </Link>
              </div>

              {/* Media */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MembersDetails