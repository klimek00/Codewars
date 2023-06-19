/*
Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 110, ["B", "A", "A", "A"]],
  ["name3", 200, ["B", "A", "A", "C"]],
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
];

The scores for each grade is:

    A: 30 points
    B: 20 points
    C: 10 points
    D: 5 points
    Everything else: 0 points

If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring with this rule. 
*/
function findHack(arr) {
  const gradesMap = {
    A: 30,
    B: 20,
    C: 10,
    D: 5
  }
  //array of users with wrong score
  let out = []
  //score for each user
  let score = 0
  //flag for courses B and A
  let badGradeFlag = false
  
  arr.map((userElem, i) => {
    //total score cappaed at 200 -> if higher, obv cheating
    if (userElem[1] > 200) { out.push(userElem[0]); return true }
    
    counter = 0
    score = 0
    badGradeFlag = false
    
    let grades = userElem[2]
    grades.forEach(grade => {
      score += gradesMap[grade] || 0
      counter++
      
      if (grade !== 'A' && grade !== 'B') {
        badGradeFlag = true
      }
    })
    
    
    if (grades.length > 4 && !badGradeFlag)
      score += 20
    if (score >= 200)
        score = 200
    
    if (score !== userElem[1])
      out.push(userElem[0])
  })
  return out
}

//testing
describe("Tests", () => {
  it("test", () => {
var array = [
["name1", 150, ["B", "A", "A", "C", "A", "A"]],
["name2", 120, ["B", "A", "A", "A"]],
["name3", 160, ["B", "A", "A", "A","A"]],
["name4", 140, ["B", "A", "A", "C", "A"]]
];

Test.assertDeepEquals(findHack(array),["name2","name4"]);
  });
});
