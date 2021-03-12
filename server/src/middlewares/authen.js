import {handleAsync} from '../utils';
import {createLogin, signupInput} from '../validators';

export const validateLogin = handleAsync(async(req, res, next) => {
    await createLogin.validateAsync(req.body);
    next()
});

export const validateSignup = handleAsync(async(req, res, next) => {
    await signupInput.validateAsync(req.body);
    next();
})