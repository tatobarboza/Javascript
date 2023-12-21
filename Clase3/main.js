function calculadora(numeroUno, numeroDos, operacion) {
    switch (operacion) {
      case "+":
        return numeroUno + numeroDos;
      case "-":
        return numeroUno - numeroDos;
      case "*":
        return numeroUno * numeroDos;
      case "/":
        return numeroUno / numeroDos;
      default:
        return "Operación  no definida";
    }
  
  }
  
  let numeroUno = Number(prompt("Ingrese el primer número"));
  let operacion = prompt("Ingrese la operacion");
  let numeroDos = Number(prompt("Ingrese el segundo número"));

  
  let resultado = calculadora(numeroUno, numeroDos, operacion);
  alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);