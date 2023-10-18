import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import Header from "../Header"

function BaseLayout({ children }: ILayout) {
  return (
    <div
      className="w-screen min-h-screen
      relative
      flex flex-col items-center
      bg-white
      overflow-x-hidden"
    >
      <Header />
      <SeoHead
        title="Weather Telegram Bot"
        description="This is Telegram Bot Test Assignment"
        image="/images/seo_logo.png"
      />
      <div className="w-full">{children}</div>
    </div>
  )
}

export default BaseLayout
