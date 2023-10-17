import axios from "axios"

const addAdminData = async (userData: any) => {
  try {
    const response = await axios.post("/api/admin/add", { ...userData })

    return response
  } catch (err) {
    return { err }
  }
}

export default addAdminData
