exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("vin", 50).notNullable().unique();
    tbl.string("make", 50).notNullable();
    tbl.string("model", 50).notNullable();
    tbl.integer("mileage").unsigned().notNullable();
    tbl.string("title", 50);
    tbl.string("transmission", 50);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
