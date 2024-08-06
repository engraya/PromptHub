"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";

interface Params {
  id?: string;
}

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

function UserProfilePage({ params }: { params: Params }) {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (params?.id) {
        const response = await fetch(`/api/users/${params.id}/posts`);
        const data: Post[] = await response.json();
        setUserPosts(data);
      }
    };

    fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={userName || ""}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
}

export default UserProfilePage;
