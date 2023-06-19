/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
function count(string) {
  if (!string) return {};
  let chars = {}
  string.split('').map(e => {
    Object.assign(chars, {[e]: (chars[e] || 0) + 1})
  })
  return chars
}

//testing
const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Sample Tests', function() {
  function test(string, expected) {
    it(`<code>'${string}'</code>`, function() {
      assert.deepEqual(count(string), expected);
    });
  }

  test('', {});
  test('a', {'a': 1});
  test('ab', {'a': 1, 'b': 1});
  test('aba', {'a': 2, 'b': 1});
  test('ABC', {'A': 1, 'B': 1, 'C': 1});
});