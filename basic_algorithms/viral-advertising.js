// Problem: Viral Advertising
// Source: https://www.hackerrank.com/challenges/strange-advertising/problem
// Team:  Joel, Phen, Chang, Darius
// Date: 8/13/20

// Complete the viralAdvertising function below.
function viralAdvertising(days) {
    let likes = 0;
    let shared = 5;
    let counter = 1;
    let totalLikes = 0;
  
    while (counter <= days) {
      likes = Math.floor(shared / 2);
      shared = likes * 3;
      totalLikes += likes;
      counter++;
    }
  
    return totalLikes;
  }