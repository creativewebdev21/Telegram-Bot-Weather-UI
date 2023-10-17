import { Schema, model, models, Model, Document } from "mongoose"

interface AdminModel extends Document {
  username: string
  password: string
}

const AdminSchema = new Schema<AdminModel>({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
})

export default (models.Admin as Model<AdminModel>) || model("Admin", AdminSchema)
