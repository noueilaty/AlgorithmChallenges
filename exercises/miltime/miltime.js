// The following two problems were given as part of a technical phone screening:

// Challenge #1:
// Given the radius of a circle, write a function that calculate its radius:
// 15: 5 => 5 * 5 * PI

var calculateArea = function (r) {
  // 	Math.PI * (r * r)
  return Math.PI * Math.power(r, 2)
}


// Challenge #2:
// Given a string input with the following time format, convert the time to military time:
// "5:30 PM" => "17:30"
// "9:00 AM" => "9:00"
// "12:15 AM" => "0:15"

var extractHour = function (time) {
  if (time.length == 7) {
    return time.splice(0, 1);
  } else {
    return time.splice(0, 2);
  }
}

var extractMin = function () {
  if (time.length == 7) {
    return time.splice(1, 4);
  } else {
    return time.splice(2, 5);
  }
}

var toMilitaryTime = function (timeStr) {
  //   Iterate throught the string, look for a space:
  //   If index following space is == 'P'
  //   	Then 
  for (var i = 0; i < timeStr.length; i++) {
    if (timeStr[i] == ' ') {
      if (timeStr[i] + 1 == 'P') {
        //         Change the hour values to military time (adding 12)
        toString(Math.Int(extractHour(timeStr)) + 12) + 
    } else {
        return timeStr.splice(0, 5);
      }
    }
  }