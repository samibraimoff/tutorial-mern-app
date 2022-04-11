const express = require('express');
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require('../controllers/notes.controllers');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.route('/').get(protect, getNotes).post(protect, createNote);
router.route('/:id').put(protect, updateNote).delete(protect, deleteNote);

module.exports = router;
