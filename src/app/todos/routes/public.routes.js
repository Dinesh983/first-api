const { Router } = require("express");
const { TodoController } = require("../controller/todo.controller");

const router = Router();


router.get('/', TodoController.getAll);
router.get('/:id', TodoController.getOne);
router.post('/', TodoController.create);
router.put('/:id', TodoController.update);
router.delete('/:id', TodoController.deleteOne);


module.exports = router;