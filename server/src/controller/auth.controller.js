import { saveUser } from "../dao/auth.dao.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createUser = wrapAsync(async (req, res, next) => {
    console.log("reqqqq ffff");

    const { name, email, password} = req.body;
    console.log("reqqqq");
    
    await saveUser(name, email, password);
    res.staus(200).json({message: "user created successfully"});
});