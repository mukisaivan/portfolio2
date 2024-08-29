"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

type Props = {
  image: string
  name: string
  githublink: string
  demolink: string
}

export default function ProjectCard({
  image,
  name,
  githublink,
  demolink,
}: Props) {
  const router = useRouter()

  const bigCard = (
    <div className=" color-container border-gray-300 shadow-lg border rounded-2xl cursor-pointer md:p-5 bg-white text-center min-w-[200px] max-w-[400px] min-h-[700px] flex flex-col items-center justify-around ">
      <div className="">
        <Image
          width={500}
          height={400}
          src={image}
          alt="Project 1"
          className=" rounded-xl h-[400px] w-[500px] object-fill hover:scale-140 "
        />
      </div>
      <h2 className="experience-sub-title project-title">{name}</h2>
      <div className="btn-container">
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => {
            router.push(githublink)
          }}
        >
          Github
        </button>
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => {
            router.push(demolink)
          }}
        >
          Live Demo
        </button>
      </div>
    </div>
  )

  const smallCard = (
    <div className=" text-xs color-container border-gray-300 shadow-lg border rounded-2xl cursor-pointer bg-white text-center min-w-[180px] min-h-[350px] flex flex-col items-center justify-around p-3 ">
      <div className="">
        <Image
          height={200}
          width={180}
          src={image}
          alt="Project 1"
          className=" rounded-xl h-[200px] w-[180px] object-fill hover:scale-140 "
        />
      </div>
      <h2 className=" font-bold  p-3 overflow-hidden text-ellipsisline-clamp-1 ">
        {name}
      </h2>
      <div className=" flex  gap-2">
        <button
          className=" border rounded-xl p-2 border-black "
          onClick={() => {
            router.push(githublink)
          }}
        >
          Github
        </button>
        <button
          className="border rounded-xl p-2 border-black"
          onClick={() => {
            router.push(demolink)
          }}
        >
          Live Demo
        </button>
      </div>
    </div>
  )

  return (
    // <div className="details-container color-container cursor-pointer ">
    <div>
      <div className=" md:hidden block">{smallCard}</div>
      <div className=" hidden md:block">{bigCard}</div>
    </div>
  )
}
