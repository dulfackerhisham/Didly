import { User } from "../models/user.models.js" 

export const saveUser = async (name, email, password) => {
    try {
        console.log("req in dao");
        
        const newUser = new User({
            name,
            email,
            password,
        });
    
        await newUser.save();
    } catch (err) {
        throw new Error(err);
    }

};