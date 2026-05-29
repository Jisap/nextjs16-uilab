"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import ShopData from '@/app/JsonData/ShopData.json'

const ShopDetails = () => {

  const params = useParams()
  const { id } = params
  const product = ShopData.find((item) => item.id.toString() === id)

  if (!product) {
    return (
      <div className="text-center py-20 text-white font-serif text-3xl italic">
        Product not Found
      </div>
    )
  }

  return (
    <>
      <div className='mt-5 pb-20'>
        <div className='pb-3 border-b border-gray-600 flex flex-wrap items-center gap-2'>
          <Link href="/" className="hover:text-prim text-2xl">Home</Link>
          <i className='bi bi-chevron-right pt-1.5'></i>
          <Link href="/Pages/Shop" className='hover:text-prim text-xl'>Shop</Link>
          <i className='bi bi-chevron-right pt-1.5'></i>
          <p className='text-prim text-xl'>{product.title}</p>
        </div>

        <div className='mt-10 bg-[#2d333c] rounded-2xl p-12'>
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='w-full lg:w-1/2'>
              <div className='rounded-2xl overflow-hidden group relative'>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className='w-ful h-full rounded-2xl group-hover:scale-110 transition-all duration-300'
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
            </div>

            <div className='w-full lg:w-1/2'>
              <div className='product-box flex gap-3 items-center'>
                <div className='product-review flex gap-2 text-prim'>
                  <i className='bi bi-star-fill text-yellow-400'></i>
                  <i className='bi bi-star-fill text-yellow-400'></i>
                  <i className='bi bi-star-fill text-yellow-400'></i>
                  <i className='bi bi-star-fill text-yellow-400'></i>
                  <i className='bi bi-star-fill text-yellow-400'></i>
                </div>

                <p className='text-gray-400 clash-font font-medium mt-1'>
                  2 reviews
                </p>
              </div>

              <h1 className='clash-font mt-5 font-semibold text-5xl text-white'>
                {product.title}
              </h1>

              <h3 className='text-5xl clash-font font-semibold text-forth my-2'>
                {product.price}
              </h3>

              <p className='text-gray-300 mt-5 clash-font font-medium'>
                Elevate your everyday with our premium selection of high-quality products, meticulously crafted to bring both style and functionality to your life.
              </p>

              <p className='text-gray-300 mt-5 clash-font font-medium'>
                Perfect for gifting or treating yourself, each item is a testament to quality craftsmanship and thoughtful design. Explore the collection and find pieces that resonate with your lifestyle.
              </p>

              <p className='text-gray-300 mt-5 clash-font font-medium'>
                Discover the perfect blend of innovation and design that reflects your unique taste and elevates your daily routine.
              </p>

              <div className='product-list mt-5 space-y-2'>
                <li className='flex font-semibold border-b border-gray-400 text-gray-300 py-1 gap-5 items-center'>
                  SKU:
                  <span>
                    iet-331-3
                  </span>
                </li>

                <li className='flex font-semibold border-b border-gray-400 text-gray-300 py-1 gap-5 items-center'>
                  Category:
                  <span>
                    Cosmetics
                  </span>
                </li>

                <li className='flex font-semibold border-b border-gray-400 text-gray-300 py-1 gap-5 items-center'>
                  Tags:
                  <span>
                    cosmetic, bottle, makeup
                  </span>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 bg-[#2d33c] rounded-2xl p-10 lg:p-22'>
          <h2 className='clash-font text-3xl lg:text-5xl font-bold text-gray-300'>
            Description
          </h2>

          <p className='mt-5 text-gray-300 clash-font font-medium'>
            Soft rubberized backpack available in serveral colors. Features a front zip compartment, adjustable shoulder straps and padded back panel.
            Perfect for school, work or weekend trips. The interior features a padded laptop sleeve and multiple pockets to keep your essentials organized.
          </p>
        </div>
      </div>
    </>

  )
}

export default ShopDetails