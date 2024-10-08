"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import { toast } from "react-toastify";

// Define types for the prompt and props
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

// Define a type for the form state
interface FormPost {
  prompt: string;
  tag: string;
  username : string
  email : string
}


const CreatePromptPage: React.FC = () => {
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState<FormPost>({ prompt: "", tag: "", username : "", email : "" });

  const createPrompt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          username: post.username,
          email: post.email,
        }),
      });

      if (response.ok) {
        router.push("/prompts");
        toast.success("Prompt successfully created!!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-5 py-16">
      <div className=" flex w-full flex-col text-center">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-3xl md:text-4xl">
            <span className="block xl:inline">
              <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                Create Prompt
              </span>
            </span>
          </h1>
        </div>
      </div>
      <div className="mx-auto md:w-2/3 lg:w-1/2">
        <Form
          type="Create"
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={createPrompt}
        />
      </div>
    </div>
  );
};

export default CreatePromptPage;
