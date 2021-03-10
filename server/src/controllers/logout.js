import {handleAsync} from '../utils';
import {LogoutService} from '../services';
import cookieParser from 'cookie-parser';

export const logout = handleAsync(async(req, res) => {
    const demos = await LogoutService.create(req.cookies.token);
    res.json('Logout success')
});
