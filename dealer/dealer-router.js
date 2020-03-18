const express = require('express');
const knex = require('../data/connection');

const router = express.Router();

router.get('/', (req, res) => {
  knex
    .select('*')
    .from('cars')
    .then(cars => res.status(200).json(cars))
    .catch(err => res.status(500).json({ error: 'Failed to retrieve vehicles' }))
});

router.post('/', (req, res) => {
  knex
    .insert(req.body, 'id')
    .into('cars')
    .then(car => res.status(200).json(car))
    .catch(err => res.status(500).json({ error: 'Failed to add vehicle information' }));
});

module.exports = router;
