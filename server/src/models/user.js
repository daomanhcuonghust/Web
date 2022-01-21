import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
const UserSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 50
    },
    firstName: {
        type: String,
        required: true,
        validate: {
            validator: function () {
                return /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/
            }, required: [true, 'vui long nhap lai']
        }
    },
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: function () {
                return /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/
            }, required: [true, 'vui long nhap lai']
        }
    },
    email: {
        type: String,
        required: false,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: 'thatbai ' })
            }
        }
    },
    is_vip: {
        type: Boolean,
        required: true,
        default: false,

    },
    id_vip_transition: {
        type: String,
        required: false
    }  

});
UserSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

UserSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error()
    }
};

export const User = mongoose.model('User', UserSchema);