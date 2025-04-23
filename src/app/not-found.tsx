import Image from 'next/image'
import React from 'react'

function NotFoundPage() {
  return (
    <div className='w-full flex justify-center items-center'>
        <Image
        src='/banner/404.png'
        width={500}
        height={500}
        alt='404'
        />
    </div>
  )
}

export default NotFoundPage