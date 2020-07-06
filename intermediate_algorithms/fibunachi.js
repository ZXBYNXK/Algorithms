//Darius Rain   
//Date: 12/20/19
//Algorithm: Fibuncachi
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/
function sum_fibs(num){
    let fib_num = 1,
    prev_num = 0,
    first_run = true,
    sum_all_odd = 0;
    while(num >= fib_num){  
      if(first_run){
            fib_num += prev_num
            first_run = false;
     
       
            
        }else {
           fib_num += prev_num
           prev_num = fib_num - prev_num

            if(fib_num % 2 > 0){
                console.log('odd',fib_num)
                if(fib_num <= num){
                sum_all_odd += fib_num
                }
            }else {
                console.log('even', fib_num)
            }
        }
    }


console.log('Final', fib_num)
console.log('Sum', sum_all_odd + 1)
}
//1785
console.log(sum_fibs(1000))
