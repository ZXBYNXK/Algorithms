// Time Conversion Algorithm.
// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    const isPm = s.indexOf("PM");
    const hour = s.split(":")[0];
    const minutes = s.split(":")[1];
    const seconds = s.split(":")[2].substring(0,2);
    const militaryTime = `${isPm ? parseInt(hour) + 12: hour}:${minutes}:${seconds}`;
    return militaryTime;
}

//DEBUG
console.log(timeConversion("07:05:45PM"))
