// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// Solution 1:
function reverse(str) {
  return str.split('').reverse().join('');
}


// Solution 2:
  // Create an empty string called reversed
  // For each Character provided, take the character and add it to the start of 'reversed'
  // Return the variable 'reversed'
function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}


// Solution 3:
function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '')
}

// Solution 3 Condensed:
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
