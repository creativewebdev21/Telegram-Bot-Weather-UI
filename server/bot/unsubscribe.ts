import User from "../model/UserModel"

const unsubscribe = (bot: any) => {
  bot.command("unsubscribe", async (ctx: any) => {
    const userid = ctx.from.id

    const user = await User.findOneAndUpdate({ userid }, { subscribed: false })

    if (!user) {
      ctx.reply(
        "You have not subscribed to get Weather Updates!\nUse /subscribe to subscribe to the bot.",
      )
      return
    }

    ctx.reply("You have unsubscribed!!!")
  })
}

export default unsubscribe
