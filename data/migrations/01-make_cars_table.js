exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("vin", 50).notNullable().unique();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("title", 50);
    tbl.string("transmission");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
