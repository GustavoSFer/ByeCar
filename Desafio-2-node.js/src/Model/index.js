// Simulando a busca do banco de dados. exemplo MySQL.
const { User } = require('../database');

const getAll = () => {
  const dataValues = await Sale.findAll();
  return dataValues;
};
/*
  Retorno possivel do banco de dados
  1 - []
  2 - [
    {
      id: 1,
      name: 'Nome',
      email: 'email@gmail.com',
      phone: '00000000'
    },
    ....
  ]
*/

module.exports = {
  getAll,
};
