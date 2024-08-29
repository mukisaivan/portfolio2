"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {}

export default function ContactInfoSection({}: Props) {
  return (
    <div id="contact">
      <p className="section__text__p1">Get in Touch</p>

      <h1 className="title">Contact Me</h1>

      <div className="contact-info-upper-container flex gap-2">
        <div className="contact-info-container">
          <Image
            height={30}
            width={30}
            src="/assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:mukisaivan340@gmail.com">mukisaivan340@gmail.com</a>
          </p>
        </div>

        <div className="contact-info-container">
          <Image
            height={20}
            width={20}
            src="/assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <Link href="https://www.linkedin.com" legacyBehavior>
              <a>LinkedIn</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
