"use client"

import ShopData from "@/app/JsonData/ShopData.json"
import Image from 'next/image'
import Link from 'next/link'

const Shop = () => {
  return (
    <>
      <div className='mt-5 py-5 pb-20'>
        <div className='title'>
          <h1 className='clash-font font-semibold text-5xl md:text-8xl'>
            Our Shop
          </h1>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ShopData.map((product, index) => (
              <Link
                key={index}
                href={`/Pages/Shop/${product.id}`}
                className="p-5 md:p-8 rounded-2xl bg-[#2D333C] cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden group relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={500}
                    loading="eager"
                    className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300"
                  />

                  <span
                    className={`
                      absolute top-5 left-5 px-4 rounded-2xl clash-font font-semibold 
                      ${product.sale === "Sale" && "bg-prim text-black"}
                      ${product.sale === "New" && "bg-second text-black"}
                      ${product.sale === "Hot" && "bg-red-500 text-white"}
                      ${product.sale === "Trending" && "bg-green-500 text-white"}
                      ${product.sale === "" && "hidden"}
                    `}
                  >
                    {product.sale}
                  </span>
                </div>

                <div className="mt-5">
                  <p className="text-gray-400">{product.tag}</p>
                  <h2 className="clash-font font-medium text-4xl lg:text-5xl hover:text-prim text-white transition-all duration-300">{product.title}</h2>
                  <h4 className="text-4xl clash-font font-semibold text-forth mt-3">{product.price}</h4>

                  <div className="border border-gray-400 text-white text-center mt-3 py-3 rounded-xl hover:bg-white hover:text-black font-bold transition-all duration-300 ">
                    View Product
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

export default Shop