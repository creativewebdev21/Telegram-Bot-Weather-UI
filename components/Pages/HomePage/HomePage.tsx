import Layout from "../../Layout"

const HomePage = () => (
  <Layout type="base">
    <div
      className="w-screen h-screen
            bg-[url('/images/Home/d_weather_bg.jpg')]
            bg-cover"
    >
      <p className="font-poppins">Weather Telegram Bot UI</p>
    </div>
  </Layout>
)

export default HomePage
