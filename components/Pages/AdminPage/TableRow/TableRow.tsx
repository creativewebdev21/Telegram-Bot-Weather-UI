import React from "react"
import Button from "shared/Button"
import { TelegramUser } from "../types"

const TableRow = ({ userid, username, time }: TelegramUser) => (
  <tr
    key={userid}
    className="text-center bg-white hover:bg-blue-300
    border-b-[2px] border-black"
  >
    <td
      className="text-[8px] xs:text-[11px] md:text-[16px]
          border-r-2 border-black"
    >
      {userid}
    </td>
    <td
      className="text-[8px] xs:text-[11px] md:text-[16px]
         border-r-2 border-black"
    >
      {username}
    </td>
    <td
      className="text-[8px] xs:text-[11px] md:text-[16px]
       border-r-2 border-black"
    >
      {time}
    </td>
    <td className="flex gap-x-[10px] justify-center py-3">
      <Button
        id={`${userid}_block_btn`}
        className="border border-[red] text-[red]
          w-[100px] h-[40px]
          rounded-full"
        pulseColor="red"
      >
        Block
      </Button>
      <Button
        id={`${userid}_block_btn`}
        className="border border-[red] text-[red]
          w-[100px] h-[40px]
          rounded-full"
        pulseColor="red"
      >
        Delete
      </Button>
    </td>
  </tr>
)

export default TableRow
