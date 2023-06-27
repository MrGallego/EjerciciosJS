function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Ejemplo de uso
  const numero = 6;
  const resultado = factorial(numero);
  console.log(`El factorial de ${numero} es: ${resultado}`);
  