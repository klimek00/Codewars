/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

*/

function toCamelCase(str){
  let out = ''
  if (!str) return ''
  str.split(/[_-]/).every((e, i) => {
    if (i) e = e.charAt(0).toUpperCase() + e.slice(1)
    out += e
    return true
  })
  return out
}

//testing

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
    assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
    assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
  });
});
