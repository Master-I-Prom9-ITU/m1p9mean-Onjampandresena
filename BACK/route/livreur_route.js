const express = require('express');
const Livreur = require('../model/Livreur');
const router = new express.Router();

router.get('/livreur', async(req, res) => {
    await Livreur.find({}).then(result => {
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

router.post('/livreur', async(req, res) => {
    const livreur = new Livreur({
        Nom : req.body.Nom,
        Prenom : req.body.Prenom,
        Telephone : req.body.Telephone
    });
    await livreur.save().then(result => {
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

router.get('/livreur/:id', async(req, res) => {
    await Livreur.find( { _id: req.params.id } ).then(result => {
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

router.put('/livreur/:id', async(req, res) => {
    const Livreur = new Livreur({
        Nom : req.body.Nom,
        Prenom : req.body.Prenom,
        Telephone : req.body.Telephone
    });
    const query = { _id: req.params.id };
    const update = { $push: { livreur } };
    const options = { upsert: true };
    await Livreur.updateOne( query, update, options ).then(result => {
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

router.delete('/livreur/:id', async(req, res) => {
    await Livreur.deleteOne( { _id: req.params.id } ).then(result => {
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
