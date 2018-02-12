// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution #1:
function palindrome(str) {
  // Reverse the string, and assign it to a new variable.
  // Compare the input string with the reversed string.
    // If the strings are the same, return 'true'
    // Otherwise, return false.

  const reversedStr = str.split('').reverse().join('');
  
  return str === reversedStr;
}


// Solution #2: Using the .every() method
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i -1];
  });
}

module.exports = palindrome;