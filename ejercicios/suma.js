function sumarNumeros() {
    const numeros = Array.from(arguments);
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  
  // Ejemplo de uso
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Ingrese los números separados por espacios: ', (input) => {
    const numeros = input.split(' ').map(Number);
    const resultado = sumarNumeros(...numeros);
    console.log('La suma de los números es:', resultado);
    rl.close();
  });
  