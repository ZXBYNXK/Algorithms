// Birthday Cake Candles Algorithm 
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(ar) {
    let [highNumber, qty] = [0, 1];
    ar.filter((num) => {
        num > highNumber ? [highNumber, qty] = [num, 1] : false;
        num === highNumber ? ++qty : false; 
    })
    return qty;
}

// DEBUG
console.log(birthdayCakeCandles([3, 3, 2, 1]));