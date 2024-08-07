import React from 'react'
import Image from 'next/image'
function Reviews() {
  return (
<div className="text-gray-600 dark:text-gray-300 pt-8" id="reviews">
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div className="mb-10 space-y-4 px-6 md:px-0">
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        We have some fans.
      </h2>
    </div>
    <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <Image className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/12.jpg" alt="user avatar" width={400} height={400} loading="lazy" />
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">John Doe</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">Content Writer</p>
          </div>
        </div>
        <p className="mt-8">"aiPrompts has completely transformed my writing process. The AI-generated prompts are incredibly creative and have sparked so many new ideas for my projects. I can't recommend it enough!"
        </p>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
        <Image className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width={200} height={200} loading="lazy" />
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Smith</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">Marketing Specialist</p>
          </div>
        </div>
        <p className="mt-8">As a marketer, I'm always looking for fresh ideas. aiPrompts has been a game-changer for my brainstorming sessions. The community aspect is also fantastic for getting feedback and collaborating on new concepts.
        </p>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
        <Image className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/18.jpg" alt="user avatar" width={200} height={200} loading="lazy" />
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Michael Brown</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">Software Developer</p>
          </div>
        </div>
        <p className="mt-8">I love using aiPrompts to generate coding challenges and project ideas. It's a great way to keep my skills sharp and stay inspired. The customization options are really impressive too!
        </p>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
        <Image className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width={200} height={200} loading="lazy" />
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Emily Johnson</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">Graphic Designer</p>
          </div>
        </div>
        <p className="mt-8">aiPrompts is an amazing tool for sparking creativity. Whether I'm working on a new design or looking for inspiration, the prompts are always helpful. Plus, the community is very supportive and engaging.
        </p>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
        <Image className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/62.jpg" alt="user avatar" width={200} height={200} loading="lazy" />
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">David Wilson</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">Teacher</p>
          </div>
        </div>
        <p className="mt-8">I've integrated aiPrompts into my classroom activities, and my students love it! The prompts are diverse and engaging, making learning more fun and interactive. It's a wonderful resource for educators.
        </p>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
        <Image className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width={400} height={400} loading="lazy" />
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Sarah Davis</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">Entrepreneur</p>
          </div>
        </div>
        <p className="mt-8">aiPrompts has been invaluable for my business ideation process. The AI-generated prompts help me think outside the box and come up with innovative solutions. It's a must-have tool for any entrepreneur.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Reviews
