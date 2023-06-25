const sequelize = require('../config/connection');
const { User } = require('../models');
const { Blog } = require('../models');

const userData = require('./userData.json');
const blog = require('./blog.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

const blog = async () => {
  await sequelize.sync({ force: true });
await Blog.bulkCreate(blog, {
  individualHooks: true,
  returning: true,
});
process.exit(0);
};

seedDatabase();
