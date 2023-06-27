function ordenarArray(array) {
    const length = array.length;
  
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          // Intercambiar elementos
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  
    return array;
  }
  
  // Ejemplo de uso
  const numeros = [5, 3, 8, 1, 2];
  const arrayOrdenado = ordenarArray(numeros);
  console.log("Array ordenado:", arrayOrdenado);
  