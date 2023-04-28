/*
*   ACTIVITY - 1
*   PROBLEM - 3
*   DURATION - 20 minutes

*   Write JavaScript function that checks whether the value of given parameter is a vowel or not. 
*   The function must return 1 if the given value is a vowel else it should return 0.
*/

function isVowel(char){
    var vowels=["a","e","i","o","u"];
    return vowels.includes(char.toLowerCase()) ? 1 : 0;
}
console.log(isVowel('A'));