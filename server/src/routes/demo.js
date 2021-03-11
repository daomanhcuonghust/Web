import express from 'express';
import {getDemo, createDemo, checkLogin,logout} from '../controllers';
import {validateCreateDemo, validateLogin} from '../middlewares';

const router = express.Router();

router.get('/demos', getDemo);
router.post('/demos', validateCreateDemo, createDemo);

export default router;