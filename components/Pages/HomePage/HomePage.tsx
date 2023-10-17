import Layout from "../../Layout"
import GoogleLoginButton from "../../GoogleLoginButton"

const HomePage = () => (
  <Layout type="base">
    <div
      className="w-screen h-screen
              bg-[url('/images/Home/d_weather_bg.jpg')]
              bg-cover
              flex items-center justify-center
              flex-col"
    >
      <p
        className="font-poppins_bold text-[64px]
        text-white"
      >
        Weather Telegram Bot
      </p>
      <GoogleLoginButton />
    </div>
  </Layout>
)

export default HomePage
