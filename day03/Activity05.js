// Combining Conditions

//Leap year conditions - divisible by 4 but not 100 unless also divisible by 400

let year = 3000;

if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) console.log('Leap Year');
else console.log('Not a leap year');

