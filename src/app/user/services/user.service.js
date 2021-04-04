const { UserModel } = require("../models/user.model");
const { ObjectID } = require("bson")

class UserService {
    async getOne(filter) {
        try {
            return UserModel.findOne(filter).lean().exec();
        } catch (err) {
            return Promise.reject(err)
        }
    }

    async create(user) {
        try {
            return new UserModel(user).save();
        } catch (err) {
            return Promise.reject(err)
        }
    }

    async update(id, data) {
        try {
            const _id = new ObjectID(id)
            return UserModel.findOneAndUpdate({_id}, {
                $set: data
            })
        } catch (err) {
            return Promise.reject(err);
        }
    }
}



module.exports = {
    UserService
}