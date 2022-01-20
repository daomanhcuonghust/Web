import { Staff } from "../models"
export const getAll = async () => {
  return await Staff.find({})
}

export const create = async (data) => {
  const {
    staff_code,
    phoneNumber,
    email,
    password,
    firstName,
    lastName,
    role,
    salary,
  } = data
  const user = new Staff({
    staff_code,
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
