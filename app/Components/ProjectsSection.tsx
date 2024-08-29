"use client"
import React from "react"
import ProjectCard from "./ProjectCard"

type Props = {}

export default function ProjectsSection({}: Props) {
  return (
    <div id="projects" className="">
      <p className="section__text__p1">Browse My Recent</p>

      <h1 className="title">Projects</h1>

      <div className="grid justify-center md:grid-cols-3 grid-cols-2 md:gap-8 gap-2  mt-8">
        <ProjectCard
          name={"Real Time Malnutrition Detection App"}
          image={"/assets/malnourishedkid.png"}
          githublink={"https://github.com/malnudetect/maldex"}
          demolink={
            "https://drive.google.com/file/d/17vyrHhxH_aG69EtPPodzlSrifZ4rDC0s/view?usp=drive_link"
          }
        />
        <ProjectCard
          name={"Zion Ecommerce Web App"}
          image={"/assets/ecommercewebsite.png"}
          githublink={"https://github.com/mukisaivan/zionvitenge2"}
          demolink={""}
        />
        <ProjectCard
          name={"Bank Queue Management Tool"}
          image={"/assets/queuepic.png"}
          githublink={"https://github.com/mukisaivan/queueingtool"}
          demolink={""}
        />
        <ProjectCard
          name={"WhatsApp Clone App"}
          image={"/assets/whatsappclone.png"}
          githublink={"https://github.com/mukisaivan/whatsappclone1"}
          demolink={""}
        />
        <ProjectCard
          name={"Zion E-commerce Mobile App"}
          image={"/assets/ecommerceproj.png"}
          githublink={"https://github.com/mukisaivan/zion"}
          demolink={""}
        />
      </div>

      <img
        height={30}
        width={30}
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </div>
  )
}
