import express from 'express';
import {checkLogin,logout} from '../controllers';
import {validateLogin} from '../middlewares';

const router = express.Router();

router.post('/login', validateLogin, checkLogin);
router.post('/logout', logout);

export default router;