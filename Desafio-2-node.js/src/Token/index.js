const jwt = require('jsonwebtoken');
// Leitura de arquivo
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

// Exemplo de função de cria um token
const generateToken = (payload) => {
  const Token = jwt.sign(payload, secret, {
    algorithm: 'HS256',
  });
  return Token;
};

// Função que verifica o token
const verifyToken = (token) => {
  try {
    const result = jwt.verify(token, secret);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  generateToken,
  verifyToken,
}