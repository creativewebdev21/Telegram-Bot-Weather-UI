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
      className="xl:h-[50px] xl:w-[120px]
                lg:w-[96px] lg:h-[40px]
                md:w-[72px] md:h-[30px]
                w-[100px] h-[35px]
                font-poppins_semibold
                bg-[#54B3C3] text-[white]
                text-[13px] md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
                border-[1px] border-white"
      onClick={!credentialToken ? login : logout}
    >
      {credentialToken ? "Logout" : "Login"}
    </Button>
  )
}

export default GoogleLoginButton
