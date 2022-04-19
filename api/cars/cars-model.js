const db = require("../../data/db-config");

const getAll = () => {
  return db("cars");
};

const getById = (id) => {
  return db("cars").where("id", id).first();
};

async function create(car) {
  const result = await db("cars").insert(car);
  return getById(result);
}

module.exports = {
  getAll,
  getById,
  create,
};
