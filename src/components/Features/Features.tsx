import React from 'react'
import Image from 'next/image'
function Features() {
  return (
<section>
  <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
    <div>
      <h2 className="text-3xl font-bold text-center sm:text-5xl">Features</h2>
    </div>
    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="mt-4 space-y-12">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z">
                  </path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z">
                  </path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg></div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">Open Source</h4>
              <p className="mt-2 ">Contribute to the growth and improvement of PromptHub on GitHub.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark-plus">
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  <line x1={12} x2={12} y1={7} y2={13} />
                  <line x1={15} x2={9} y1={10} y2={10} />
                </svg></div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">Responsive Design</h4>
              <p className="mt-2 ">Enjoy a seamless experience across all devices with our responsive design.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video">
                  <path d="m22 8-6 4 6 4V8Z" />
                  <rect width={14} height={12} x={2} y={6} rx={2} ry={2} />
                </svg></div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">Community Sharing</h4>
              <p className="mt-2 ">Share your prompts with a vibrant community and gain inspiration from others.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-question">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
                  <path d="M12 17h.01" />
                </svg></div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi ">User-Friendly Editor</h4>
              <p className="mt-2 ">Create prompts effortlessly with our intuitive and user-friendly editor..</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="mt-10 lg:mt-0">
        <Image width={600} height={600} src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080" className="mx-auto rounded-lg shadow-lg dark-bg-gray-500" alt='feature-image'/>
      </div>
    </div>
  </div>
</section>

  )
}

export default Features



