import {handleAsync} from '../utils';
import {createLogin} from '../validators';

export const validateLogin = handleAsync(async(req, res, next) => {
    await createLogin.validateAsync(req.body);
    next()
});