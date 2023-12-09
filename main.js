
alert("Bienvenido al calculador de cuotas")

let suma = (numero1, numero2) => numero1 + numero2;
let multiplicacion = (numero1, numero2) => numero1 * numero2;

let PP = Number(prompt("Ingrese el precio del producto"));
let cuotas = Number(prompt("Ingrese el numero de cuotas"));
let porcentaje = parseFloat("0,05");

let cuota1 = suma(multiplicacion(PP, porcentaje), PP);
let cuota2 = suma(multiplicacion(cuota1, porcentaje), PP);
let cuota3 = suma(multiplicacion(cuota2, porcentaje), PP);
let cuota6 = suma(multiplicacion(cuota3, porcentaje), PP);
let cuota12 = suma(multiplicacion(cuota6, porcentaje), PP);

let operacion = (cuotas) => {
    switch (cuotas) {
        case "1":
            return `${cuota1}`;
        case "2":
            return `${cuota2}`;
        case "3":
            return `${cuota3}`;
        case "6":
            return `${cuota6}`;
        case "12":
            return `${cuota12}`;
        default:
            return `El numero ${cuotas} no está disponible, Ingrese otro número.`;
    }
}
let resultado = operacion(cuotas);
mostrarCuotas += `
Para el precio ${PP} en ${cuotas} cuotas(s)
El precio final a pagar es ${resultado}`
alert(mostrarCuotas);
