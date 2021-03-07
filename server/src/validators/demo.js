import Joi from 'joi';

const email = Joi.string().alphanum().min(1).max(20).required();
const password = Joi.string().alphanum().min(1).max(20).required();

export const createDemoInput = Joi.object({
    email,
    password
});