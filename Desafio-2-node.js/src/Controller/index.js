const getAll = async (req, res, next) => {
  // Recebe o token pelo authorization do headers
  const { authorization } = req.headers;
  // Caso não existe - usuário não autorizado
  if (!authorization) return next({ error: 400, message: 'UNAUTHORIZED' });
  // Verificando token
  const authorized = verifyToken(authorization);
  // Caso não existe - usuário não autorizado
  if (!authorized) return next({ error: 400, message: 'UNAUTHORIZED' });
  // Na criação do token tem { id: 1, name: 'nome da pessoa', ... }
  const data = await service.getAll(authorized.id);

  return res.status(200).json(data);
};

module.exports = {
  getAll,
};
