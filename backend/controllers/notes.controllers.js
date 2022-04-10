const asyncHandler = require('express-async-handler');
const Note = require('../models/Note.model');

// @desc    getNotes
// @route   GET /api/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
});

// @desc    createNote
// @route   POST /api/notes
// @access  Private
const createNote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a message field');
  }

  const note = await Note.create({
    text: req.body.text,
  });
  res.status(200).json(note);
});

// @desc    updateNote
// @route   PUT /api/notes/:id
// @access  Private
const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    res.status(400);
    throw new Error('Note not found');
  }

  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedNote);
});

// @desc    deleteNote
// @route   DELETE /api/notes/:id
// @access  Private
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    res.status(400);
    throw new Error('Note not found');
  }
  await note.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
