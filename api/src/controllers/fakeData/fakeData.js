const faker = require('faker');
const { User } = require('../../db');

const fakeData = async (limit = 5) => {
  limit > 50 && (limit = 50);
  for (let i = 0; i < limit; i++) {
    //there's no point in hashing the pw since it's fake data
    User.create({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      password: hashedPassword,
    });
  }
};

module.exports = { fakeData };
