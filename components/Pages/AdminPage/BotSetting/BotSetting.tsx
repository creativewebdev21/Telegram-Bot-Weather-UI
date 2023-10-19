import React from "react"
import BotForm from "./BotForm"

const BotSetting = () => (
  <div className="w-[90%] xl:w-[80%] flex justify-start pb-[10px]">
    <div
      className="w-fit py-[10px] px-[20px] md:px-[30px] bg-white
           shadow-[0px_2px_2px_2px_#D9D9D9]
           flex flex-col gap-y-[10px]"
    >
      <p className="font-poppins_semibold text-[20px]">Bot Setting</p>
      <BotForm />
    </div>
  </div>
)

export default BotSetting
