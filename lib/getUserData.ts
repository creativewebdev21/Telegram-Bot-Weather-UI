import axios from "axios"

const getUserData = async (credentialToken: any) => {
  try {
    const response = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${credentialToken.access_token}` },
    })

    return response.data
  } catch (err) {
    return null
  }
}

export default getUserData
