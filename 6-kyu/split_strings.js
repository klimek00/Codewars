/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_')
*/

function solution(str) {
  let out = str.match(/.{1,2}/g)
  if (!out) return []
  let test = (arg) => {arg[arg.length -1] += "_"; return arg}

  return ((out[out.length -1]).length % 2 ? test(out) : out)
}

//testing

const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});