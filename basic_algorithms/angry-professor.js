// Hackerrank
// https://www.hackerrank.com/challenges/angry-professor/problem
function angryProfessor(timeWanted, arrivalTimes) {
    // First Input 
    //             N of students        Time
    // Students = [    4,                3  ]
    // Arrival Times = [-1, -3, 4, 2]
    let numOfOnTimeStudents = arrivalTimes.filter(n => n <= 0);
    console.log("Professor Wants:", typeof timeWanted);
    console.log("Students on time:", numOfOnTimeStudents);
    return numOfOnTimeStudents.length >= timeWanted ? "NO" : "YES";

}