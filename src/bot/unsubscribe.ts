import Subscriber from "../model/Subscriber"

const unsubscribe = (bot: any) => {
  bot.command("unsubscribe", async (ctx: any) => {
    const userid = ctx.from.id

    // Search for the user's ID in the database
    const subscriber = await Subscriber.findOne({ userid })

    if (!subscriber) {
      ctx.reply(
        "You have not subscribed to get Weather Updates!\nUse /subscribe to subscribe to the bot.",
      )
      return
    }

    await Subscriber.findOneAndDelete({ userid })
  })
}

export default unsubscribe
