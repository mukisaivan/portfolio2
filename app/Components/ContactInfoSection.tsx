import Link from "next/link"
import React from "react"

type Props = {}

export default function ContactInfoSection({}: Props) {
  return (
    <Link href="#contact" id="contact">
      <p className="section__text__p1">Get in Touch</p>

      <h1 className="title">Contact Me</h1>

      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          >
            {" "}
          </img>

          <p>
            <a href="mailto:mukisaivan340@gmail.com">mukisaivan340@gmail.com</a>
          </p>
        </div>

        <div className="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          >
            {" "}
          </img>

          <p>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </p>
        </div>
      </div>
    </Link>
  )
}
