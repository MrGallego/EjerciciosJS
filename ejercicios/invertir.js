function invertirString(str) {
    return str.split('').reverse().join('');
  }
  
  // Ejemplo de uso
  const texto = "Hola mundo!";
  const textoInvertido = invertirString(texto);
  console.log("Texto invertido:", textoInvertido);
  