"use client"
import React from "react"

type Props = {
  name: string
  status?: string
}

export default function ExperienceComponent({ name, status }: Props) {
  return (
    <article>
      <img
        height={30}
        width={30}
        src="./assets/checkmark.png"
        alt="Experience icon"
        className="icon"
      />

      <div>
        <h3>{name}</h3>

        <p>{status}</p>
        <p>{!status && "Experienced"}</p>
      </div>
    </article>
  )
}
