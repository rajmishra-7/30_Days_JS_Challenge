// Switch Case

//Task1
let input = 4;
console.log("Task 1 -");

switch (input) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid Input");

    break;
}

//Task2

console.log("Task 2 -");

let score = 9;
let grade;

// if (score >= 90) grade = 'A';
// else if (score >= 80 && score < 90) grade = 'B';
// else if (score >= 70 && score < 80) grade = 'C';
// else if (score >= 60 && score < 70) grade = 'D';
// else if (score >= 50 && score < 60) grade = 'E';
// else grade = 'F';

switch (true) {
  case score >= 90:
    grade = "A";
    break;

  case score >= 80 && score < 90:
    grade = "B";
    break;

  case score >= 70 && score < 80:
    grade = "C";
    break;

  case score >= 60 && score < 70:
    grade = "D";
    break;

  case score >= 50 && score < 60:
    grade = "E";
    break;

  case score < 50:
    grade = "F";
    break;

  default:
    grade = "Invalid Input";
    break;
}

console.log(grade);

//Alternate solution-

// function assignGrade(marks) {
//     let grade;
//     let range = Math.floor(marks / 10); // Divide marks by 10 and round down to determine range

//     switch (range) {
//         case 10: // Handle 100 as a special case
//         case 9:
//             grade = 'A';
//             break;
//         case 8:
//             grade = 'B';
//             break;
//         case 7:
//             grade = 'C';
//             break;
//         case 6:
//             grade = 'D';
//             break;
//         case 5:
//             grade = 'E';
//             break;
//         case 4:
//         case 3:
//         case 2:
//         case 1:
//         case 0:
//             grade = 'F';
//             break;
//         default:
//             grade = 'Invalid marks';
//     }

//     return grade;
// }

// // Example usage:
// let studentMarks = 85; // Replace this with the marks you want to test
// let studentGrade = assignGrade(studentMarks);
// console.log(`The grade for marks ${studentMarks} is: ${studentGrade}`);