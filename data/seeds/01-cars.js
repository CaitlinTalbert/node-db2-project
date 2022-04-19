exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      vin: "11111",
      make: "toyota",
      model: "prius",
      mileage: 35,
      title: "clean",
      transmission: "manual",
    },
    {
      vin: "2222",
      make: "jeep",
      model: "truck",
      mileage: 40,
      title: "idk",
      transmission: "something",
    },
    {
      vin: "5555",
      make: "asss",
      model: "tesla",
      mileage: 45,
      title: "wut",
      transmission: "idk",
    },
    {
      vin: "666",
      make: "gfdsf",
      model: "sdfsaf",
      mileage: 50,
      title: "asdf",
      transmission: "asdfa",
    },
  ]);
};
