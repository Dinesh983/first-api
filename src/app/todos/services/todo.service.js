const { TodoModel } = require("../models/todo.model")
const bson = require("bson");


class TodoService {
    async create(todo) {
        return new TodoModel(todo)
        .save().then(data => data)
        .catch(err => Promise.reject(err))
    }

    async update(id, todo) {
        try {
            const _id = new bson.ObjectID(id);
            const data = await TodoModel
            .findOneAndUpdate({ _id }, {
                $set: todo
            });
            return data;
        } catch (err) {
            return Promise.reject(err)
        }
    }

    async getAll() {
        try {
            const data = await TodoModel.find({});
            return data;
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async getOne(id) {
        try {
            const _id = new bson.ObjectID(id);
            const data = await TodoModel.findOne({ _id });
            return data;
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async deleteOne(id) {
        try {
            const _id = new bson.ObjectID(id);
            const data = await TodoModel.findOneAndDelete({ _id });
            return data;
        } catch (err) {
            return Promise.reject(err);
        }
    }
}



module.exports = {
    TodoService
}