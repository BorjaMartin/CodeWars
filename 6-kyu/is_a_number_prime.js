/*
Define a function that takes an integer argument and returns a logical value true or false
depending on if the integer is a prime.

Per Wikipedia, a prime number (or a primer) is a natural number greater than 1
that has no positive divisor other than 1 and itself

Requirements
    - You can assume you will be given an integer input
    - You can not assume that the integer will be only positive. You may be
    given negative numbers as well(or 0)
    - NOTE on perfomrance: Ther are no fancy optimitzations required, but
    still the most trivial solutions might time out. Numbers go up to 2^31 (or simila, depending on language).
    Looping all the way up to n, or n/2, will be too slow.
*/


//Basic tests"	
    console.log(isPrime(0))
    console.log(isPrime(1))
    console.log(isPrime(2))
    console.log(isPrime(73))
    console.log(isPrime(75))
    console.log(isPrime(5099))
    


//Test prime"
    // isPrime(3)
    // isPrime(5)
    // isPrime(7)
    // isPrime(41)
    // isPrime(5099)
    


//Test not prime"
    // isPrime(4)
    // isPrime(6)
    // isPrime(8)
    // isPrime(9)
    // isPrime(45)
    // isPrime(-5)
    // isPrime(-8)
    // isPrime(-41)
    

function isPrime(num) {
    let isPrimeNumber = true;
    if (num <= 1 ) return false;
    const limit = Math.sqrt(num)
    for (let i = 2; i <= limit; i++) {
        if(num%i === 0) return false;
    }
    return isPrimeNumber;
  }
  