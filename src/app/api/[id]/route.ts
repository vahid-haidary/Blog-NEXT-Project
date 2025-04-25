import { NextResponse } from 'next/server'
import { posts } from '../data'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const singlePost = posts.find((item) => item.id === id)
  return NextResponse.json(singlePost)
}
