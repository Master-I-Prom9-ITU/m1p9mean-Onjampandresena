const express = require('express');
const Restaurant = require('../model/Restaurant');
const router = new express.Router();

router.get('/restaurant', async(req, res) => {
    await Restaurant.find({}).then(result => {
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

router.post('/restaurant', async(req, res) => {
    const restaurant = new Restaurant({
        Nom : req.body.Nom,
        Adresse : req.body.Adresse,
        Image : req.body.Image
    });
    await restaurant.save().then(result => {
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

router.get('/restaurant/:id', async(req, res) => {
    await Restaurant.find( { _id: req.params.id } ).then(result => {
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

router.put('/restaurant/:id', async(req, res) => {
    const restaurant = new Restaurant({
        Nom : req.body.Nom,
        Adresse : req.body.Adresse,
        Image : req.body.Image
    });
    const query = { _id: req.params.id };
    const update = { $push: { restaurant } };
    const options = { upsert: true };
    await Restaurant.updateOne( query, update, options ).then(result => {
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

router.delete('/restaurant/:id', async(req, res) => {
    await Restaurant.deleteOne( { _id: req.params.id } ).then(result => {
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
