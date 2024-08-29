import AboutSection from "./Components/AboutSection"
import ContactInfoSection from "./Components/ContactInfoSection"
import ExperienceSection from "./Components/ExperienceSection"
import OverrallWrapper from "./Components/OverrallWrapper"
import ProfileSection from "./Components/ProfileSection"
import ProjectsSection from "./Components/ProjectsSection"

export default function Home() {
  return (
    <div>
      <ProfileSection />
      <AboutSection />
      <ExperienceSection />
      <div className=" m-2">
        <ProjectsSection />
      </div>
      <ContactInfoSection />
    </div>
  )
}
