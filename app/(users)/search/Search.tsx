"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch} className='space-x-2'>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search...'
        className='border text-black py-2 px-4 rounded-lg'
      />
      <button
        type='submit'
        className='bg-gray-200 text-black py-2 px-4 rounded-lg'
      >
        Search
      </button>
    </form>
  );
}
