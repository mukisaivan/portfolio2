"use client"
import Image from "next/image"
import React from "react"

type Props = {}

export default function ProfileSection({}: Props) {
  return (
    <div>
      <section id="profile">
        <div className="section__pic-container">
          <Image
            width={400}
            height={600}
            src={"/assets/profilepic.jpg"}
            alt="Mukisa Ivan profile picture"
            className="profile-pic"
          />
        </div>

        <div className="section__text">
          <p className="section__text__p1">Hello, I&apos;m</p>

          <h1 className="title">Mukisa Ivan</h1>

          <p className=" text-nowrap">Software Developer & Data Scientist</p>

          <div className="btn-container p-5">
            <button
              className="btn btn-color-2"
              onClick={() => window.open("/assets/Mukisa_Ivan_CV.pdf")}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = "#contact")}
            >
              Contact Info
            </button>
          </div>

          <div id="socials-container">
            <Image
              height={80}
              width={40}
              src="/assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/mukisaivan/")
              }
            />

            <Image
              height={80}
              width={40}
              src="/assets/github.png"
              alt="My Github profile"
              className="icon"
              onClick={() =>
                (window.location.href = "https://github.com/mukisaivan/")
              }
            />

            <Image
              height={50}
              width={50}
              src="/assets/whatsapsvg.svg"
              alt="WhatsApp"
              className="icon"
              onClick={() =>
                (window.location.href =
                  "https://wa.me/+256701476555?text=hello")
              }
            />
          </div>
        </div>
      </section>
    </div>
  )
}
