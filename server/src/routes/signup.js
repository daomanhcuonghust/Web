import express from 'express';
import {getDemo, createDemo} from '../controllers';
import {validateCreateDemo} from '../middlewares';
import {User} from '../models';
const router = express.Router();
router.get('/demos', getDemo);
router.post('/demos', validateCreateDemo, createDemo);
router.post('/signup', async (req, res) => {
    // Create a new user
    console.log(req.body);
    try {
        const user = new User(req.body)
        //await user.save()
        res.json(await user.save());
        //const token = await user.generateAuthToken()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

export default router;