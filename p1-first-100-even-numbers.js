/*
*   ACTIVITY - 1
*   PROBLEM - 1
*   DURATION - 20 minutes

*   Write JavaScript function to display the first 100 even numbers.
*/
function evenNumber(){
    let count=0;
    for(let i=2; i<=200; i++){
       if(i%2==0)
       {
        console.log(i);
        count++;
       } 
       if(count==100){
        break;
       }
    }
}

evenNumber();