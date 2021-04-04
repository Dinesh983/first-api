const { model, Schema } = require("mongoose");



const UserModel = model("Users", new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamp: true }));

module.exports = {
    UserModel
}
