/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
Example

add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes

    The input numbers are big.
    The input is a string of only digits
    The numbers are positives


*/
function add(a, b) {  
  const numA = a
    .split('')
    .reverse()
    .join('')
  const numB = b
    .split('')
    .reverse()
    .join('')
  
  let result = []
  let tempA = 0, tempB = 0, carry = 0
  //we dont know which number is bigger
  //we do it as we do "manually way" -> add from the least significat, increase number if carry==1
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    //cannot add string, convert first
    tempA = parseInt(numA[i] || 0)
    tempB = parseInt(numB[i] || 0)
    
    result.push(tempA+tempB+carry)
    if (result[i] > 9) {
      result[i] %= 10
      carry = 1
      continue;
    }
    
    carry = 0
  }
  //if combining numbers increases length, we have to additionally add carry 
  if (carry) result.push(carry)
  
  return result.reverse().join('')
}

//testing
describe("Add two numbers", function(){
  it("should pass basic tests", function() {
    Test.assertEquals(add("1", "1"), "2");
    Test.assertEquals(add("123", "456"), "579");
    Test.assertEquals(add("888", "222"), "1110");
    Test.assertEquals(add("1372", "69"), "1441");
    Test.assertEquals(add("12", "456"), "468");
    Test.assertEquals(add("101", "100"), "201");
    Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
  });
});
