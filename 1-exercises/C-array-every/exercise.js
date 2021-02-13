/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

var groupIsOnlyStudents = group.every(function(students, group) {
    return students == group;
}); // complete this statement

// function isStudent(item) {
//     if (groupIsOnlyStudents) {
//         console.log("The group contains only students");
//     } else {
//         console.log("The group does not contain only students");
//     }
// }
for (let i = 0; i <= group.length; i++) {
    let person = group[i];
    let personIsStudent = false;
    for (let j = 0; j <= students.length; j++) {
        if (person === students[j]) {
            personIsStudent === true;
        };
    }
}

if (groupIsOnlyStudents) {
    console.log("The group contains only students");
} else {
    console.log("The group does not contain only students");
}



// if (groupIsOnlyStudents) {
//     console.log("The group contains only students");
// } else {
//     console.log("The group does not contain only students");
// }

/* EXPECTED RESULT */

// The group does not contain only students