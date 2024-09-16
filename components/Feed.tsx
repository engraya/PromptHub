"use client";

import { useState, useEffect } from "react";
import NewPromptCard from "./NewPromptCard";
import Link from "next/link";

interface Post {
  _id: string;
  prompt: string;
  tag: string;
  username : string
  email : string
}

interface PromptCardListProps {
  data: Post[];
  handleTagClick: (tagName: string) => void;
}

const PromptCardList = ({ data, handleTagClick }: PromptCardListProps) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
      {data.map((post) => (
        <NewPromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);
  const [searchedResults, setSearchedResults] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/prompt");
      const data: Post[] = await response.json();
      setAllPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchText: string) => {
    const regex = new RegExp(searchText, "i");
    return allPosts.filter(
      (item) =>
        regex.test(item.username) ||
        regex.test(item.email) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName: string) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className='w-full flex justify-center items-center flex-col gap-2'>

      <form className='relative flex-center w-full space-x-3 flex justify-center items-center'>
        <input
          type='text'
          placeholder='Search tag or username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='w-full flex justify-center items-center text-gray-800 rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0'
        />
        <Link href="/create-prompt">
          <button type="button" className="text-white flex justify-center items-center bg-gradient-to-r from-blue-400 to-indigo-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
            Create
            <span>+</span>
          </button>
        </Link>
      </form>

      {/* All Prompts */}
      {searchText ? (
        <div className="">
          <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
        </div>
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
