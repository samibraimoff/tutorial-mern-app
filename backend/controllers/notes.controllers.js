// @desc    getNotes
// @route   GET /api/notes
// @access  Private
const getNotes = (req, res) => {
  res.status(200).json({ msg: 'get notes' });
};

// @desc    createNote
// @route   POST /api/notes
// @access  Private
const createNote = (req, res) => {
  res.status(200).json({ msg: 'create note' });
};

// @desc    updateNote
// @route   PUT /api/notes/:id
// @access  Private
const updateNote = (req, res) => {
  res.status(200).json({ msg: `update note ${req.params.id}` });
};

// @desc    deleteNote
// @route   DELETE /api/notes/:id
// @access  Private
const deleteNote = (req, res) => {
  res.status(200).json({ msg: `delete note ${req.params.id}` });
};

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
