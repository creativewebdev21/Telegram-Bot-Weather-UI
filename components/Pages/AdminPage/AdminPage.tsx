import { useAdminProvider } from "providers/AdminProvider"
import Layout from "../../Layout"
import SkeletonTableBody from "./SkeletonTableBody"
import TableRow from "./TableRow"
import TableHead from "./TableHead"
import { TelegramUser } from "./types"

const AdminPage = () => {
  const { telegramUsers } = useAdminProvider()

  return (
    <Layout type="base">
      <div
        className="w-screen h-screen
                  bg-[url('/images/Home/d_weather_bg.jpg')]
                  bg-cover
                  flex items-center justify-center
                  flex-col"
      >
        <table
          className="w-[80%] font-poppins bg-white
        border-black border-[2px]"
        >
          <thead className="border-b-[2px] border-black border-solid">
            <tr className="text-black">
              <TableHead className="border-r-[2px] border-black">User ID</TableHead>
              <TableHead className="border-r-[2px] border-black">User Name</TableHead>
              <TableHead className="border-r-[2px] border-black">Join At</TableHead>
              <TableHead>Action</TableHead>
            </tr>
          </thead>
          {telegramUsers ? (
            <tbody>
              {telegramUsers.length ? (
                telegramUsers.map((user: TelegramUser) => (
                  <TableRow
                    key={user.userid}
                    userid={user.userid}
                    username={user.username}
                    time={user.time}
                  />
                ))
              ) : (
                <tr className="text-black text-center">
                  <td colSpan={4} className="p-4">
                    No Telegram Users
                  </td>
                </tr>
              )}
            </tbody>
          ) : (
            <SkeletonTableBody />
          )}
        </table>
      </div>
    </Layout>
  )
}

export default AdminPage
