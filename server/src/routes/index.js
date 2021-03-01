import express from 'express';
import {handleError} from '../middlewares';
import demoRouter from './demo';

const router = express.Router();

router.use(demoRouter);

router.use(handleError);

export {
    router
}