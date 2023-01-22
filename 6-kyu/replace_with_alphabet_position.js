/*
Description:
In this Kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything is the text isn't a letter, ignore it and don't return it 

Example:
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/

//Test 1
//console.log(alphabetPosition("The sunset sets at twelve o' clock.")); //return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

//Test 2
console.log(alphabetPosition("v(8}9nn0")) //retrun "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"


function alphabetPosition(text) {
    function numericLetter(letter) { 
        if (letter.charCodeAt(0) - 64 && /^[a-z]+$/.test(letter)) 
        return parseInt(letter, 36) - 9;
    } 
    
    return text
        .toLowerCase()
        .split('')
        .map((v) => {
           return numericLetter(v)  ;
        }).filter(notUndefined => notUndefined !== undefined && notUndefined >= 0)
        .join(' ')
        .toString()
  }