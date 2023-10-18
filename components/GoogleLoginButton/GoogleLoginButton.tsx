import React from "react"
import { useGoogleLogin, googleLogout } from "@react-oauth/google"
import { useUserCredential } from "providers/UserProvider"
import Button from "../../shared/Button"
import addAdminData from "../../lib/addAdminData"
import getUserData from "../../lib/getUserData"

const GoogleLoginButton = () => {
  const { setCredentialToken, credentialToken, setUserData } = useUserCredential()

  const onSuccess = async (tokenResponse: any) => {
    setCredentialToken(tokenResponse)
    const data = await getUserData(tokenResponse)
    await addAdminData(data)
  }

  const login = useGoogleLogin({
    onSuccess,
  })

  const logout = () => {
    googleLogout()
    setCredentialToken("")
    setUserData("")
  }

  return (
    <Button
      id="google_login_btn"
      className="h-[50px] w-[120px] font-poppins_semibold
                bg-[#54B3C3] text-[white] text-[18px]
                border-[1px] border-white"
      onClick={!credentialToken ? login : logout}
    >
      {credentialToken ? "Logout" : "Login"}
    </Button>
  )
}

export default GoogleLoginButton
