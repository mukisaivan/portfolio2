import React from "react"

type Props = {}

export default function ProfileSection({}: Props) {
  return (
    <div>
      <section id="profile">
        <div className="section__pic-container">
          <img
            src="./assets/profilepic.jpg"
            alt="Mukisa Ivan profile picture"
            className="profile-pic"
          >
            {" "}
          </img>
        </div>

        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>

          <h1 className="title">Mukisa Ivan</h1>

          <p className="section__text__p2">
            SoftWare Developer & Data Scientist
          </p>

          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open("./assets/Mukisa_Ivan_CV.pdf")}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => {
                window.location.hash = "#contact"
              }}
            >
              Contact Info
            </button>
          </div>

          <div id="socials-container">
            <img
              src="./assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/mukisaivan/")
              }
            />

            <img
              src="./assets/github.png"
              alt="My Github profile"
              className="icon"
              onClick={() =>
                (window.location.href = "https://github.com/mukisaivan/")
              }
            />

            <img
              src="./assets/whatsapsvg.svg"
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
