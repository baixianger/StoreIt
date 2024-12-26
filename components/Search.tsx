"use client";

import React, {useState} from 'react'
import Image from "next/image";
import {Input} from "@/components/ui/input";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="search">
      <div className="search-input-wrapper">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
        />
        <Input
          value={query}
          placeholder="Search..."
          className="search-input"
          onChange={(e)=>setQue ry(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search