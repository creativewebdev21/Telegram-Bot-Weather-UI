import { Schema, model, models, Model, Document } from "mongoose"

interface AdminModel extends Document {
  email: string
  email_verified: Boolean,
  family_name: string
  given_name: string
  locale: string
  name: string
  picture: string
  sub: number
}

const AdminSchema = new Schema<AdminModel>({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  email_verified: {
    type: Boolean,
  },
  family_name: {
    type: String,
  },
  given_name: {
    type: String
  },
  locale: {
    type: String
  },
  name: {
    type: String
  },
  picture: {
    type: String
  },
  sub: {
    type: Number
  }
})

export default (models.Admin as Model<AdminModel>) || model("Admin", AdminSchema)
