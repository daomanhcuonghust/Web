import { handleAsync } from '../utils';
import { createLogin, signupInput } from '../validators';

export const validateLogin = handleAsync(async (req, res, next) => {
    await createLogin.validateAsync(req.body);
    next()
});

export const validateSignup = handleAsync(async (req, res, next) => {
    try {
        await signupInput.validateAsync(req.body);
        next();
    } catch (error) {
        res.status(400).json({
            status: "400",
            message: "validate fail"
        })
    }
})