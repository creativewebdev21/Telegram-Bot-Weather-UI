import React, { useContext, createContext, useCallback, useMemo, useEffect, useState } from "react"
import getTelegramUsers from "../lib/getTelegramUsers"

const AdminContext = createContext<any>(null)

export const AdminProvider = ({ children }: any) => {
  const [telegramUsers, setTelegramUsers] = useState<any>(null)
  const [filterKey, setFilterKey] = useState("")

  const fetchTelegramUsers = useCallback(async () => {
    try {
      const response = await getTelegramUsers()
      setFilterKey("")
      setTelegramUsers(response)
    } catch (err) {}
  }, [])

  useEffect(() => {
    if (telegramUsers) {
      const filterTemp = telegramUsers?.filter((user: any) => user.username.toLowerCase().search(filterKey.toLowerCase()) >= 0)
      setTelegramUsers(filterTemp)
    }
  }, [filterKey])

  useEffect(() => {
    fetchTelegramUsers()
  }, [fetchTelegramUsers])

  const provider = useMemo(
    () => ({
      telegramUsers,
      fetchTelegramUsers,
      filterKey,
      setFilterKey
    }),
    [telegramUsers, fetchTelegramUsers, filterKey, setFilterKey],
  )

  return <AdminContext.Provider value={provider}>{children}</AdminContext.Provider>
}

export const useAdminProvider = () => useContext(AdminContext)
