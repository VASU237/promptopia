"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

import React from 'react'

const MyProfile = () => {
    const {data:session} = useSession();
    const [posts, setPosts] = useState([])
    const router = useRouter();


    useEffect(()=>{
        const fetchPosts = async () =>{
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
      
          setPosts(data);
        }
        if(session?.user.id) fetchPosts();
      },[session?.user.id]);

    const handleEdit=(post)=>{

      router.push(`/update-prompt?id=${post._id}`)



    }

    const handleDelete = async (post) =>{

      const hasConfirmed = confirm("Are you Sure???");

      if(hasConfirmed){
        try {
          await fetch(`api/prompt/${post._id.toString()}`,{
            method:'DELETE'
          });

          const filteredPosts = posts.filter((p)=> p._is !== post._id);

        } catch (error) {
          console.log(error);
        }
      }
    }



    return (
        <Profile
          name='My'
          desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
          data={posts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      );
    };


export default MyProfile
