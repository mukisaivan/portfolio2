"use client"

import Image from "next/image"
import React from "react"

type Props = {}

export default function AboutSection({}: Props) {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>

      <h1 className="title mb-4">About Me</h1>

      <div className="flex gap-6  p-6">
        <div className="">
          <Image
            width={1000}
            height={200}
            src="/assets/cool.jpg"
            alt="Profile picture"
            className="about-pic"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="mr-3 justify-center items-center flex gap-4 mb-2">
            <div className="items-center flex justify-center flex-col p-5 border rounded-xl border-black min-h-[350px] md:min-h-[200px] lg:max-w-[400px]">
              <Image
                height={50}
                width={50}
                src="/assets/experience.png"
                alt="Experience icon"
                className="icon"
              />

              <h3>Experience</h3>

              <p className=" flex text-center">
                2 years Full Stack Mobile Development, Web Development & Machine
                Learning / AI
              </p>
            </div>

            <div className=" items-center flex justify-center flex-col p-5 border rounded-xl border-black min-h-[350px] md:min-h-[200px] lg:max-w-[400px]">
              <Image
                height={50}
                width={50}
                src="/assets/education.png"
                alt="Education icon"
                className="icon"
              />

              <h3>Education</h3>

              <p className=" flex text-center">
                Physics, Economics, Mathematics B.Sc. Computer Science
              </p>
            </div>
          </div>

          <div className="md:text-center  text-start mx-3 p-5">
            <p>
              Skilled Flutter and Firebase developer with 3 years of experience
              in building efficient, scalable, and user-friendly mobile
              applications. Proven ability to deliver high-quality software on
              time and within budget. Strong background in mobile app
              development, UI/UX design, and Firebase integration. Committed to
              staying up-to-date with the latest industry trends and
              technologies.
            </p>
          </div>
        </div>
      </div>

      <Image
        height={50}
        width={50}
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow cursor-pointer"
        onClick={() => (window.location.href = "./#experience")}
      />
    </section>
  )
}
