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
        text-[10px] md:text-[16px]
        md:w-[250px] md:h-[45px]
        w-[180px] h-[30px]"
      placeholder="Search By Telegram ID"
    />
  )
}

export default SearchInput
