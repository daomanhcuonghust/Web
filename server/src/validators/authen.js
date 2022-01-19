import Joi from "joi"

const phoneNumber = Joi.string().min(10).max(11).required()
const email = Joi.string().min(1).max(50)
const password = Joi.string().min(1).max(20).required()
const firstName = Joi.string().min(1).max(20).required()
const lastName = Joi.string().min(1).max(20).required()
const role = Joi.number().required()
const salary = Joi.number().required()
const time_checkout = Joi.date().required()

export const createLogin = Joi.object({
  phoneNumber,
  password,
})

export const signupInput = Joi.object({
  phoneNumber,
  email,
  password,
  firstName,
  lastName,
})

export const signupInputStaff = Joi.object({
  phoneNumber,
  email,
  password,
  firstName,
  lastName,
  role,
  salary,
})

export const incomeInput = Joi.object({
  time_checkout,
})
