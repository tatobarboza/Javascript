
alert("Bienvenido al calculador de cuotas")

let PP = Number(prompt("Ingrese el precio del producto"));
let cuotas = parseInt(prompt("Ingrese el numero de cuotas"));
let porcentaje = Number("0,05");
let suma = (numero1, numero2) => numero1 + numero2;
let multiplicacion = (numero1, numero2) => numero1 * numero2;

let resultadoCuotas = (precioProducto, cuotas) => {
    switch (cuotas) {
        case "1":
            return suma(multiplicacion(PP, porcentaje), PP);
        case "2":
            return suma(multiplicacion(suma(multiplicacion(PP, porcentaje), PP), porcentaje), PP);
        case "3":
            return suma(multiplicacion(suma(multiplicacion(suma(multiplicacion(PP, porcentaje), PP), porcentaje), PP), porcentaje), PP)
        case "6":
            suma(multiplicacion(suma(multiplicacion(suma(multiplicacion(suma(multiplicacion(PP, porcentaje), PP), porcentaje), PP), porcentaje), PP), porcentaje), PP)
        case "12":
            suma(multiplicacion(suma(multiplicacion(suma(multiplicacion(suma(multiplicacion(suma(multiplicacion(PP, porcentaje), PP), porcentaje), PP), porcentaje), PP), porcentaje), PP), porcentaje), PP)
        default: 
            return `El numero ${cuotas} no está disponible, Ingrese otro número.`  
    }
}

mostrarCuotas += `
Para el precio ${PP} en ${cuotas} cuotas(s)
El precio final a pagar es ${resultadoCuotas}`
alert(mostrarCuotas);
