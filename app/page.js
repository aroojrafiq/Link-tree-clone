"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
    const [text, setText] = useState("");
  const router = useRouter();
  const createtree = () => {
    router.push(`/generate?handle=${text}`)
  };

  return (
    // add top padding so content is pushed below the fixed navbar
    <div className="bg-[#254f1a] min-h-screen w-full grid grid-cols-2 items-center justify-center pt-28 md:pt-32">
      <div className="text">
      <h1 className="text-6xl  font-bold  text-[#d2e823] font-[Linksans Linksansvf, sans-serif] font-extrabold text-left  ml-[10vw]">
       Everything you are. In one, simple link in bio.
      </h1>
      <p className=" text-white ml-[10vw] pt-10">
      Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
      </p>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter your handle" className="bg-white rounded-lg focus:outline-none placeholder:text-[#757575] ml-[10vw] h-[64px] mt-5 p-5" />
      <button onClick={createtree} className="bg-[#e9c0e9] rounded-full p-5 font-bold ml-2"> Claim your Linktree </button>
      </div>
      <div className="image h-auto w-full relative z-0 mt-6 md:mt-0 flex justify-center">
        {/* keep the image slightly lower on small screens so it doesn't visually butt up against the navbar */}
        <img src="/image.png" alt="Linktree Logo" className="max-w-full h-auto object-contain"/>
      </div>
     </div>
   );
 }
  
