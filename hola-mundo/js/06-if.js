'use strict'

//CONDICIONAL IF
// ej 1
var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
    console.log("Edad uno es mayor");
} else {
    console.log("Edad uno es inferior");
}

//ej 
var age = 18;
var name = "Luka Jovic";

if( age >= 18){
    console.log(name + " tiene "+age+" anios, es mayor de edad");
    if(age <= 33){
        console.log("todavia eres milenial");
    }else if(age >= 70){
        console.log("eres un anciano");
    }else{
        console.log("ya no eres un milenail");
    }
}else{
    console.log(name + " tiene "+age+" anios, es menor de edad")
}

/*
    OPERADORES LOGICOS
    &&  (and)
    ||  (or)
    !   (negacion)
*/

var year = 2018;

if (year != 2016){
    console.log("El anio no es 2016, estamos en "+ year);
}


if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era Post moderna");
}

if(year =- 2008 || (year >= 2018 && year == 2028)){
    console.log("El anio acaba en 8");
}else{
    console.log("Anio no registrado");
}

