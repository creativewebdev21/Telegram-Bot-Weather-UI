import Link from "next/link"
import React from "react"
import GoogleLoginButton from "components/GoogleLoginButton"
import Media from "../../shared/Media"
import Switch from "../../shared/Switch"
import { useTheme } from "../../providers/ThemeProvider"

const Header = () => {
  const { onChangeThemeConfig, themeMode } = useTheme()

  const onToggle = () => {
    onChangeThemeConfig()
  }

  return (
    <nav
      className="fixed top-0 z-50 w-screen
              flex justify-center
              bg-[#0000001f]"
      id="header_nav_bar"
    >
      <div
        className="xl:max-w-[1280px] lg:max-w-[95%] md:max-w-[768px]
          w-full
          flex justify-between items-center
          font-poppins_medium
          py-[20px]"
      >
        <div
          className="flex items-center 
          xl:gap-x-[60px]
          lg:gap-x-[54px]
          md:gap-x-[36px]"
        >
          <Link href="/">
            <div className="flex items-center gap-x-[10px] cursor-pointer">
              <Media
                type="image"
                link="/images/Header/logo.jpg"
                blurLink="/images/Header/logo.jpg"
                containerClasses="w-[53px] h-[53px] rounded-full overflow-hidden"
              />
              <p
                className="text-[30px]
              text-[#73B3C2]
              font-poppins_bold"
              >
                Weather <span className="text-[#B4DCE3]">Bot</span>
              </p>
            </div>
          </Link>
        </div>
        <button type="button" onClick={() => window.open("https://t.me/WeatherHenryBot", "_blank")}>
          <p className="text-[18px] text-white">Bot Handle</p>
        </button>
        <div className="flex gap-x-[30px] items-center">
          <GoogleLoginButton />
          <div className="flex justify-center gap-x-[20px]">
            <p className="font-poppins_medium text-[18px] text-[white] capitalize">Dark</p>
            <Switch id="theme-selector" onClick={onToggle} value={themeMode === "dark"} />
            <p className="font-poppins_medium text-[18px] text-[white] capitalize">Light</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
