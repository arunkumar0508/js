/*
*   ACTIVITY - 2
*   PROBLEM - 1
*   DURATION - 60 minutes

*   Write test code for the JavaScript program written inside the file `check-age.js`. 
*   This file is located inside the `solution` folder of `activity-2` folder of the boilerplate.
*/
const expect = require('chai').expect;
const solution = require('../solution/check-age');

describe('Solution', function(){
    it('should have function checkage()',function(){
        expect(typeof solution.checkAge).to.be.equal('function');
    });
});

describe('checkage', function(){
    it('should return a message "Invalid age" if age is less than 0 or age is more than 125',function(){
        const age=solution.checkAge(129);
        expect(age).to.be.equal("Invalid age");
    });
    it('should return a message "Child" if age is less than or equal to 12 or age is more than 0',function(){
        const age=solution.checkAge(11);
        expect(age).to.be.equal("Child");
    });
    it('should return a message "Teenager" if age is less than 20 or age is more than 12',function(){
        const age=solution.checkAge(19);
        expect(age).to.be.equal("Teenager");
    });
    it('should return a message "Adult" if age is less than 60 or age is more than 20',function(){
        const age=solution.checkAge(29);
        expect(age).to.be.equal("Adult");
    });
    it('should return a message "Senior Citizen" if age is less than 125 or age is more than 60',function(){
        const age=solution.checkAge(75);
        expect(age).to.be.equal("Senior Citizen");
    });

})