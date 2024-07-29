const { getAll, create, getOne, destroy, update} = require('../controllers/user.controllers')
const express = require('express');

const userRouter = express.Router();

//***** Rutas estáticas */
userRouter.route("/")
		.get(getAll)
        .post(create)



//***** Rutas dinámicas */
userRouter.route("/:id")
        .get(getOne)
        .delete(destroy)
        .put(update)


module.exports = userRouter;