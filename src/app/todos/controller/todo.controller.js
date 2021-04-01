const { TodoService } = require('../services/todo.service')
const { SuccessResponse, FailureResponse, ResponseObject } = require('./../../../middlewares/response')

class TodoController {
    static async create(req, res, next) {
        try {
            const data = await new TodoService().create(req.body);
            return ResponseObject({
                req,
                next,
                data,
                type: "SUCCESS",
                status: 201
            });
        } catch (err) {
            return ResponseObject({
                req,
                next,
                error: !!err.message ? err.message : err,
                type: "ERROR",
                status: !!err.status ? err.status : 500
            });
        }
    }

    static async update(req, res, next) {
        try {
            const data = await new TodoService().update(req.params.id, req.body);
            return ResponseObject({
                req,
                next,
                data,
                type: "SUCCESS",
                status: 201
            });
        } catch (err) {
            return ResponseObject({
                req,
                next,
                error: !!err.message ? err.message : err,
                type: "ERROR",
                status: !!err.status ? err.status : 500
            });
        }
    }

    static async getAll(req, res, next) {
        try {
            const data = await new TodoService().getAll();
            return ResponseObject({
                req,
                next,
                data,
                type: "SUCCESS",
                status: 201
            });
        } catch (err) {
            return ResponseObject({
                req,
                next,
                error: !!err.message ? err.message : err,
                type: "ERROR",
                status: !!err.status ? err.status : 500
            });
        }
    }

    static async getOne(req, res, next) {
        try {
            const data = await new TodoService().getOne(req.params.id);
            return ResponseObject({
                req,
                next,
                data,
                type: "SUCCESS",
                status: 201
            });
        } catch (err) {
            return ResponseObject({
                req,
                next,
                error: !!err.message ? err.message : err,
                type: "ERROR",
                status: !!err.status ? err.status : 500
            });
        }
    }

    static async deleteOne(req, res, next) {
        try {
            const data = await new TodoService().deleteOne(req.params.id);
            return ResponseObject({
                req,
                next,
                data,
                type: "SUCCESS",
                status: 201
            });
        } catch (err) {
            return ResponseObject({
                req,
                next,
                error: !!err.message ? err.message : err,
                type: "ERROR",
                status: !!err.status ? err.status : 500
            });
        }
    }
}


module.exports = {
    TodoController
}
