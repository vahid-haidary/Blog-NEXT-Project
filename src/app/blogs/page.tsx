'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import LoadingPage from '../components/Loading'

const fetchPosts = async () => {
  const res = await axios.get('/api')
  return res.data
}

interface IPOst {
  id: string,
  title: string,
  summary: string,
  slug: string,
  image: string,
  author: string,
  date: string
}

function BlogPage() {
  const {data,isLoading,isError} = useQuery({
    queryFn: fetchPosts,
    queryKey: ['posts']
  })

  const router = useRouter()


  const getIdClick = (id:string) => {
    router.push(`/blogs/${id}`)
  }

  if(isLoading) return <div className='w-full h-lvh text-center flex justify-center items-center' ><LoadingPage/></div>
  if(isError) return <Image src='/banner/503.png' alt='image' />

  return (
    <div className='flex flex-col items-center gap-20 mt-20 max-sm:px-10 max-sm:mt-40 px-30 divide-solid divide-y-2 divide-gray-200 mb-10 select-none'>
      {data && data.map((post:IPOst,index: number) => {
        const isRightToLeft = index % 2 === 0
            return (
              <div key={post.id} className={`flex max-sm:flex-col items-center gap-10 mx-auto pb-6 ${isRightToLeft ? 'sm:flex-row ' :'sm:flex-row-reverse '}`}>
              <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={300}
              className='rounded-2xl shadow-2xl'
             />
             <div className={`flex flex-col text-gray-400 ${isRightToLeft? "text-start items-start" : "sm:text-end sm:items-end"}`}>
                <h1 onClick={() => getIdClick(post.id)} className='text-3xl max-sm:text-2xl font-bold text-blue-500 mb-2 tracking-widest cursor-pointer'>{post.slug}</h1>
                <div className='flex gap-3 items-center mb-1'>
                  <span className='text-yellow-500 font-semibold'>{post.author}</span>
                  <span>|</span>
                  <span className='font-semibold'>{post.date}</span>
                </div>
                <p>
                  {post.summary}
                </p>
             </div>
            </div>
          )
      }
      )}
    </div>
  )
}

export default BlogPage