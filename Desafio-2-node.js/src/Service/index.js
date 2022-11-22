const model = require('../Model');

const getAll = async (userId) => {
  const dataValues = await model.findAll();
  
  return dataValues;
};

module.exports = {
  getAll,
};
