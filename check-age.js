/*
*   ACTIVITY - 2
*   PROBLEM - 1
*   DURATION - 60 minutes

*   The JavaScript solution for check age functionality is given below:
*/

function checkAge(age) {
    if(age<=0 || age>125)
        return "Invalid age";
    else if(age <= 12)
        return "Child";
    else if(age < 20)
        return "Teenager";
    else if(age < 60) 
        return "Adult";
    else
        return "Senior Citizen";
}

/*  Write test code for the solution code given above in the `check-age-script.js` file.
*   The file is located inside the `test` folder of the `activity-2` folder of the boilerplate.
*/

/* Do Not Delete the code given below: */
module.exports = {
    checkAge
}