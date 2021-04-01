const { Router } = require("express");
const { TodoController } = require("../controller/todo.controller");
const { Response } = require("./../../../middlewares/response");

const router = Router();


router.get('/', TodoController.getAll);
router.get('/:id', TodoController.getOne);
router.post('/', TodoController.create);
router.put('/:id', TodoController.update);
router.delete('/:id', TodoController.deleteOne);
router.use(Response);

module.exports = router;