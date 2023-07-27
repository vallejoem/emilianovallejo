const prompt = require("prompt-sync")({ sigint: true });

let a;

do {
    console.log("----------------------------------------");
    console.log("---------------Elija la operacion que desea realizar----------------------");
    console.log("-Ingrese 1 para Sumar----------------------");
    console.log("-Ingrese 2 para Restar---------------------");
    console.log("-Ingrese 3 para Multiplicar----------------");
    console.log("-Ingrese 4 para Dividir--------------------");
    console.log("-Ingrese 5 para Salir----------------------");

    a = parseInt(prompt("Ingrese una operacion: "));

    if(a >= 1){ 

        const sumar = () => {
            console.log("---------------------------------");
            let x = parseInt(prompt("---Ingrese un valor: ---"));
            let i = 0
            while (i <= 10) {
                let resultado = x + i;
                console.log(x + " + " + i + "=" + resultado);
                i++;
            }
        }

        const restar = () => {
            console.log("---------------------------------");
            let x = parseInt(prompt("---Ingrese un valor: ---"));
            let y = x;
            let i = 0;
            while (i <= 10) {
                let resultado = y - x;
                console.log(y + " - " + x + " = " + resultado);
                i++;
                y += 1;
            }
        }

        const multiplicar = () => {
            console.log("---------------------------------");
            let x = parseInt(prompt("---Ingrese un valor: ---"));
            let i = 0;
            while (i <= 10) {
                let resultado = x * i;
                console.log(x + " * " + i + " = " + resultado);
                i++;
            }
        }

        const dividir = () => {
            console.log("---------------------------------");
            let x = parseInt(prompt("---Ingrese un valor: ---"));
            let i = 1;
            while (i <= 10) {
                let resultado = x * i;
                let division = resultado / i;
                console.log(resultado + " / " + division + " = " + i);
                i++;
            }
        }

        switch (a) {
            case 1:
                sumar();
                break;
            case 2:
                restar();
                break;
            case 3:
                multiplicar();
                break;
            case 4:
                dividir();
                break;
            default:
                console.log("No es una opcion correcta");
                break;
        }
    }
    else{
        console.log("Ingrese una opcion valida");
    }
}
while (a !== 5) {
    console.log("Adios");
}


