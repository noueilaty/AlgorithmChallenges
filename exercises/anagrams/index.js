// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// Initial attempt:
// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//     console.log('StringA:', stringA);
//     console.log('StringB:', stringB);

//   let charMapA = {};
//   let charMapB = {};
  
//   if (stringA.length == stringB.length) {
    
//     for (let charA of stringA) {
//       if (charMapA[charA]) {
//         charMapA[charA]++;
//       } else {
//         charMapA[charA] = 1;
//       }
//     }

//     for (let charB of stringB) {
//       if (charMapB[charB]) {
//         charMapB[charB]++;
//       } else {
//         charMapB[charB] = 1;
//       }
//     }

//     console.log('charMapA: ', charMapA);
//     console.log('charMapB: ', charMapB);

//   } else {
//     return false;
//   }
// }

// module.exports = anagrams;

// Walkthrough (In Progress)
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).legnth) {
    return false;
  }



}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

module.exports = anagrams;