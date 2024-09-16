"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";
import { toast } from "react-toastify";
function UpdatePromptPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const [post, setPost] = useState({ prompt: "", tag: "", username : "", email : "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      console.log("Prompt Response", response)
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
        username: data.username,
        email: data.email,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    if (!promptId) {
      return alert("Missing PromptId!");
    }
  
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
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
        router.push("/prompts"); // Redirect after successful update
        toast.success("Prompt successfully updated!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating prompt");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (

<div className="container mx-auto px-5 py-12">
  <div className="flex w-full flex-col text-center">
  <div className="text-center ">
  <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-3xl md:text-4xl">
    <span className="block xl:inline">
      <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
        Update Prompts
      </span>
    </span>
  </h1>
</div>
  </div>
  <div className="mx-auto md:w-2/3 lg:w-1/2">
  <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  </div>
</div>
  )
}

export default UpdatePromptPage







