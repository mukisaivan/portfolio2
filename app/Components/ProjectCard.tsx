"use client"

import { useRouter } from "next/navigation"
import React from "react"

type Props = {
  image: string
  name: string
  toLink: string
}

export default function ProjectCard({ image, name, toLink }: Props) {
  const router = useRouter()

  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img src={image} alt="Project 1" className="project-img" />
      </div>
      <h2 className="experience-sub-title project-title">{name}</h2>
      <div className="btn-container">
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => {
            router.push(toLink)
          }}
        >
          Github
        </button>
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => {
            router.push(toLink)
          }}
        >
          Live Demo
        </button>
      </div>
    </div>
  )
}
