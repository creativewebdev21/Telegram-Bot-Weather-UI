import Layout from "../../Layout"
import Table from "./Table"
import BotSetting from "./BotSetting"

const AdminPage = () => (
  <Layout type="base">
    <div
      className="w-screen min-h-screen
                  pt-[100px]
                  bg-[url('/images/Home/d_weather_bg.jpg')]
                  dark:bg-[url('/images/Home/d_weather_dark_bg.jpg')]
                  bg-cover
                  flex items-center justify-center
                  flex-col"
    >
      <BotSetting />
      <Table />
    </div>
  </Layout>
)

export default AdminPage
