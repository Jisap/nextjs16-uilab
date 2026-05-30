"use client"

import CourseData from "@/app/JsonData/CoursesData.json"
import Image from "next/image"
import Link from "next/link"

const Courses = () => {
  return (
    <div className="mt-5 py-5">
      <div className="flex flex-wrap justify-between items-center gap-5">
        <div className="title">
          <h1 className="clash-font font-semibold text-5xl md:text-9xl">
            Our Courses
          </h1>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {CourseData.map((course, index) => (
              <Link href={`/Pages/Courses/${course.id}`} key={index} className="block h-full">
                <div className="p-5 rounded-2xl bg-[#2d333c] cursor-pointer h-full flex flex-col">
                  <div>
                    <span className="clash-font font-medium text-black px-2 py-1 inline-block rounded bg-second">
                      {course.tag}
                    </span>
                  </div>

                  <h2 className="clash-font font-semibold text-4xl mt-3 text-white hover:text-prim transition-all duration-300">
                    {course.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-3 mt-5 mb-5">
                    <p className="text-gray-400 clash-font font-medium text-md">
                      4.5{"  "}
                      <i className="bi bi-star-fill text-yellow-300"></i>
                    </p>

                    <p className="text-gray-400 clash-font font-medium text-md">
                      {course.lessons}
                    </p>

                    <p className="text-gray-400 text-2xl">•</p>

                    <p className="text-gray-400 clash-font font-medium text-md">
                      {course.students}
                    </p>

                    <p className="text-gray-400 text-2xl">•</p>

                    <p className="text-gray-400 clash-font font-medium text-md">
                      {course.author}
                    </p>

                    <Image
                      src={course.authorImage}
                      alt={course.author}
                      width={100}
                      height={100}
                      className="w-6 object-cover"
                    />
                  </div>

                  <div className="mt-auto rounded-2xl overflow-hidden group relative">
                    <h2 className="absolute bottom-5 right-5 z-10 clash-font font-semibold text-3xl text-white bg-black px-6 py-3 rounded-2xl transition-all duration-300">
                      {course.price}
                    </h2>

                    <Image
                      src={course.image}
                      alt={course.title}
                      width={500}
                      height={500}
                      className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses