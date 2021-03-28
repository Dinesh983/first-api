const { model, Schema } = require("mongoose");


const TodoModel = model('Todos', new Schema({
    message: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    }
}));

module.exports = {
    TodoModel
}

