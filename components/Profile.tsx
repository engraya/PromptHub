"use client";

import React from 'react';
import { useSession } from "next-auth/react";
import Image from "next/image";
import PromptCard from './PromptCard';


interface Creator {
  _id: string;
  username: string;
  email: string;
  image: string;
}

interface Post {
  _id: string;
  creator: Creator;
  prompt: string;
  tag: string;
}

interface ProfileProps {
  data: Post[];
  name: string;
  desc: string;
  handleEdit?: (post: Post) => void;
  handleDelete?: (post: Post) => void;
}


const Profile: React.FC<ProfileProps> = ({ data, handleEdit, handleDelete }) => {
  const { data: session } = useSession();

  return (
    <section className="w-full overflow-hidden">
      <div className="w-full mx-auto">
        {/* User Cover IMAGE */}
        <Image
          src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="User Cover"
          height={100}
          width={100}
          className="w-full xl:h-[14rem] lg:h-[18rem] md:h-[12rem] sm:h-[10rem] xs:h-[6.5rem]"
        />
        {/* User Profile Image */}
        <div className="w-full mx-auto flex justify-center">
          <Image
            src={session?.user?.image || ""}
            width={70}
            height={70}
            alt="user-image"
            className="rounded-full xl:w-[10rem] xl:h-[10rem] lg:w-[10rem] lg:h-[10rem] md:w-[8rem] md:h-[8rem] sm:w-[6rem] sm:h-[6rem] xs:w-[4rem] xs:h-[4rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]"
          />
        </div>
        <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
          {/* FullName */}
          <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif">
            {session?.user?.name}
          </h1>
          <p className="text-center text-gray-800 dark:text-white text-xl font-serif">
            {session?.user?.email}
          </p>
        <div className="text-gray-600 dark:text-gray-300 pt-8" id="reviews">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="mb-10 space-y-4 px-6 md:px-0">
              <h2 className="text-center text-2xl bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent font-bold text-gray-800 md:text-4xl">
                My Prompts
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            {data.map((post) => (
              <PromptCard
                key={post._id}
                post={post}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
              />
            ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
