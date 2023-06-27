const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Ocurrió un error al leer el archivo:', error);
  } else {
    console.log('Contenido del archivo:');
    console.log(data);
  }
});
