alert("Bienvenido al calculador de cuotas")
let resultado = 0 

function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}

let porcentaje = (1.05)

let operacion = (PP, porcentaje, cuotas) => {
    switch (cuotas) {
        case "1":
            return (multiplicacion(PP,porcentaje))
        case "2":
            return (PP * porcentaje) * porcentaje;
        case "3":
            return ((PP * porcentaje) * porcentaje) * porcentaje;
        case "6":
            return (((PP * porcentaje) * porcentaje) * porcentaje) *  porcentaje;
        case "12":
            return ((((PP * porcentaje) * porcentaje) * porcentaje) *  porcentaje) * porcentaje;
        default:
            return `El numero ${cuotas} no está disponible, Ingrese otro número.`;
    }
}

let PP = Number(prompt("Ingrese el precio del producto"));
let cuotas = prompt("Ingrese el numero de cuotas");

resultado = operacion(PP, porcentaje, cuotas);
mostrarCuotas = `  
Para el precio ${PP} en ${cuotas} cuotas(s)
El precio final a pagar es ${resultado}`
alert(mostrarCuotas);
