import Link from "next/link"
import React from 'react'

function NoPromptData() {
  return (
<div className="h-screen flex flex-col justify-center items-center">
  <h1 className="text-8xl font-bold text-gray-800">No Promts Available for the moment</h1>
   <Link href="/create-prompt" className="mt-4 text-xl text-blue-600 hover:underline">New Prompt</Link>
</div>

  )
}

export default NoPromptData
