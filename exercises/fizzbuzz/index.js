// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    // If i is multiple of 3 and 5, print 'fizzbuzz',
    // If i is multiple of 3, print 'fizz',
    // If i is multiple of 5, print 'buzz',
    // If i is a multiple of neither, then print 'i'

    if (i % 3 == 0 && i % 5 == 0) {
      console.log('fizzbuzz');
    } else if (i % 3 == 0) {
      console.log('fizz')
    } else if (i % 5 == 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

function fizzBuzz(n) {

}


module.exports = fizzBuzz;
