import express from 'express';
import {getDemo, createDemo, checkLogin} from '../controllers';
import {validateCreateDemo} from '../middlewares';

const router = express.Router();

router.get('/demos', getDemo);
router.post('/demos', validateCreateDemo, createDemo);
router.post('/login', validateCreateDemo, checkLogin);

export default router;