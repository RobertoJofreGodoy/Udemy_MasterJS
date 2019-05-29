'use strict'

// test with Let & var

// test VAR
var number = 40;
console.log(number); // value 40

if(true){
    var number = 50;
    console.log(number); // value 50
}
console.log(number); // value 50

//test LET

let text = "curso JS"; 
console.log(text); //value 'curso JS'

if(true){
    let text = "curso laravel 5"; 
    console.log(text); //value 'curso laravel 5'
}
console.log(text); //value 'curso JS'