import React from "react"
import DesktopMenu from "../DesktopMenu"
import MobileMenu from "../MobileMenu"

const Header = () => (
  <nav
    className="fixed top-0 z-50 w-screen
              flex justify-center
              bg-[#0000001f]"
    id="header_nav_bar"
  >
    <div className="hidden md:flex w-full justify-center">
      <DesktopMenu />
    </div>
    <div className="block md:hidden w-full">
      <MobileMenu />
    </div>
  </nav>
)

export default Header
