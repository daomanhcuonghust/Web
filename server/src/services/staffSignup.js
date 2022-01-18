import { Staff } from "../models"
export const getAll = async () => {
  return await User.find({})
}

export const create = async (data) => {
  const { phoneNumber, email, password, firstName, lastName, role, salary } =
    data
  const user = new Staff({
    phoneNumber,
    email,
    password,
    firstName,
    lastName,
    role,
    salary,
  })
  return await user.save()
}
