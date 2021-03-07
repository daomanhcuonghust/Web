import {handleAsync} from '../utils';
import {DemoService} from '../services';
import cookieParser from 'cookie-parser';

export const getDemo = handleAsync(async(req, res) => {
    const demos = await DemoService.getAll();
    res.json({
        data: demos
    });
});

export const createDemo = handleAsync(async(req, res) => {
    const demo = await DemoService.create(req.body);
    res.json({
        data: demo
    });
})
export const checkLogin = handleAsync(async(req, res) => {
    const token = await DemoService.check(req.body);
    res.cookie(token);
    res.json('set cookie success');
})
