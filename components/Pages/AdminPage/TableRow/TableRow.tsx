import React from "react"
import Button from "shared/Button"
import { useAdminProvider } from "providers/AdminProvider"
import swal from "sweetalert"
import { TelegramUser } from "../types"
import { blockUser, unblockUser, deleteUser } from "../../../../lib/telegramUser"

const TableRow = ({ user }: { user: TelegramUser }) => {
  const { fetchTelegramUsers } = useAdminProvider()

  const updateBlockData = async () => {
    if (user.blocked) await unblockUser(user.userid)
    else await blockUser(user.userid)

    fetchTelegramUsers()
  }

  const deleteUserData = async () => {
    if (
      !(await swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this user?",
        icon: "warning",
        buttons: ["No, I am not sure!", "Yes, I am sure!"],
      }))
    )
      return

    await deleteUser(user.userid)
    fetchTelegramUsers()
  }

  return (
    <tr
      key={user.userid}
      className="text-center bg-white hover:bg-blue-300
      border-b-[2px] border-black 
      text-[8px] xs:text-[11px]
      md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]"
    >
      <td className="border-r-2 border-black px-[5px]">{user.userid}</td>
      <td className="border-r-2 border-black px-[5px]">{user.username}</td>
      <td className="border-r-2 border-black px-[5px]">{user.time}</td>
      <td
        className="flex gap-x-[10px] gap-y-[5px] justify-center
      py-[5px] md:py-3 px-[5px]
      flex-col items-center md:flex-row"
      >
        <Button
          id={`${user.userid}_block_btn`}
          className={`border-[1px] 
          md:w-[100px] md:h-[40px]
          w-[50px] h-[20px]
          rounded-full ${
            user.blocked ? "border-[green] !text-[green]" : "border-[red] !text-[red]"
          }`}
          pulseColor={user.blocked ? "green" : "red"}
          onClick={updateBlockData}
        >
          {user.blocked ? "Unblock" : "Block"}
        </Button>
        <Button
          id={`${user.userid}_block_btn`}
          className="border border-[red] !text-[red]
            md:w-[100px] md:h-[40px]
            w-[50px] h-[20px]
            rounded-full"
          pulseColor="red"
          onClick={deleteUserData}
        >
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default TableRow
