import React, { useMemo, createContext, useEffect } from "react"
import { useLocalStorage } from "usehooks-ts"
import getUserData from "../lib/getUserData"

interface Props {
  children: React.ReactNode
}

const UserContext = createContext<any>(null)

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [credentialToken, setCredentialToken] = useLocalStorage<any>("credentialToken", "")
  const [userData, setUserData] = useLocalStorage<any>("userData", "")

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
    () => ({ credentialToken, setCredentialToken, userData }),
    [credentialToken, setCredentialToken, userData],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserCredential = () => React.useContext(UserContext)
