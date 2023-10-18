import axios from "axios"

const getTelegramUsers = async () => {
  try {
    const response = await axios.get("/api/user/all")

    return response.data
  } catch (err) {
    return { err }
  }
}

export default getTelegramUsers
