"use client"

import React, { useState } from "react"

export default function Button() {
  const [count, setCount] = useState(0)
  return (
    <button
      className="mb-60 bg-gray-100 p-4 rounded-md hover:bg-gray-200"
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  )
}
