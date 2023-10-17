import Layout from "../../Layout"
import Button from "../../../shared/Button"

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
        data-aos="fade-up"
      >
        Weather Telegram Bot
      </p>
      <Button
        id="get_started_btn"
        className="h-[50px] w-[220px] font-poppins_semibold
                    bg-[#54B3C3] text-[white] text-[18px]
                    !border-[1px] !border-white"
        onClick={() => window.open("https://t.me/WeatherHenryBot", "_blank")}
        data-aos="fade-up"
      >
        Get Started
      </Button>
    </div>
  </Layout>
)

export default HomePage
