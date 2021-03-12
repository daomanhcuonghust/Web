import express from 'express';
import {checkLogin, logout, createUser} from '../controllers';
import {validateLogin, validateSignup} from '../middlewares';

const router = express.Router();

router.post('/login', validateLogin, checkLogin);
router.post('/logout', logout);
router.post('/signup', validateSignup, createUser);

export default router;