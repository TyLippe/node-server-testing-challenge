const db = require('../data/dbConfig.js');

const Heroes = require('./overwatchModel.js');

describe('heroes model', () => {
    beforeEach(async () => {
        await db('heroes').truncate();
    });

    describe('insert()', () => {
        it('should insert the hero into the db', async () => {
            await Heroes.insert({ name: 'Solider 76' }); 
            const heroes = await db('heroes'); 
            expect(heroes).toHaveLength(1);
        });

        it('should insert the hero into the db', async () => {
            await Heroes.insert({ name: 'Widowmaker' });
            await Heroes.insert({ name: 'Lucio' }); 

            const heroes = await db('heroes');

            expect(heroes).toHaveLength(2);
        });
    });
});
