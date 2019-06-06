'use strict'

// CONDICIONAL SWITCH

var age = 21;
var print = "";

switch(age){
    case 18:
        print = "eres mayor de edad";
    break;

    case 25:
        print ="ya eres un adulto";
    break;

    case 40:
        print ="crisis de los 40";
    break;

    case 75:
        print ="ya eres un anciano";
    break;

    default:
        print ="tu edad es neutra";
    break;
}

console.log(print);