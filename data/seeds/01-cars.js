exports.seed = async function (knex) {
  await knex("cars").del();
  await knex("cars").insert([
    { vin: "", make: "", model: "", mileage: 35, title: "", transmission: "" },
    { vin: "", make: "", model: "", mileage: 40, title: "", transmission: "" },
    { vin: "", make: "", model: "", mileage: 45, title: "", transmission: "" },
    { vin: "", make: "", model: "", mileage: 50, title: "", transmission: "" },
  ]);
};
