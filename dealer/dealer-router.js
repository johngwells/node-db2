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

router.put('/:id', (req, res) => {
  const changes = req.body;

  knex('cars')
    .where({ id: req.params.id })
    .update(changes)
    .then(update => {
      update > 0
      ? res.status(200).json({ message: 'record updated successfully' })
      : res.status(404).json({ message: 'The car with the specified Id does not exist' })
    })
    .catch(err => res.status(500).json({ error: 'Couldnt PUT to /api/cars/:id' }));
});

router.delete('/:id', (req, res) => {
  knex('cars')
    .where({ id: req.params.id })
    .del()
    .then(del => {
      res.status(200).json(del)
    })
    .catch(err => res.status(500).json({ error: 'Failed to delete the vehicle' }))
});

module.exports = router;
