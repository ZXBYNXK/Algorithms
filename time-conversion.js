// Time Conversion Algorithm.
// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  const isPm = s.indexOf("PM") > 0 ? true : false;
  const minutes = s.split(":")[1];
  const seconds = s.split(":")[2].substring(0, 2);
  let hours = s.split(":")[0];
  if (isPm != true && hours === "12") {
    hours = "00";
  }
  if (isPm > 0) {
    hours = hours === "12" ? "12" : parseInt(hours) + 12;
  }
  const militaryTime = `${hours}:${minutes}:${seconds}`;
  return militaryTime;
}

//DEBUG
console.log(timeConversion("12:45:54PM"));

// DEBUG (Moved)
// console.log(
//     "Hours:",
//     hours,
//     "\nMinutes:",
//     minutes,
//     "\nSeconds:",
//     seconds,
//     "\nBool Test:",
//     "None"
//   );
