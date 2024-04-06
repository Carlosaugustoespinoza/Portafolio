function factorial(n) {
    // El factorial de 0 y 1 es siempre 1
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // Inicializamos el resultado del factorial como 1
    let resultado = 1;
  
    // Multiplicamos todos los números del 1 al n para obtener el factorial
    for (let i = 1; i <= n; i++) {
      resultado= resultado* i;
    }
  
    return resultado;
  }
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(4)); // Output: 6
console.log(factorial(5)); // Output: 120