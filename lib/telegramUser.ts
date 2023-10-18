import axios from "axios"

export const blockUser = async (userid: number) => {
  try {
    await axios.post("/api/user/blocked", { userid })

    return true
  } catch (err) {
    return { err }
  }
}

export const unblockUser = async (userid: number) => {
    try {
      await axios.post("/api/user/unblocked", { userid })
  
      return true
    } catch (err) {
      return { err }
    }
}

export const deleteUser = async (userid: number) => {
    try {
        const config = {
            params: {userid}
        }

        await axios.delete("/api/user/deleted", config )
  
        return true
    } catch (err) {
      return { err }
    }
}

