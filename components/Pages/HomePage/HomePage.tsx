import Layout from "../../Layout"
import Button from "../../../shared/Button"

const HomePage = () => (
  <Layout type="base">
    <div
      className="w-screen h-screen
                  bg-[url('/images/Home/d_weather_bg.jpg')]
                  dark:bg-[url('/images/Home/d_weather_dark_bg.jpg')]
                  bg-cover
                  flex items-center justify-center
                  flex-col"
    >
      <p
        className="font-poppins_bold
            xl:text-[64px] lg:text-[51.2px] md:text-[38.4px] text-[25px]
            text-white
            pb-[30px]"
        data-aos="fade-up"
      >
        Weather Telegram Bot
      </p>
      <Button
        id="get_started_btn"
        className="md:h-[50px] md:w-[220px]
                  h-[40px] w-[180px]
                  font-poppins_semibold
                  bg-[#54B3C3] text-[white]
                  text-[14px] md:text-[18px]
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
