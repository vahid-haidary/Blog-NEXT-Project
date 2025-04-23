import { NextResponse } from "next/server"
import { posts } from "../data"

interface IParams {
    id: string
}

export async function GET(request,{params}:{params:Promise<IParams>}) {
    const {id} = await params
  const singlePosts = posts.filter((item) => 
    item.id == id 
  )
  return NextResponse.json(singlePosts?.[0])
}
