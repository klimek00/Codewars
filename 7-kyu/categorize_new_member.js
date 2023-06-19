/*
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
*/

function openOrSenior(data){
  let out = []
  data.forEach((e) => {
    out.push(e[0] >= 55 && e[1] > 7 ? 'Senior' : 'Open')
  })
  console.log(out)
  return out
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;


//testing


describe("Basic tests", () => {
  it("Fixed tests", () => {
    assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
    assert.deepEqual(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
    assert.deepEqual(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
  });
});
