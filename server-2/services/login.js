import {Demo, User} from '../models';
import bcrypt from 'bcrypt';


export const checklogin = async (data) => {
    try {
        const user = await User.findOne({ email: data.email})
        if (!user) throw new Error()
        const isMatch = await user.isValidPassword(data.password)
        if (!isMatch) throw new Error()
        return data
    } catch (error) {
        if (error) return 'Error'
    }
}