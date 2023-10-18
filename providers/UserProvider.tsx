import React, { useMemo, createContext, useEffect } from "react"
import { useLocalStorage } from "usehooks-ts"
import getUserData from "../lib/getUserData"
import { useRouter } from "next/router"

interface Props {
  children: React.ReactNode
}

const UserContext = createContext<any>(null)

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [credentialToken, setCredentialToken] = useLocalStorage<any>("credentialToken", "")
  const [userData, setUserData] = useLocalStorage<any>("userData", "")
  const router = useRouter()

  useEffect(() => {
    if (!credentialToken && !router.pathname.includes("/home")) router.push("/")
    if (credentialToken && router.pathname.includes("/home")) router.push("/admin")
  }, [credentialToken])

  useEffect(() => {
    if (credentialToken && !userData) {
      const init = async () => {
        const data = await getUserData(credentialToken)
        setUserData(data)
      }
      init()
    }
  }, [credentialToken])

  const value = useMemo(
    () => ({ credentialToken, setCredentialToken, userData, setUserData }),
    [credentialToken, setCredentialToken, userData, setUserData],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserCredential = () => React.useContext(UserContext)
