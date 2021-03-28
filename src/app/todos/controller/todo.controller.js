const { TodoService } = require('../services/todo.service')
const { SuccessResponse, FailureResponse } = require('./../../../middlewares/response')

class TodoController {
    static async create(req, res, next) {
        try {
            const data = await new TodoService().create(req.body);
            return SuccessResponse(res, data, 201)
        } catch (err) {
            return FailureResponse(res, err, 500)
        }
    }

    static async update(req, res, next) {
        try {
            const data = await new TodoService().update(req.params.id, req.body);
            return SuccessResponse(res, data, 200)
        } catch (err) {
            return FailureResponse(res, err, 500)
        }
    }

    static async getAll(req, res, next) {
        try {
            const data = await new TodoService().getAll();
            return SuccessResponse(res, data, 200)
        } catch (err) {
            return FailureResponse(res, err, 500)
        }
    }

    static async getOne(req, res, next) {
        try {
            const data = await new TodoService().getOne(req.params.id);
            return SuccessResponse(res, data, 200)
        } catch (err) {
            return FailureResponse(res, err, 500)
        }
    }

    static async deleteOne(req, res, next) {
        try {
            const data = await new TodoService().deleteOne(req.params.id);
            return SuccessResponse(res, data, 200)
        } catch (err) {
            return FailureResponse(res, err, 500)
        }
    }
}


module.exports = {
    TodoController
}
