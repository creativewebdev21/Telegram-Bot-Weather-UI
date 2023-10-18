import axios from "axios"

export const getBotKey = async () => {
  try {
    const response = await axios.get("/api/bot/getKey")

    return response.data
  } catch (err) {
    return { err }
  }
}

export const restartBot = async (newKey: string, oldKey: string, newHandle: string) => {
  try {
    const response = await axios.post("/api/bot/relanuch", { newKey, oldKey, newHandle })

    return response.data
  } catch (err) {
    return { err }
  }
}
