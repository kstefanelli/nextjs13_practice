import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className='p-5 bg-gray-200'>
      <div className='space-x-4'>
        <Link href='/' className='px-2 py-1 bg-white text-gray-600 rounded-lg'>
          Home
        </Link>
        <Link
          href='/todos'
          className='px-2 py-1 bg-white text-gray-600 rounded-lg'
        >
          Todos
        </Link>
        <Link
          href='/search'
          className='px-2 py-1 bg-white text-gray-600 rounded-lg'
        >
          Search
        </Link>
      </div>
    </div>
  );
}
