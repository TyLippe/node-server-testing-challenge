const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(hero) {
    return db('heroes').insert(hero, 'id');
}

async function update(id, changes) {
    return null;
}

function remove(id) {
    return null;
}

function getAll() {
    return db('heroes');
}

function findById(id) {
    return null;
}
