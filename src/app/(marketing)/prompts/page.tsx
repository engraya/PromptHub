import React from 'react'
import Feed from '@components/Feed'
import { IoIosCopy } from "react-icons/io";
function PromptsPage() {
  return (
    <>
    <section className="pb-12 mx-auto md:pb-20 max-w-7xl">
  <div className="py-4 text-center md:py-8">
  <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-3xl md:text-4xl">
    <span className="block xl:inline">
      <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">Explore & Search for Prompts
      </span>
    </span>
  </h1>
</div>
<Feed/>
</section>

    </>


  )
}

export default PromptsPage
