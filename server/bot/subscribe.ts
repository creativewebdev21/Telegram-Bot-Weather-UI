import User from "../model/UserModel"

const subscribe = (bot: any) => {
  bot.command("subscribe", async (ctx: any) => {
    const userid = ctx.from.id

    let user = await User.findOne({ userid }).lean()

    if (!user) {
      ctx.reply("You have not registered!!!")
      return
    }

    if (user?.subscribed) {
      ctx.reply("You have already subscribed to weather updates!")
      return
    }

    await User.findOneAndUpdate({ userid }, { subscribed: true }).lean()

    ctx.reply(
      "You have subscribed to weather updates! \nYou can access weather uodates using /weather command.",
    )
  })
}

export default subscribe
