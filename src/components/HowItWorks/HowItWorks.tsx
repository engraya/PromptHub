import React from 'react'
import Image from 'next/image'
function HowItWorks() {
  return (
<section id="works" className="relative py-10 sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl text-gray-800 dark:text-gray-100 font-extrabold mx-auto md:text-5xl lg:text-4xl">How does it work?</h2>
      <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
        Our Exceptional solution will help you from start to finish
      </p>
    </div>
    <div className="relative mt-12 lg:mt-20">
      <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"><Image alt="" loading="lazy" width={1000} height={500} decoding="async" data-nimg={1} className="w-full" style={{color: 'transparent'}} src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" />
      </div>
      <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700">1</span>
          </div>
          <h3 className="mt-6 text-xl text-gray-800 dark:text-gray-100 font-semibold leading-tight md:mt-10">Join the Community</h3>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
          Create your account to gain full access to PromptHub. Explore the diverse range of prompts created by our community and get a feel for the inspiration that awaits you
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700">2</span>
          </div>
          <h3 className="mt-6 text-xl text-gray-800 dark:text-gray-100 font-semibold leading-tight md:mt-10">Create Unique Prompts</h3>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
          Use our  prompt generator to create unique prompts tailored to your needs. Enter a few details about your project, and let our AI do the rest. Customize the generated prompt to make it perfect for your use case.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700">3</span>
          </div>
          <h3 className="mt-6 text-xl text-gray-800 dark:text-gray-100 font-semibold leading-tight md:mt-10">Connect and Inspire</h3>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
          Share your customized prompts with the PromptHub community. Collaborate with other creators in real-time, gain feedback, and discover new ideas. Engage with a network of innovative thinkers and let your creativity flourish.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default HowItWorks
