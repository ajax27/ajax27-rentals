const mongoose = require('mongoose');
const config = require('../config/dev');
const FakeDB = require('./FakeDB');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, async () => {
  const fakeDB = new FakeDB();
  console.log('Database population has started');
  await fakeDB.populate();
  await mongoose.connection.close();
  console.log('New Database has been populated!');
});
