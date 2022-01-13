import {handleAsync} from '../utils';
import {UserService} from '../services';

export const getUSer = handleAsync(async(req, res) => {
    const users = await UserService.getAll();
    res.json({
        data: users
    });
});

export const createUser = handleAsync(async(req, res) => {
    const user = await UserService.create(req.body);
    res.json({
        data: user
    });
})
