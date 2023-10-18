import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useAdminProvider } from "providers/AdminProvider"
import Media from "../../shared/Media"
import Switch from "../../shared/Switch"
import { useTheme } from "../../providers/ThemeProvider"

const GoogleLoginButton = dynamic(() => import("../GoogleLoginButton"), {
  ssr: false,
})

const DesktopMenu = () => {
  const { bot } = useAdminProvider()

  const { onChangeThemeConfig, themeMode } = useTheme()

  const onToggle = () => {
    onChangeThemeConfig()
  }

  return (
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
              containerClasses="xl:w-[53px] xl:h-[53px]
                lg:w-[42.4px] lg:h-[42.4px]
                md:w-[31.8px] md:h-[31.8px]
                rounded-full overflow-hidden"
            />
            <p
              className="xl:text-[30px] lg:text-[24px] md:text-[18px]
              text-[#73B3C2]
              font-poppins_bold"
            >
              Weather <span className="text-[#B4DCE3]">Bot</span>
            </p>
          </div>
        </Link>
      </div>
      <button type="button" onClick={() => window.open("https://t.me/WeatherHenryBot", "_blank")}>
        <p
          className="md:text-[12px] lg:text-[16px] xl:text-[20px]
          text-white font-poppins_bold"
        >
          @{bot?.handle || "WeatherHenryBot"}
        </p>
      </button>
      <div className="flex gap-x-[30px] items-center">
        <GoogleLoginButton />
        <div className="flex justify-center gap-x-[20px] items-center">
          <p
            className="font-poppins_medium
            md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
            text-[white] capitalize"
          >
            Light
          </p>
          <Switch id="theme-selector" onClick={onToggle} value={themeMode === "dark"} />
          <p
            className="font-poppins_medium
            md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
            text-[white] capitalize"
          >
            Dark
          </p>
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu
