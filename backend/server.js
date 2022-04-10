const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3030;

const app = express();

app.use('/api/notes', require('./routes/notes.routes'));

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}...`);
});
