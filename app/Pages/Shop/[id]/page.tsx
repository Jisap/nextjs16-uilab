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

        <div className='mt-5'>

        </div>
      </div>
    </>

  )
}

export default ShopDetails