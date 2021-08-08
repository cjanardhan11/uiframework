const User = require("../models/user.model");

exports.getUserData = async(req, res) => {
    try {
        const user = await User.find();
        console.log("user==>", user);
        res.json(user);
    } catch(error) {
        res.json({ message: error.message });
    };
};  