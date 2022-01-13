import { handleAsync } from '../utils';
import { createLogin, signupInput,signupInputStaff } from '../validators';

export const validateLogin = handleAsync(async (req, res, next) => {
    await createLogin.validateAsync(req.body);
    next()
});

export const validateSignup = handleAsync(async (req, res, next) => {
    console.log(req.body)

    try {
        await signupInput.validateAsync(req.body);
        next();
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "400",
            message: "validate fail"
        })
    }
})

export const validateSignupStaff = handleAsync(async (req, res, next) => {
    console.log(req.body)

    try {
        await signupInputStaff.validateAsync(req.body);
        next();
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "400",
            message: "validate fail"
        })
    }
})