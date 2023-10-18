import React, { useContext, createContext, useCallback, useMemo, useEffect, useState } from "react"
import getTelegramUsers from "../lib/getTelegramUsers"

const AdminContext = createContext<any>(null)

export const AdminProvider = ({ children }: any) => {
  const [telegramUsers, setTelegramUsers] = useState(null)

  const fetchTelegramUsers = useCallback(async () => {
    try {
      const response = await getTelegramUsers()
      setTelegramUsers(response)
    } catch (err) {}
  }, [])

  useEffect(() => {
    fetchTelegramUsers()
  }, [fetchTelegramUsers])

  const provider = useMemo(
    () => ({
      telegramUsers,
      fetchTelegramUsers,
    }),
    [telegramUsers, fetchTelegramUsers],
  )

  return <AdminContext.Provider value={provider}>{children}</AdminContext.Provider>
}

export const useAdminProvider = () => useContext(AdminContext)
