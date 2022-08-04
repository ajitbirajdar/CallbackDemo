const express = require('express');
const router = express.Router();

const arrayControllers = require('../controllers/arraycontrollers')

router.get('/', (req, res) => {
    arrayControllers.getAll((data) => {
        res.send(data)
    })
})

router.post('/', (req, res) => {
    arrayControllers.createNew(req.body, (data) => {
        res.send(data)
    })
})

module.exports = router;