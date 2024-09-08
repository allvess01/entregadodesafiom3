const express = require('express');
const router = Router();
const { check, validationResult } = require('express-validator');


const usuarios = [];


const validarUsuario = [
    check('nome').notEmpty().withMessage('O nome é obrigatório'),
    check('email').isEmail().withMessage('Email inválido'),
    check('senha').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres')
];


router.get('/usuarios', (req, res) => {
    res.json(usuarios);
});


router.get('/usuarios/:id', (req, res) => {
    const idUsuario = req.params.id;
    const usuario = usuarios.find(u => u.id === idUsuario);

    if (!usuario) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    res.json(usuario);
});


router.post('/usuarios', validarUsuario, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const novoUsuario = req.body;
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

module.exports = router;