'use strict';

const express = require('express');
const router = express.Router();
const asistentesService = require('./asistentes-service');



//METODO GET ASISTENTES
router.get('/', function(req, res) {
    asistentesService.getAll((err, asistentes) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else if (asistentes === null) {
            res.status(500).send({
                msg: "asistentes vacio"
            });
        } else {
            res.status(200).send(asistentes);
        }
    })
});

router.get('/:id', function(req, res) {
    let _id = req.params.id;

    asistentesService.get(_id, (err, asistente) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else if (asistente === null) {
            res.status(500).send({
                msg: "asistente vacio"
            });
        } else {
            res.status(200).send(asistente);
        }
    })
});

//METODO POST ASISTENTES
router.post('/', function(req, res) {
    let asistente = req.body;
    if (!Array.isArray(asistente)) {
        asistentesService.add(asistente, (err, asistente) => {
            if (err) {
                res.status(500).send({ msg: err })
            } else if (asistente !== null) {
                res.send({ msg: '¡Asistente creado!' })
            }
        })
    } else {
        asistentesService.addAll(asistente, (err, asistente) => {
            if (err) {
                res.status(500).send({ msg: err })
            } else if (asistente !== null) {
                res.send({ msg: '¡Varios asistentes creados!' })
            }
        })
    }
});


//METODO DELETE ASISTENTES
router.delete('/', function(req, res) {
    asistentesService.removeAll((err) => {
        if (err) {
            res.status(500).send({ msg: err })
        } else {
            res.status(200).send({ msg: '¡Todos los asistentes eliminados!' })
        }
    })
});

router.delete('/:id', function(req, res) {
    let _id = req.params.id;

    asistentesService.remove(_id, (err) => {
        if (err) {
            res.status(404).send({
                msg: err
            });
        } else {
            res.status(200).send({
                msg: 'Asistente eliminado'
            });
        }
    })
});

//METODO PUT ASISTENTES
router.put('/:id', function(req, res) {
    const _id = req.params.id;
    const updatedAsistente = req.body;

    asistentesService.update(_id, updatedAsistente, (err, numUpdates) => {
        if (err || numUpdates === 0) {
            res.status(500).send({
                msg: err
            });
        } else {
            res.status(200).send({ msg: "¡Asistente actualizado!" });
        }
    })
});

module.exports = router;