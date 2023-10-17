import { Schema, model, models, Model, Document } from "mongoose"

interface UserModel extends Document {
  username: string
  userid: number
  time: Date
}

const UserSchema = new Schema<UserModel>({
  username: {
    type: String,
    // required: true,
  },
  userid: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
})

export default (models.User as Model<UserModel>) || model("User", UserSchema)
