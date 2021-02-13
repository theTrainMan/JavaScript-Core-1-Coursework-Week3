/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

let isStudents = (item) => {
    console.log(item);
    return students.includes(item)

}
var groupIsOnlyStudents = group.every(isStudents);

if (groupIsOnlyStudents) {
    console.log("The group contains only students");
} else {
    console.log("The group does not contain only students");
}

// var groupIsOnlyStudents = group.every(function(item, index) {
//     console.log(item + " at " + index);
//     return true;
//     // return  students == group;
// }); // complete this statement
// var groupIsOnlyStudents = students.every(function(item, index) {
//     console.log(item + " at " + index);
//     return true;
//     // return  students == group;
// }); // complete this statement




// function isStudent(item) {
//     if (groupIsOnlyStudents) {
//         console.log("The group contains only students");
//     } else {
//         console.log("The group does not contain only students");
//     }
// }
// for (let i = 0; i <= group.length; i++) {
//     let person = group[i];
//     console.log('Checking' + person);
//     let personIsStudent = false;
//     for (let j = 0; j <= students.length; j++) {
//         console.log('Checking student ' + students[j]);
//         if (person === students[j]) {
//             personIsStudent === true;
//             break;
//         };
//     }
// }



/* EXPECTED RESULT */

// The group does not contain only students