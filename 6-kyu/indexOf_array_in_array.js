/*
JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript. Many other languages have similar quirks.

However, sometimes it is useful to search for an Array. Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return -1.

See some examples:
You will be required to validate the inputs on the following criteria:

    each element of the array to be searched should be an array;
    each sub-array in the two-dimensional array should be of length two; and
    query should be an array of length two.

If the inputs are not valid you should throw an Error.

See some examples:
var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
arrayToSearch = [1,2,3,4,5,6]; // => throw Error
arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
var query = [1,2]; // => valid input
query = 5; // => throw Error
query = [9,2,1]; // => throw Error
*/

var searchArray = function (arrayToSearch, query) {
  if (query.length != 2 || !Array.isArray(query)) throw new Error() 
  
  let out = -1;
  arrayToSearch.every((row, i) => {
//       console.log(JSON.stringify(row) === JSON.stringify(query), row, query, i)
    if (row.length != 2 || !Array.isArray(row)) throw new Error() 
      
    if (JSON.stringify(row) === JSON.stringify(query)) {out = i; return false}
      return true
    })
    
  return out
}

//testing

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var bigArray = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];

var searchFor = [9,20];
Test.assertEquals(searchArray(bigArray,searchFor), 2);
searchFor = [1,12];
Test.assertEquals(searchArray(bigArray,searchFor), -1);
searchFor = [7,2];
Test.assertEquals(searchArray(bigArray, searchFor), 1);
// TODO: add your own tests
  });
});
