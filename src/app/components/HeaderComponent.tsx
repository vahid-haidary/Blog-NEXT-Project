import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import LoadingPage from './Loading'

function HeaderComponent() {
  return (
    <Suspense fallback={<LoadingPage/>} >
    <div className='relative w-full h-[500px] select-none'>
        <Image
        src='/banner/banner.jpg'
        alt='Banner'
        fill
        className='object-cover relative max-h-[500px]'
        />
        {/* overLay */}
        <div className='w-full h-full bg-amber-500 opacity-40 absolute inset-0' ></div>
        {/* text */}
        <div className='absolute inset-0 flex justify-center items-center '>
            <h1 className='text-6xl font-bold text-gray-50'>Vahid-Blog</h1>
        </div>
        {/* Navigation */}
        <nav className='
         w-1/4 max-sm:w-full max-sm:gap-6 mx-auto absolute left-0 right-0 top-10 flex justify-around 
          text-white font-semibold text-lg *:cursor-pointer
          *:hover:underline *:decoration-amber-300 *:decoration-2
          *:inline-block
          '>
            <Link href='/' >Home</Link>
            <Link href='/about' >About</Link>
            <Link href='/blogs' >Blog List</Link>
        </nav>
        <div className='absolute bottom-20 left-0 right-0 flex justify-center gap-24
        *:bg-white *:rounded-2xl *:px-3 *:py-1.5 *:text-xl
        *:cursor-pointer *:hover:bg-amber-600 *:hover:text-white
        '>
            <Link href='/blogs'>GetStarted</Link>
            <button className='!bg-transparent border border-white hover:!bg-amber-600'>LearnMore</button>
        </div>
    </div>
    </Suspense>
  )
}

export default HeaderComponent