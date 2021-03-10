import {handleAsync} from '../utils';
import {LoginService} from '../services';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../configs';

export const checkLogin = handleAsync(async(req, res) => {
    const data = await LoginService.checklogin(req.body);
    res.cookie('token', jwt.sign({
        _id: data._id
    }, JWT_SECRET));
    res.json(data);
})
