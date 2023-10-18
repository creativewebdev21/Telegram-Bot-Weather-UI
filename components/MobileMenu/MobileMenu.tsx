import React from "react"
import Link from "next/link"
import Media from "../../shared/Media"
import MenuList from "./MenuList"

const MobileMenu = () => (
  <div
    className="w-full flex justify-between items-center
            py-[15px] px-[20px] cursor-pointer"
  >
    <Link href="/">
      <div className="flex items-center gap-x-[10px] cursor-pointer">
        <Media
          type="image"
          link="/images/Header/logo.jpg"
          blurLink="/images/Header/logo.jpg"
          containerClasses="w-[40px] h-[40px]
                rounded-full overflow-hidden"
        />
        <p
          className="text-[24px]
              text-[#73B3C2]
              font-poppins_bold"
        >
          Weather <span className="text-[#B4DCE3]">Bot</span>
        </p>
      </div>
    </Link>
    <MenuList />
  </div>
)

export default MobileMenu
