const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
    task: {
        type: String,
    },
    desc: {
        type: String,
    },
});

// const user = mongoose.model("User", userModel);
module.exports = mongoose.model("User", userModel);
// exports.module = user;