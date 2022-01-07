const { assert } = require('assert');
const { Rooster } = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!';
      const actual = Rooster.announceDawn();
      assert.equal(actual, expected);
    });
  });

  decribe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const input = 12;
      const expected = '12';
      const actual = Rooster.timeAtDawn(input);
      assert.equal(actual, expected);
    });

    it('throws an error if passed a number greater than 23', () => {
      const input = -1;
      const expected = RangeError;
      
      assert.throw(() => {
        Rooster.timeAtDawn(input);
      }, expected);
    });


  });
});