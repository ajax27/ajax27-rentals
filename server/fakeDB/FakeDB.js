const rentals = require('./data/rentals');
const Rental = require('../models/rental');

class FakeDB {

  async clean() {
    return Rental.deleteMany({});
  }

  async addData() {
    return Rental.create(rentals);
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = FakeDB;
