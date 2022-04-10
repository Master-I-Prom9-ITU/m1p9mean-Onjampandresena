const express = require('express');
const Commande = require('../model/Commande');
const router = new express.Router();

router.get('/commande', async(req, res) => {
    await Commande.find({}).then(result => {
        res.status(200).send({
            status : 200,
            data : result
        });
    })
    .catch(error => {
        res.status(500).send({
            status : 500,
            data : error
        });
    });
});

router.post('/commande', async(req, res) => {
    const commande = new Commande({
        UserId : req.body.UserId,
        Restaurant : req.body.Restaurant,
        Plat : req.body.Plat,
        Nombre : req.body.Nombre,
        DateCommande : req.body.DateCommande,
        Status : req.body.Status
    });
    await commande.save().then(result => {
        res.status(200).send({
            status : 200,
            data : result
        });
    })
    .catch(error => {
        res.status(500).send({
            status : 500,
            data : error
        });
    });
});

module.exports = router;
