const catchError = require('../utils/catchError');
const User = require('../models/User');


// GET -- TRAER TODOS LOS USUARIOS
const getAll = catchError(async (req, res) => {
    const result = await User.findAll() 
    return res.json(result)
});


// POST -- CREAR USUARIOS
const create = catchError(async (req, res) => {
    const result = await User.create(req.body)
    return res.status(201).json(result)
});


// GET -- TRAER UN USUARIO DE ACUERDO CON SU ID
const getOne = catchError(async (req, res) => { 
    const { id } = req.params 
    const result = await User.findByPk(id)
    return res.json(result)
});


// DELETE -- ELIMINAR UN USUARIO
const destroy = catchError(async (req, res) => {
    const { id } = req.params 
    const result = await User.destroy({ where: { id } })
    if (!result) return res.send(404).json("User not found")
    return res.sendStatus(204)
});


// PUT -- ACTUALIZAR O MODIFICAR UN USUARIO
const update = catchError(async (req, res) => { 
    const { id } = req.params 
    const result = await User.update(
        req.body,
            { where: {id}, returning: true } 
    )

    if (result[0]===0) return res.sendStatus(404) 
    return res.status(200).json(result[1][0])
});

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}