import express from 'express';
import {checkLogin, logout, createUser,checkLoginStaff,createStaff,
    CreateTicket,UserBuyTicket,
    updateTicket,
    deleteTicket
} from '../controllers';
import {validateLogin, validateSignup,validateSignupStaff} from '../middlewares';

const router = express.Router();

router.post('/login', validateLogin, checkLogin);
router.post('/login-staff', validateLogin, checkLoginStaff);
router.post('/logout', logout);
router.post('/signup', validateSignup, createUser);
router.post('/signup-staff', validateSignupStaff, createStaff);
router.post('/ticket',  CreateTicket);
router.patch('/ticket/:id',  updateTicket);
router.delete('/ticket/:id',  deleteTicket);


router.post('/user-buy-ticket',  UserBuyTicket);




export default router;