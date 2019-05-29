'use strict' //modo estricto para programar de manera correcta
// VARIABLES
// una variable es un contenedor de informacion

var country = "Spain";
var continent ="Europe";
var antiquity = 2019;
var country_and_continent = country + ' ' +continent;
let test = "hola";
/* 
'let' permite definir variables limitnado su alcance al bloque, declaracion o expresion donde se esta utilizando.
'var' define una variable global sin inportar el ambito del bloque
*/

alert(test);

country = "Mexico";
var continent ="America";

console.log(country, continent,antiquity); 
alert(country_and_continent);