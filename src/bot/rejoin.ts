import User from "../model/UserModel"

const rejoin = (bot: any) => {
  bot.command("rejoin", async (ctx: any) => {
    const userid = ctx.from.id
    const username = ctx.from.username

    let user = await User.findOne({ userid }).lean()

    if (user) {
      ctx.reply("You have already joined!!!")
      return
    }

    const newUser = new User({
      username,
      userid,
    })

    await newUser.save()

    ctx.reply(
      "You have subscribed to weather updates! \nYou can access weather uodates using /weather command.",
    )
  })
}

export default rejoin
