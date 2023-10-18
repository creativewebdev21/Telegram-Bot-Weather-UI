import React from "react"
import { useAdminProvider } from "../../../../providers/AdminProvider"

const SearchInput = () => {
  const { filterKey, setFilterKey } = useAdminProvider()
  return (
    <input
      value={filterKey}
      onChange={(e) => setFilterKey(e.target.value)}
      className="rounded-full
        placeholder:text-[gray]
        font-poppins
        w-[250px] h-[45px]"
      placeholder="Search By Telegram ID"
    />
  )
}

export default SearchInput
