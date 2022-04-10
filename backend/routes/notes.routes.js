const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'get notes' });
});

router.post('/', (req, res) => {
  res.status(200).json({ msg: 'set note' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ msg: `update note ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ msg: `delete notes ${req.params.id}` });
});

module.exports = router;
