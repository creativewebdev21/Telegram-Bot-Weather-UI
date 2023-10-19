import React, { useState } from "react"
import Form from "../../../../shared/Form"
import { inputValidation } from "./inputValidation"
import Button from "../../../../shared/Button"
import { useAdminProvider } from "../../../../providers/AdminProvider"
import Input from "../../../../shared/Input"
import { restartBot } from "../../../../lib/weatherBot"

const BotForm = () => {
  const [newBotKey, setNewBotKey] = useState("")
  const [newHandle, setNewHandle] = useState("")

  const { bot, fetchBotData } = useAdminProvider()

  const launch = async (values: any) => {
    await restartBot(values.newKey, bot.key, values.newHandle)

    await fetchBotData()
  }

  return (
    <Form
      onSubmit={async ({ ...values }) => {
        launch(values)
      }}
      validationSchema={inputValidation}
      className="w-full flex flex-col gap-y-[10px]"
    >
      <div className="flex items-center gap-x-[10px]">
        <p
          className="font-poppins 
        xl:text-[16px] lg:text-[12.8px] md:text-[9.6px] text-[9px]"
        >
          Handle:
        </p>
        <Input
          value={newHandle}
          onChange={(e) => setNewHandle(e.target.value)}
          className="placeholder:text-[gray]
                            rounded-[5px]
                            font-poppins
                            text-[10px] md:text-[16px]
                            md:w-[300px] md:h-[45px]
                            w-[180px] h-[30px]"
          placeholder={`${bot?.handle || "Ex. WeatherHenryBot"}`}
          id="newHandle"
          name="newHandle"
          hookToForm
        />
      </div>
      <div className="flex items-center gap-x-[10px]">
        <p
          className="font-poppins
        xl:text-[16px] lg:text-[12.8px] md:text-[9.6px] text-[9px]"
        >
          BotKey:
        </p>
        <Input
          value={newBotKey}
          onChange={(e) => setNewBotKey(e.target.value)}
          className="placeholder:text-[gray]
                            rounded-[5px]
                            font-poppins
                            text-[10px] md:text-[16px]
                            md:w-[500px] md:h-[45px]
                            w-[180px] h-[30px]"
          placeholder={`${bot?.key || "Ex. 6576938381:AAG...VVK_NM"}`}
          id="newKey"
          name="newKey"
          hookToForm
        />
        <Button
          id="relaunc_bot"
          className="md:h-[50px] md:w-[150px]
                        h-[30px] w-[150px]
                        font-poppins_semibold
                        bg-[#54B3C3] text-[white]
                        text-[12px] md:text-[18px]
                        !border-[1px] !border-white"
          type="submit"
        >
          {!bot?.key ? "Launch" : "Restart"}
        </Button>
      </div>
    </Form>
  )
}

export default BotForm
