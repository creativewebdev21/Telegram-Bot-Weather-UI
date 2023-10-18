import React from "react"
import useIsMobile from "../../hooks/useIsMobile"
import DesktopMenu from "../DesktopMenu"
import MobileMenu from "../MobileMenu"

const Header = () => {
  const isMobile = useIsMobile()

  return (
    <nav
      className="fixed top-0 z-50 w-screen
              flex justify-center
              bg-[#0000001f]"
      id="header_nav_bar"
    >
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </nav>
  )
}

export default Header
