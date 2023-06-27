const fs = require('fs');

const mensaje = 'Hola profe';

fs.writeFile('mensaje.txt', mensaje, (error) => {
  if (error) {
    console.error('Ocurrió un error al escribir el archivo:', error);
  } else {
    console.log('El archivo se ha escrito correctamente.');
  }
});
