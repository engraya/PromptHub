"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { IoIosCopy } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { promptCreator } from "@assets";

interface Creator {
  _id: string;
  username: string;
  email: string;
  image: string;
}

interface Post {
  _id: string;
  prompt: string;
  tag: string;
  username : string
  email : string
}

interface PromptCardProps {
  post: Post;
  handleEdit?: () => void;
  handleDelete?: () => void;
  handleTagClick?: (tag: string) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ post, handleEdit, handleDelete, handleTagClick }) => {

  const [copied, setCopied] = useState<string>("");


  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div 
      className="aspect-auto p-6 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
    >
      <div className="flex justify-between items-center gap-2">
        <Image
          className="w-12 h-12 rounded-full"
          src={promptCreator}
          alt="user avatar"
          width={400}
          height={400}
          loading="lazy"
        />
        <div>
          <h6 className="text-lg font-medium text-gray-700 dark:text-white">{post.username}</h6>
          <p className="text-sm text-gray-500 dark:text-gray-300">{post.email}</p>
        </div>
        <div onClick={handleCopy} className='p-4 ml-auto rounded-full bg-gray-200 cursor-pointer overflow-hidden'>
          { copied === post.prompt ? <IoCheckmarkDoneSharp className='text-blue-500 hover:text-blue-600'/> : <IoIosCopy className='text-blue-500 hover:text-blue-600'/> }
        </div>
      </div>
      <p className="mt-8 text-teal-950 dark:text-gray-200">{post.prompt}</p>
      <div onClick={() => handleTagClick && handleTagClick(post.tag)} className='text-blue-500 hover:text-blue-600 mt-4'>
        #{post.tag}
      </div>
        <div className="flex space-x-4 justify-center items-center mt-3 flex-center gap-4 border-t border-gray-100 pt-2">
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
    </div>
  );
}

export default PromptCard;
