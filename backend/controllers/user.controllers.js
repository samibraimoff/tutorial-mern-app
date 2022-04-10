// @desc    register new user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.json({ message: 'register user' });
};

// @desc    Authenticate user
// @route   POST /api/users
// @access  Public
const loginUser = (req, res) => {
  res.json({ message: 'login user' });
};

// @desc    get users data
// @route   GET /api/users/me
// @access  Private
const getMe = (req, res) => {
  res.json({ message: 'user data display' });
};

module.exports = {
  registerUser,
  getMe,
  loginUser,
};
