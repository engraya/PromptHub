"use client"
import React from 'react'
import Feed from '@components/Feed'
import { IoArrowBackCircle } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
function PromptsPage() {
  const router = useRouter();


  const handleBack = () => {
    router.push(`/`);
  };

  return (
    <>
    <section className="mx-auto md:pb-20 max-w-7xl">
  <div className="py-4 text-center md:py-8">
  <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-3xl md:text-4xl">
      <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">Explore & Search for Prompts
      </span>
  </h1>
  <div className="flex cursor-pointer" onClick={() => handleBack()}>
      <IoArrowBackCircle size="2rem" />
 </div>
</div>
<Feed/>
</section>

    </>


  )
}

export default PromptsPage
