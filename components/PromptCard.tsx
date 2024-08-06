"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { IoIosCopy } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

function PromptCard({ post, handleEdit, handleDelete, handleTagClick }) {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();
  
    const [copied, setCopied] = useState("");
  
    const handleProfileClick = () => {
      console.log(post);
  
      if (post.creator._id === session?.user.id) return router.push("/profile");
  
      router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
    };
  
    const handleCopy = () => {
      setCopied(post.prompt);
      navigator.clipboard.writeText(post.prompt);
      setTimeout(() => setCopied(false), 3000);
    };


  return (
  <div 
    className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
    onClick={handleProfileClick}
  >
    <div className="flex gap-4 items-start">
      {/* <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/12.jpg" alt="user avatar" width={400} height={400} loading="lazy" /> */}
      <Image
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className="w-12 h-12 rounded-full"
          />
      <div className="flex-1 flex justify-between items-start">
        <div>
          <h6 className="text-lg font-medium text-gray-700">{post.creator.username}</h6>
          <p className="text-sm text-gray-500">{post.creator.email}</p>
        </div>
        <div onClick={handleCopy} className='p-3 ml-20 rounded-full bg-gray-200 cursor-pointer'>
            { copied === post.prompt ? <IoCheckmarkDoneSharp className='text-blue-500 hover:text-blue-600'/> : <IoIosCopy className='text-blue-500 hover:text-blue-600'/> }
        </div>
      </div>
    </div>
    <p className="mt-8">{post.prompt}</p>
      <div onClick={() => handleTagClick && handleTagClick(post.tag)} className='text-blue-500 hover:text-blue-600 mt-4'>
      #{post.tag}
      </div>
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="flex space-x-4 justify-center items-center mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
        <button 
          onClick={handleEdit}
          className="border border-green-500 text-green-500 font-bold py-1 px-2 rounded-lg">
            Edit
          </button>
          <button 
          onClick={handleDelete}
          className="border border-red-500 text-red-500 font-bold py-1 px-2 rounded-lg">
            Delete
          </button>
  </div>
      )}

  </div>
  )
}

export default PromptCard
