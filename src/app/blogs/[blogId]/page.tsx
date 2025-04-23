'use client'
import LoadingPage from '@/app/components/Loading'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { use } from 'react'


interface IParamsId {
  params: Promise<{
    blogId: string
  }>
}

const fetchFilterBlogs = async (blogId:string) => {
  const res = await axios.get(`/api/${blogId}`)
  return res
}


function BlogId({params}:IParamsId) {
  const {blogId} = use(params)
  const {data} = useQuery({
    queryFn: () => fetchFilterBlogs(blogId),
    queryKey:['posts',blogId],
  })

  return (
    <div className='w-1/2 max-sm:w-full max-sm:px-11 max-sm:mt-40 max-sm:mb-20 mx-auto mt-10 select-none'>
     <div className='flex flex-col items-center'>     
      <img loading='lazy' src={data?.data.image} alt={data?.data.id} className='shadow-2xs rounded-2xl w-[700px] h-[300px]' />
      <h1 className='text-4xl max-sm:text-2xl font-bold mt-5 text-blue-500'>
     {data?.data.title}
      </h1>
      <p className='mt-8'>
        {data?.data.summary}
      </p>
     </div>
     <div className='mt-10 text-center flex gap-3 text-gray-500 font-semibold'>
      <span className='!text-amber-400'>{data?.data.author}</span>
      <span>|</span>
      <span>{data?.data.date}</span>
     </div>
    </div>
  )
}

export default BlogId