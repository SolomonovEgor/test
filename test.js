'use strict'
//№1
let var1 = 'Я изучаю JavaScript';

console.log(var1[2],var1[0],var1[var1.length-1]);
console.log(var1.charAt(2),var1.charAt(0),var1.charAt(var1.length-1));
console.log(var1.slice(2,3),var1.slice(0,1),var1.slice(length-1));
console.log(var1.substring(2,3),var1.substring(3,2),var1.substring(0,1),var1.substring(1,0),var1.substring(var1.length-1,var1.length));

//№2
let var2 = 'Я изучаю JavaScipt';

let newVal = ' Frontend';

var2 = var2.slice(0,7) + var2[var2.indexOf('ю')].toUpperCase() + newVal;

console.log(var2);