import Joi from 'joi';

const email = Joi.string().min(1).max(20).required();
const password = Joi.string().min(1).max(20).required();

export const createLogin = Joi.object({
    email,
    password
});