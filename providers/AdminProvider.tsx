import React, { useContext, createContext, useCallback, useMemo, useEffect, useState } from "react"
import getTelegramUsers from "../lib/getTelegramUsers"
import { getBotKey } from "../lib/weatherBot"

const AdminContext = createContext<any>(null)

export const AdminProvider = ({ children }: any) => {
  const [bot, setBot] = useState<any>(null)
  const [telegramUsers, setTelegramUsers] = useState<any>(null)
  const [filterKey, setFilterKey] = useState("")
  const [filterUsers, setFilterUsers] = useState<any>(null)
  const [paginatedUser, setPaginatedUsers] = useState<any>(null)

  const [pageCount, setPageCount] = useState(0)
  const [pageSize, setPageSize] = useState(5)
  const [pageIndex, setPageIndex] = useState(0)

  const canPreviousPage = useMemo(() => {
    return pageIndex
  }, [pageIndex])

  const canNextPage = useMemo(() => {
    return pageIndex < pageCount - 1
  }, [pageIndex, pageCount])

  const gotoPage = (index: number) => setPageIndex(index)
  const nextPage = () => {
    if (canNextPage) setPageIndex(pageIndex + 1)
  }
  const previousPage = () => {
    if (canPreviousPage) setPageIndex(pageIndex - 1)
  }

  const fetchBotData = useCallback(async () => {
    const response: any = await getBotKey()

    if (!response.err) setBot(response)
  }, [])

  const fetchTelegramUsers = useCallback(async () => {
    try {
      const response = await getTelegramUsers()
      setTelegramUsers(response)
      setFilterUsers(response)
    } catch (err) {}
  }, [])

  useEffect(() => {
    fetchBotData()
  }, [fetchBotData])

  useEffect(() => {
    if (filterUsers) {
      if (!canNextPage) {
        setPaginatedUsers(filterUsers.slice(pageIndex * pageSize, filterUsers.length))
        return
      }

      setPaginatedUsers(filterUsers.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize))
    }
  }, [canNextPage, pageSize])

  useEffect(() => {
    if (filterUsers) {
      setPageCount(parseInt(Number(filterUsers.length / pageSize + 1).toFixed(0)))
      setPaginatedUsers(filterUsers.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize))
    }
  }, [filterUsers])

  useEffect(() => {
    setPageIndex(0)
  }, [pageSize])

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
      canPreviousPage,
      canNextPage,
      filterUsers,
      fetchTelegramUsers,
      filterKey,
      setFilterKey,
      pageSize,
      setPageSize,
      pageCount,
      pageIndex,
      gotoPage,
      paginatedUser,
      nextPage,
      previousPage,
      bot,
      fetchBotData,
    }),
    [
      canPreviousPage,
      canNextPage,
      fetchTelegramUsers,
      filterKey,
      setFilterKey,
      filterUsers,
      pageSize,
      setPageSize,
      pageCount,
      pageIndex,
      gotoPage,
      paginatedUser,
      nextPage,
      previousPage,
      bot,
      fetchBotData,
    ],
  )

  return <AdminContext.Provider value={provider}>{children}</AdminContext.Provider>
}

export const useAdminProvider = () => useContext(AdminContext)
