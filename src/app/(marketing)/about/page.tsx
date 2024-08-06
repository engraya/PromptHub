import React from 'react'

function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="max-w-lg flex-col gap-y-8">
        <div className='gap-y-4'>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">About Ai Prompts</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-500 text-lg">aiPrompts is an innovative open-source web application designed to unleash your creativity. By leveraging the power of AI, aiPrompts allows users to generate, customize, and share unique prompts for a wide range of creative projects. Whether you're a writer seeking inspiration, a marketer in need of fresh ideas, or a developer looking for new challenges, aiPrompts has something for everyone..</p>
        </div>
        <div className='gap-y-4 mt-4'>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">Mission</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-500 text-lg">Our mission at aiPrompts is to empower creators by providing them with cutting-edge tools and a supportive community. We believe that the combination of advanced AI technology and human ingenuity can lead to incredible breakthroughs. aiPrompts is committed to fostering a collaborative environment where ideas can flourish and creativity knows no bounds.</p>
        </div>
        <div className="mt-8">
          <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
            <span className="ml-2">→</span></a>
        </div>
      </div>
      <div className="mt-12 md:mt-0">
        <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
      </div>
    </div>
  </div>
  )
}

export default AboutPage
