//Ejercicio 1
const prompt = require("prompt-sync")({ sigint: true });
let x = parseInt(prompt("Ingrese un valor: "));
let y = parseInt(prompt("Ingrese un valor: "));
let z = parseInt(prompt("Ingrese un valor: "));

if(isNaN(x) || isNaN(y) || isNaN(z)){
    console.log("error tiene que ingresar un numero");
}
else {
        if (Number.isInteger(x) && Number.isInteger(y) && Number.isInteger(z)) {
            let max = x;
            if (y > max) {
                max = y;
            }
            if (z > max) {
                max = z;
            }
        
            let min = x;
            if (y < min) {
                min = y;
            }
            if (z < min) {
                min = z;
            }
            console.log(max + ' este es el mayor de los numeros ' + min + ' este es el menor de los numeros');
        }

        else {
            console.log("Ingrese un valor numerico");
        }
        
    
}



//Ejercicio 2

let a = parseInt(prompt("Ingrese un valor del 0 al 9: "));

if (Number.isInteger(a)) {
    if (a >= 0 && a <= 10) {
        for(let i=1; i<=10; i++){
            let resultado = a*i;
            console.log(a +' X ' + i + ' = '+ resultado);

        }
    }
    else{
        console.log("el numero debe ser entre 0 y 9");
    }
}
else {
    console.log("Ingrese un valor numerico");
}

//Ejercicio 3

let b = parseInt(prompt("Ingrese un valor del 0 al 9: "));

if (Number.isInteger(b)) {
    if (a >= 0 && a <= 10) {
        for(let i=1; i<=10; i++){
            let resultado = b*i;
            let division = resultado/i;
            console.log(resultado +' % ' + division + ' = '+ i);

        }
    }
    else{
        console.log("el numero debe ser entre 0 y 9");
    }
}
else {
    console.log("Ingrese un valor numerico");
}




