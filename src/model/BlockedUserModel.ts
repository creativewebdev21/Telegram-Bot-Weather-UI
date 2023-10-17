import { Schema, model, models, Model, Document } from "mongoose"

interface BlockedUserModel extends Document {
  userid: Number
  username: string
}

const BlockedUserSchema = new Schema<BlockedUserModel>({
  userid: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
  },
})

export default (models.BlockedUser as Model<BlockedUserModel>) ||
  model("BlockedUser", BlockedUserSchema)
