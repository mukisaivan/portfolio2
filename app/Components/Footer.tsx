import React from "react"
import OverrallWrapper from "./OverrallWrapper"

type Props = {}

export default function Footer({}: Props) {
  return (
    <>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <p className=" text-center h-20 mt-4 md:mt-0">
        Copyright &#169; 2024 Mukisa Ivan. All Rights Reserved.
      </p>
    </>
  )
}
