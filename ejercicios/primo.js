function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Ejemplo de uso
  const numero = 14;
  const esNumeroPrimo = esPrimo(numero);
  console.log(`${numero} es primo?: ${esNumeroPrimo}`);
  