import React from "react"
import dynamic from "next/dynamic"
import Media from "../../shared/Media"
import Popover from "../../shared/Popover"
import Switch from "../../shared/Switch"
import { useTheme } from "../../providers/ThemeProvider"

const GoogleLoginButton = dynamic(() => import("../GoogleLoginButton"), {
  ssr: false,
})

const MenuList = () => {
  const { onChangeThemeConfig, themeMode } = useTheme()

  const onToggle = () => {
    onChangeThemeConfig()
  }

  return (
    <Popover id="mobile_menu_list" className="right-[-15px]">
      {() => (
        <Media
          type="image"
          link="/images/Header/menu_icon.png"
          blurLink="/images/Header/menu_icon.png"
          containerClasses="w-[32px] h-[32px]"
        />
      )}
      {() => (
        <div
          className="min-w-[200px]
            rounded-[10px]
            shadow-[0px_2px_2px_2px_#D9D9D9]
            bg-white text-black
            p-[20px]
            font-poppins_semibold
            flex flex-col gap-y-[10px]
            cursor-pointer"
        >
          <button
            type="button"
            className="text-left"
            onClick={() => window.open("https://t.me/WeatherHenryBot", "_blank")}
          >
            <p>@WeatherBot</p>
          </button>
          <GoogleLoginButton />
          <div className="flex gap-x-[10px] text-[12px] items-center">
            <p>Light</p>
            <Switch id="theme-selector" onClick={onToggle} value={themeMode === "dark"} />
            <p>Dark</p>
          </div>
        </div>
      )}
    </Popover>
  )
}

export default MenuList
