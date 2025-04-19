// use of const and let instead of var
const message = "Laker" ;
console.log (message);

let count = 0;
count++;
console.log('Count:'  + count);

//template literals
const name = "Jok";
const greet = `Welcome ${name}`;
console.log (greet);

//destructuring
const car = 
{
    brand:"Toyota",
    yearModel: 2025
};

const {x,y} = car;

console.log ('Brand: ' + brand);
console.log ('Year: ' + yearModel);


const numbers = [1,2,3];
const [first, second] = numbers;

console.log ('1st:' + first);
console.log ('2nd:' + second);

//class
class airplane {
    constructor (company)
    {
        this.company = company;
    }
    fly () {
        console.log ('fly!!');
    }
}
const plane = new airplane("PAL");
plane.fly();
plane.company;
console.log("Company:" + c);

// Modules (Import/Export)
export const salary = (a,b) => a * b;
export const rate = 455.50;

//import payroll js
import {pay, rate} from 'salary.js'
console.log(pay(rate,30));