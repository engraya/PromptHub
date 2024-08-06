"use client";

import React, { useEffect, useState } from "react";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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


const ProfilePage: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (session?.user?.id) {
        const response = await fetch(`/api/users/${session.user.id}/posts`);
        const data: Post[] = await response.json();
        setMyPosts(data);
      }
    };

    fetchPosts();
  }, [session?.user?.id]);

  const handleEdit = (post: Post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post: Post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);
        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name={session?.user?.name || ""}
      desc={`Welcome to your profile page. Explore your exceptional prompts and be inspired by the power of your imagination`}
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
