import Joi from 'joi';

const email = Joi.string().min(1).max(20).required();
const password = Joi.string().min(1).max(20).required();
const firstName = Joi.string().min(1).max(20).required();
const lastName = Joi.string().min(1).max(20).required();

export const createLogin = Joi.object({
    email,
    password
});

export const signupInput = Joi.object({
    email,
    password,
    firstName,
    lastName
});