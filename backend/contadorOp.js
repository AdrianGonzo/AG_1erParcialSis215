let totalOperaciones = 0;

const contadorOperaciones = (req, res, next) => {
  totalOperaciones++;
  console.log(`Total de operaciones realizadas: ${totalOperaciones}`);
  next();
};

const getOperaciones = (req, res) => {
  res.json({ totalOperaciones });
};

module.exports = { contadorOperaciones, getOperaciones };