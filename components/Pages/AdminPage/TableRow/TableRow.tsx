import React from "react"
import Button from "shared/Button"
import { useAdminProvider } from "providers/AdminProvider"
import { TelegramUser } from "../types"
import {blockUser, unblockUser, deleteUser} from "../../../../lib/telegramUser"
import swal from 'sweetalert'

const TableRow = ({ user }: { user: TelegramUser }) => {
  const { fetchTelegramUsers } = useAdminProvider()

  const updateBlockData = async () => {
    if (user.blocked) await unblockUser(user.userid)
    else await blockUser(user.userid)

    fetchTelegramUsers()
  }

  const deleteUserData = async () => {
    if (!await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this user?",
      icon: "warning",
      buttons: [
          'No, I am not sure!',
          'Yes, I am sure!'
      ],
    })) return;
    
      await deleteUser(user.userid)
      fetchTelegramUsers()
  }

  return (
    <tr
      key={user.userid}
      className="text-center bg-white hover:bg-blue-300
      border-b-[2px] border-black"
    >
      <td
        className="text-[8px] xs:text-[11px] md:text-[16px]
            border-r-2 border-black"
      >
        {user.userid}
      </td>
      <td
        className="text-[8px] xs:text-[11px] md:text-[16px]
           border-r-2 border-black"
      >
        {user.username}
      </td>
      <td
        className="text-[8px] xs:text-[11px] md:text-[16px]
         border-r-2 border-black"
      >
        {user.time}
      </td>
      <td className="flex gap-x-[10px] justify-center py-3">
        <Button
          id={`${user.userid}_block_btn`}
          className={`border-[1px] 
          w-[100px] h-[40px]
          rounded-full ${user.blocked ? 'border-[green] !text-[green]' : 'border-[red] !text-[red]'}`}
          pulseColor={user.blocked ? 'green' : 'red'}
          onClick={updateBlockData}
        >
          {user.blocked ? 'Unblock' : 'Block'}
        </Button>
        <Button
          id={`${user.userid}_block_btn`}
          className="border border-[red] !text-[red]
            w-[100px] h-[40px]
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
