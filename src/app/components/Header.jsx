import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg'>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        <Link href="/" className='text-2xl font-extralight group cursor-pointer'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600' >
            Auth
          </span>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-md group-hover:from-purple-400 group-hover:to-purple-600'>
            App
          </span>
        </Link>

        <nav>
          <ul className='flex gap-4'>
            <Link href="/" className='text-sm font-medium text-gray-800 mt-1'>
              Home
            </Link>

            <Link href="/about" className='text-sm font-medium text-gray-800 mt-1'>
              About
            </Link>

            <Link href="/signup" className='px-4 py-1 text-white bg-purple-500 rounded-md'>
              Sign in
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
