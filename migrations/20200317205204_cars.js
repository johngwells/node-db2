
exports.up = function(knex) {
  return knex.schema
  .createTable('cars', tbl => {
    tbl.increments()
    tbl.string('VIN', 128).unique().notNullable()
    tbl.string('Make').notNullable()
    tbl.string('Model').notNullable()
    tbl.integer('Mileage').notNullable()
    tbl.string('Transmission Type')
    tbl.string('Title')
  })
  .createTable('sales', tbl => {
    tbl.increments()
    tbl.string('Sold')
    tbl.string('Profit')
    tbl.integer('car_id').references('id').inTable('cars')
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('cars')
  .dropTableIfExists('sales')
};
