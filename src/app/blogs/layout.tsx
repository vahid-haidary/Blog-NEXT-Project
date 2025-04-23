import Link from 'next/link';
import React from 'react';

export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className='bg-amber-400 w-1/2 mx-auto h-25 rounded-b-4xl relative shadow-2xl'>
            <nav className='
                w-1/2 mx-auto flex justify-around absolute top-8 left-0 right-0
                font-semibold text-lg *:cursor-pointer text-white
                *:hover:underline *:decoration-amber-300 *:decoration-2
                '>
            <Link href='/' >Home</Link>
            <Link href='/about' >About</Link>
            <Link href='/blogs' >Blog List</Link>
        </nav>
            </div>
            <main>{children}</main>
        </div>
    );
}