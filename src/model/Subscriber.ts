import { Schema, model, models, Model, Document } from "mongoose"

interface SubscriberModel extends Document {
  userid: Number
  username: string
}

const SubscriberSchema = new Schema<SubscriberModel>({
  username: {
    type: String,
    // required: true,
  },
  userid: {
    type: Number,
    required: true,
  },
})

export default (models.Subscriber as Model<SubscriberModel>) ||
  model("Subscriber", SubscriberSchema)
