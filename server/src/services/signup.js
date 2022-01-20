import { User } from "../models"
export const getAll = async () => {
  return await User.find({})
}

export const create = async (data) => {
  const { phoneNumber, email, password, firstName, lastName } = data
  const user = new User({
    phoneNumber,
    email,
    password,
    firstName,
    lastName,
  })
  return await user.save()
}
