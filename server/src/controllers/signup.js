import {handleAsync} from '../utils';
import {UserService} from '../services';
import { JWT_SECRET } from "../configs";
import jwt from "jsonwebtoken";


export const getUSer = handleAsync(async(req, res) => {
    const users = await UserService.getAll();
    res.json({
        data: users
    });
});

export const createUser = handleAsync(async(req, res) => {
    const user = await UserService.create(req.body);
    const accessToken = jwt.sign(
        user._id,
        JWT_SECRET
      );
    res.json({
        data: user,
        accessToken:accessToken
    });
})
