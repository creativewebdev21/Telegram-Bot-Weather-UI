import Layout from "../../Layout"

const HomePage = () => (
  <Layout type="base">
    <div
      className="w-screen h-screen
            bg-[url('/images/Home/d_weather_bg.jpg')]
            bg-cover
            flex items-center justify-center"
    >
      <p
        className="font-poppins_bold text-[64px]
      text-white"
      >
        Weather Telegram Bot
      </p>
    </div>
  </Layout>
)

export default HomePage
