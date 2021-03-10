import express from 'express';
import {getDemo, createDemo, checkLogin,logout} from '../controllers';
import {validateCreateDemo} from '../middlewares';

const router = express.Router();

router.get('/demos', getDemo);
router.post('/demos', validateCreateDemo, createDemo);
router.post('/login', validateCreateDemo, checkLogin);
router.post('/logout', logout);

export default router;