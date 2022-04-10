const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/error.middleware');
const PORT = process.env.PORT || 3030;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/notes', require('./routes/notes.routes'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}...`);
});
