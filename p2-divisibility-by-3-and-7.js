/*
*   ACTIVITY - 1
*   PROBLEM - 2
*   DURATION - 20 minutes

*   Write JavaScript function that checks whether the value of parameter passed to the function is divisible by 3 and 7 both. 
*   The function should return 1 if the number is divisible else it should return 0.
*/
function divisible(num){
    return num%3==0 && num%7==0 ? 1 :0;
}
console.log(divisible(249));