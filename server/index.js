const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');

// routes
const rentalRoutes = require('./routes/rentals');
const usersRoutes = require('./routes/users');

// models
require('./models/rental');
require('./models/user');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, () => {
  console.log('Connected to DB!')
});

app.use(bodyParser.urlencoded({ extended: false }))

// Middleware
app.use(bodyParser.json())

// Api Routes
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', usersRoutes);

app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT);
})
