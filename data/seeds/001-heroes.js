exports.seed = function(knex) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        {name: 'D.Va'},
        {name: 'Mercy'},
        {name: 'Ashe'}
      ]);
    });
};
