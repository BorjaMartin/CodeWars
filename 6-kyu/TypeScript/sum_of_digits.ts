/*
Digital root is the recursive sum of all the difits in a number
Given n, take the sum of the digits of n. If that value 
has more than one digit, continue reducing in this way until a single-digit number is produced.
Th input will be a non-negative integer.

Example:     
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));

export const digitalRoot = (n:number):number => {
    let sumNum:number = n;
    while(sumNum>=10){
        sumNum = sumNum.toString()
            .split('')
            .reduce((sum, num) => sum += parseInt(num), 0)
    }
    return sumNum;
};