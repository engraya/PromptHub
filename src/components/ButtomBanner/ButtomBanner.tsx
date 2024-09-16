import React from 'react'
import Link from 'next/link'
function ButtomBanner() {
  return (
<div className="mx-auto py-16 sm:px-6 lg:px-8">
  <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
    <h2 className="font-nudge-extrabold mx-auto max-w-2xl text-3xl font-bold uppercase tracking-wide sm:text-4xl">Join our
      community now</h2>
    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Create your account to gain full access to PromptHub. Explore the diverse range of prompts created by our community and get a feel for the inspiration that awaits you</p>
    <div className="mt-12 flex items-center justify-center gap-x-6">
      <Link href="https://github.com/engraya/PromptHub" target="_blank">
      <button type="button" className="text-md relative inline-flex items-center gap-x-2 rounded-lg bg-teal-600 px-6 py-4 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
        <span className="absolute -top-5 left-0 w-full text-center text-xs italic text-teal-600">No Obligations</span>Join Now
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="-mr-0.5 h-5 w-5">
          <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      </Link>
    </div>
    <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[72rem] w-[72rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
      <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
      <defs>
        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
          <stop stopColor="#15a0b8" />
          <stop offset={1} stopColor="#15adb8" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</div>


  )
}

export default ButtomBanner
