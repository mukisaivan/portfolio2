import React from "react"
import DeskTopNavBar from "./DeskTopNavBar"
import HambugerNavBar from "./HambugerNavBar"

type Props = {}

export default function NavBar({}: Props) {
  const bigNavBar = <DeskTopNavBar />
  const smallNavBar = <HambugerNavBar />

  return (
    <div>
      <div className=" hidden md:block">{bigNavBar}</div>
      <div className=" block  md:hidden">{smallNavBar}</div>
    </div>
  )
}
