import { NextResponse } from "next/server"
import { posts } from "./data"


export async function GET() {
  
  return NextResponse.json(posts)
}

