import JoiBase from "joi"

const inputValidation = JoiBase.object({
  newKey: JoiBase.string().messages({
    "string.empty": `BotKey cannot be an empty field`,
  }),
  newHandle: JoiBase.string().messages({
    "string.empty": "Handle cannot be an empty field",
  }),
})

export { inputValidation }
