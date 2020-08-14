// Problem: Jumping on clouds
// Source: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
// Team:  Joel, Phen, Chang, Darius
// Date: 8/13/20

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let count = 0;
     for(let i = 0; i < c.length - 1; i++, count++){
         if(i < c.length-2 && c[i+2] === 0) i++;
     }
     return count;
}

