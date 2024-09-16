"use client";

import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FcEditImage } from "react-icons/fc";
import { useState } from "react";
import Image from "next/image";
import { IoIosCopy } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { promptCreator } from "@assets";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { formatDate } from '@utils/date';
  
  interface Post {
    _id: string;
    prompt: string;
    tag: string;
    username : string
    email : string
    createdAt : string
  }
  
  interface PromptCardProps {
    post: Post;
    handleEdit?: () => void;
    handleDelete?: () => void;
    handleTagClick?: (tag: string) => void;
  }

function NewPromptCard({ post, handleTagClick } : PromptCardProps) {

    const [copied, setCopied] = useState<string>("");
    const router = useRouter();

        
    const handleRevalidatePromptPage = () => {
      router.push(`/prompts`); // Pass the prompt ID in the query params
    };
    


    const deletePrompt = async (promptId: string) => {
    
      try {
        const response = await fetch(`/api/prompt/${promptId}`, {
          method: "DELETE",
        });
    
        if (response.ok) {
          handleRevalidatePromptPage()
          // router.push("/"); 
          
          toast.success("Prompt successfully deleted!");
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData);
          toast.error("Failed to delete the prompt.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred while deleting the prompt.");
      } finally {
      }
    };
    


    const handleCopy = () => {
      setCopied(post.prompt);
      navigator.clipboard.writeText(post.prompt);
      setTimeout(() => setCopied(""), 3000);
    };


    const handleUpdatePrompt = () => {
      router.push(`/update-prompt?id=${post._id}`); // Pass the prompt ID in the query params
    };




  return (
<div className="font-sans rounded-md border px-6 py-4 h-full">
  <div className="flex items-center">
    <Image 
        src={promptCreator}
        alt='prompt-creator'
        className="h-12 w-12 rounded-full"
        loading="lazy"
    />
    <div className="flex flex-col">
        <div className="font-bold text-black dark:text-emerald-50">
            {post.username}
        </div>
        <span className="text-gray-800 text-xs dark:text-emerald-50">{post.email}</span>
        </div>
        <div className="ml-auto cursor-pointer"  onClick={handleCopy}>
        { copied === post.prompt ? <IoCheckmarkDoneSharp className='text-blue-500 hover:text-blue-600'/> : <IoIosCopy className='text-blue-500 hover:text-blue-600'/> }
        </div>
  </div>
    <div className=" mt-3 mb-1 leading-normal text-lg dark:text-emerald-50">{post.prompt}</div>
    <div className="flex text-grey justify-between mt-6">
      <div className="flex justify-start">
      <div onClick={() => deletePrompt(post._id)} className="flex items-center mr-4 cursor-pointer"><RiDeleteBin6Fill size="1.5rem" color='red'/></div>
      <div onClick={() => handleUpdatePrompt()} className="flex items-center mr-4 cursor-pointer"><FcEditImage size="1.5rem"/></div>
      </div>
      <div className="text-grey text-xs flex justify-center items-center mr-2 dark:text-emerald-50">{formatDate(post.createdAt)}</div>
      <div onClick={() => handleTagClick && handleTagClick(post.tag)} className="flex justify-start gap-1 px-2 py-1 text-xs dark:text-gray-900 rounded cursor-pointer dark:bg-emerald-100 bg-slate-100 text-blue-600">
        <span>
        #{post.tag}
        </span>
      </div>
    </div>


</div>

  )
}

export default NewPromptCard
