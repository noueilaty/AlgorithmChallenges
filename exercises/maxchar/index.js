// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution #1: Using forOf
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // Iterating over a string:
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // Iterating over an object:
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
