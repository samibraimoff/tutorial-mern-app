// @desc    getNotes
// @route   GET /api/notes
// @access  Private
const getNotes = (req, res) => {
  res.status(200).json({ message: 'get notes' });
};

// @desc    createNote
// @route   POST /api/notes
// @access  Private
const createNote = (req, res) => {
  if (!req.body.message) {
    res.status(400);
    throw new Error('Please add a message field');
  }
  res.status(200).json({ message: 'create note' });
};

// @desc    updateNote
// @route   PUT /api/notes/:id
// @access  Private
const updateNote = (req, res) => {
  res.status(200).json({ message: `update note ${req.params.id}` });
};

// @desc    deleteNote
// @route   DELETE /api/notes/:id
// @access  Private
const deleteNote = (req, res) => {
  res.status(200).json({ message: `delete note ${req.params.id}` });
};

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
