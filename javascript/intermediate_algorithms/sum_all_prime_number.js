//Darius Rain

//Date: 12/23/19

//Algorithm: Sum all prime numbers

/*
    A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 
    2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

    Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/


function sumPrimes(num) {
    let prime_not_found = true,
    prime_count = 2,
    main_count = 2,
    all_primes = 0;

    do {
       // console.log('run')
         
        if(main_count % prime_count != 0 && prime_count != main_count && main_count % 3 != 0 && main_count % 4 != 0 && main_count % 5 != 0 && main_count % 6 != 0){
            all_primes += main_count
        }
        


        if(main_count === num){
            prime_not_found = false;
        }
        ++main_count
    }while(prime_not_found)
return all_primes
}
  
  console.log(sumPrimes(10));




    






















