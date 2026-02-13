const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// jwt generate garney token ko lagi function
const generateToken = (userId) => {
    return jwt.sign(
        {
            id : userId
        },

        process.env.JWT_SECRET,

        {
            process.env.JWT_EXPIRES_IN  
        }
    );
}


// Register

exports.register = async (req, res) => {
    try {
        const {email, password} = req.body;

        const userExists = await User.findOne({email });

        if(userExists){
            return res.status(400).json({message: "User pahillai xa !"});
        }
    }
}