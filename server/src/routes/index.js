import express from 'express';
import {handleError} from '../middlewares';
import demoRouter from './demo';
import authenRouter from './authen';
import userRouter from './signup'
const router = express.Router();

router.use(demoRouter);
router.use(authenRouter);

router.use(handleError);

export {
    router
}