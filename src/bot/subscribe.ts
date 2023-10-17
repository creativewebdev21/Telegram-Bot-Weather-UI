import Subscriber from "../model/Subscriber"

const subscribe = (bot: any) => {
  bot.command("subscribe", async (ctx: any) => {
    // Handle subscription logic here
    const userId = ctx.from.id
    const username = ctx.from.username

    let subscriber = await Subscriber.findOne({ userid: userId })

    if (subscriber) {
      ctx.reply("You have already subscribed to weather updates!")
      return
    }

    subscriber = new Subscriber({
      username: username,
      userid: userId,
    })

    await subscriber.save()

    ctx.reply(
      "You have subscribed to weather updates! \nYou can access weather uodates using /weather command.",
    )
  })
}

export default subscribe
