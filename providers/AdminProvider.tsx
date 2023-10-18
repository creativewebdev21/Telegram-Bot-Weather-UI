import React, { useContext, createContext, useCallback, useMemo, useEffect, useState } from "react"
import getTelegramUsers from "../lib/getTelegramUsers"

const AdminContext = createContext<any>(null)

export const AdminProvider = ({ children }: any) => {
  const [telegramUsers, setTelegramUsers] = useState<any>(null)
  const [filterKey, setFilterKey] = useState("")
  const [filterUsers, setFilterUsers] = useState<any>(null)

  const fetchTelegramUsers = useCallback(async () => {
    try {
      const response = await getTelegramUsers()
      setTelegramUsers(response)
      setFilterUsers(response)
    } catch (err) {}
  }, [])

  useEffect(() => {
    if (telegramUsers) {
      const filterTemp = telegramUsers?.filter(
        (user: any) => user.username.toLowerCase().search(filterKey.toLowerCase()) >= 0,
      )
      setFilterUsers(filterTemp)
    }
  }, [filterKey])

  useEffect(() => {
    fetchTelegramUsers()
  }, [fetchTelegramUsers])

  const provider = useMemo(
    () => ({
      filterUsers,
      fetchTelegramUsers,
      filterKey,
      setFilterKey,
    }),
    [fetchTelegramUsers, filterKey, setFilterKey, filterUsers],
  )

  return <AdminContext.Provider value={provider}>{children}</AdminContext.Provider>
}

export const useAdminProvider = () => useContext(AdminContext)
