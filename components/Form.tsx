import Link from "next/link";
import React from "react";
import { Spinner } from 'flowbite-react';


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

interface FormPost {
  prompt: string;
  tag: string;
}

// Define the types for the props
interface FormProps {
  type: 'Create' | 'Edit'; // Assuming 'type' can be 'Create' or 'Edit'
  post: FormPost;
  setPost: React.Dispatch<React.SetStateAction<FormPost>>;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


function Form({ type, post, setPost, submitting, handleSubmit }: FormProps) {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <p className='desc text-center max-w-md'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>
      <form className="-m-2 flex flex-wrap" onSubmit={handleSubmit}>
        <div className="mt-4 w-full p-2">
          <div className="relative">
            <textarea
              id="prompt"
              name="prompt"
              value={post.prompt}
              onChange={(e) => setPost({ ...post, prompt: e.target.value })}
              required
              className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
              placeholder='Write your post here'
            />
            <label htmlFor="prompt" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">
              Prompt
            </label>
          </div>
        </div>
        <div className="w-full p-2">
          <div className="relative">
            <input
              type="text"
              id="tag"
              name="tag"
              value={post.tag}
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
              required
              className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
              placeholder='#Tag'
            />
            <label htmlFor="tag" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">
              #Tag
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-6 p-2">
          <button
            type='submit'
            disabled={submitting}
            className="flex rounded border-0 bg-gradient-to-r from-green-400 to-blue-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
            {submitting ?  <Spinner color="warning" aria-label="Warning spinner example" /> : "Create"}
          </button>
          <Link href="/">
            <div className="flex rounded border-0 bg-red-500 hover:bg-red-700 py-2 px-8 text-lg text-white focus:outline-none">
              Cancel
            </div>
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Form;
