// Input: 6
// 5 spaces 1 hash
// 4 spaces 2 hashes
// 3 spaces 3 hashes
// 2 spaces 4 hashes
// 1 space 5 hashes
// 6 hashes

// Joel : While loop & Array w/ join()
// Chang : For loop 
// David : Correct number of spaces & hashtags, construct the string to output.
// Darius : Loop with "#".repeat(i)

function staircase(n) {
    let hash= '#';
    for (var i = 1; i <= n; ++i) {
        let value = n - i;
        let spaces = " ".repeat(value);
        let hashes = hash.repeat(n);
        let fullstring = spaces + hashes;

        fullstring = fullstring.substring(0,n);

        // console.log(spaces, i);

        console.log(fullstring);
        


        // i = hashes
        // n - i = spaces
    }
}
staircase(6)