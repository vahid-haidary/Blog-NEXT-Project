'use client'

import Image from "next/image";

function ErrorPage({reset}:{reset: ()=>void}) {

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
        <h1 className="text-3xl font-bold text-red-500 mt-5">Something went wrong!</h1>
      <Image
        src="/banner/503.png" 
        alt="Error"
        width={500}
        height={500}
        className="w-1/2 max-w-md"
      />
            <button
        onClick={() => reset()}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorPage;