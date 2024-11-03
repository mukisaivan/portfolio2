"use client"
import React from "react"
import ExperienceComponent from "./ExperienceComponent"
import Image from "next/image"

type Props = {}

export default function ExperienceSection({}: Props) {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>

      <h1 className="title">Experience</h1>

      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>

            <div className="article-container">
              <ExperienceComponent name={"HTML"} />
              <ExperienceComponent name={"CSS"} />
              <ExperienceComponent name={"Tailwind"} />
              <ExperienceComponent name={"JavaScript"} />
              <ExperienceComponent name={"React Js"} />
              <ExperienceComponent name={"React Native"} />
              <ExperienceComponent name={"TypeScript"} />
              <ExperienceComponent name={"Flutter"} />
            </div>
          </div>

          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>

            <div className="article-container">
              <ExperienceComponent name="Git" />
              <ExperienceComponent name="Next Js" />
              <ExperienceComponent name="Node Js" />
              <ExperienceComponent name="Express Js" />
              <ExperienceComponent name="PostgreSQl" />
              <ExperienceComponent name="Firebase" />
              <ExperienceComponent name="MongoDB" />
              <ExperienceComponent name="Prisma" />
              <ExperienceComponent name="GraphQL" />
              <ExperienceComponent name="MySQL" />
            </div>
          </div>
        </div>
      </div>

      <Image
        height={30}
        width={30}
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  )
}
