import User from "../model/UserModel"

const start = (bot: any) => {
  bot.start(async (ctx: any) => {
    const userId = ctx.from.id
    const username = ctx.from.username
    const user = new User({
      username: username,
      userid: userId,
    })
    try {
      await user.save()
      ctx.reply(
        "Welcome to the WEATHER UPDATE bot!\nThis is a publicly available bot made by Henry to get the weather information of a particular city of your choice... \n\n\nTap /help - To Get help with commands\n\nMade with ❤️ by Henry Ziad",
      )
    } catch (err: any) {
      throw new Error(err)
    }
  })
}

export default start
