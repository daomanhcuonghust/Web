import { handleAsync } from '../utils';
import { createLogin, signupInput,signupInputStaff } from '../validators';
import jwt from 'jsonwebtoken'

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

export const signedIn=async (req, res,next) => {
    const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.error({ msg: 'UNAUTHORIZED' }, 401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.error({ msg: 'UNAUTHORIZED'}, 401);
    }

    req.user = user;
    next();
  });
}
