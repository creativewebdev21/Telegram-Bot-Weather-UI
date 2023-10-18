import { Schema, model, models, Model, Document } from "mongoose"

interface BotModel extends Document {
  key: string
}

const BotSchema = new Schema<BotModel>({
  key: {
    type: String,
    required: true,
  },
})

export default (models.Bot as Model<BotModel>) || model("Bot", BotSchema)
