const express = require('express');
const Plat = require('../model/Plat');
const router = new express.Router();

router.get('/plat', async(req, res) => {
    await Plat.find({}).then(result => {
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

router.post('/plat', async(req, res) => {
    const plat = new Plat({
        Nom : req.body.Nom,
        Description : req.body.Description,
        Categorie : req.body.Categorie,
        Image : req.body.Image,
        Prix : req.body.Prix,
        Restaurant : req.body.Restaurant
    });
    await plat.save().then(result => {
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

router.get('/plat/:id', async(req, res) => {
    await Plat.find( { _id: req.params.id } ).then(result => {
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

router.put('/plat/:id', async(req, res) => {
    const plat = new Plat({
        Nom : req.body.Nom,
        Description : req.body.Description,
        Categorie : req.body.Categorie,
        Image : req.body.Image,
        Prix : req.body.Prix,
        Restaurant : req.body.Restaurant
    });
    const query = { _id: req.params.id };
    const update = { $push: { plat } };
    const options = { upsert: true };
    await Plat.updateOne( query, update, options ).then(result => {
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

router.delete('/plat/:id', async(req, res) => {
    await Plat.deleteOne( { _id: req.params.id } ).then(result => {
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
