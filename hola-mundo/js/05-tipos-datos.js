'use strict'

//Operadores

var number1= 7;
var number2 = 12;
var operation = number1 + number2

alert("El resultado de la operacion es " + operation);

//tipos de datos
var integer = 44;
var string = "texto 'texto' texto";
var boolean = true; //or false

var false_num = '33';

console.log(Number(false_num)+7); //convertimos el texto a numero
console.log(parseInt(false_num)+7); //sin decimales
console.log(parseFloat(false_num)+7); //con decimales

console.log(String(integer)+7); //convertimos cualquer variable a texto

// nos devuelve que tipo de dato alamacena una variable
console.log(typeof integer);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof false_num);