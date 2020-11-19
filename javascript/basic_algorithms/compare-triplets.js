// Compare Triplets Algorithm.
'use strict';
function compareTriplets(a, b) {
    let aCount = 0, bCount = 0;
    for(let i = 0; i < a.length || i < b.length; i++)
    {
        a[i] > b[i] ? ++aCount : false;
        a[i] < b[i] ? ++bCount : false;
    }
    return [aCount, bCount];
}

console.log("Compare Triplets:", compareTriplets([1, 2, 4, 8, 19, 32], [2, 1, 5, 19, 20, 52]))