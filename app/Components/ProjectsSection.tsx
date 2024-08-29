"use client"
import React from "react"
import ProjectCard from "./ProjectCard"

type Props = {}

export default function ProjectsSection({}: Props) {
  return (
    <div id="projects" className="">
      <p className="section__text__p1">Browse My Recent Projects</p>

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
          demolink={
            "https://drive.google.com/file/d/1FvUWne7x_qzdJ0CUrnyRXHhloCGuvlfc/view?usp=drive_link"
          }
        />
        <ProjectCard
          name={"Bank Queue Management Tool"}
          image={"/assets/queuepic.png"}
          githublink={"https://github.com/mukisaivan/queueingtool"}
          demolink={
            "https://docs.google.com/presentation/d/1V28yPU7rsEg96pW57ET6IBx3Iyg7yKeE/edit?usp=drive_link&ouid=112856887003994312357&rtpof=true&sd=true"
          }
        />
        <ProjectCard
          name={"WhatsApp Clone App"}
          image={"/assets/whatsappclone.png"}
          githublink={"https://github.com/mukisaivan/whatsappclone1"}
          demolink={
            "https://drive.google.com/file/d/1q3hMq5mafjL0qfKI8Vj_ZDWdlzdVFKbI/view?usp=drive_link"
          }
        />
        <ProjectCard
          name={"Zion E-commerce Mobile App"}
          image={"/assets/ecommerceproj.png"}
          githublink={"https://github.com/mukisaivan/zion"}
          demolink={"https://github.com/mukisaivan/zion"}
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
