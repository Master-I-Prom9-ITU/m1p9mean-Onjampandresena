const express = require('express');
const User = require('../model/User');
const router = new express.Router();

router.post('/inscription', async(req, res) => {
    const user = new User({
        Nom : req.body.Nom,
        Prenom : req.body.Prenom,
        DateNaissance : req.body.DateNaissance,
        Lot : req.body.Lot,
        AdresseMail : req.body.AdresseMail,
        Telephone : req.body.Telephone,
        MotDePasse : req.body.MotDePasse
    });
    await user.save().then(result => {
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

router.post('/login', async(req, res) => {
    const user = new User({
        AdresseMail : req.body.AdresseMail,
        MotDePasse : req.body.MotDePasse
    });
    await user.save().then(result => {
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
