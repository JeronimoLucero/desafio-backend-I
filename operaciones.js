
const fs = require('fs');
const path = './citas.json';


function registrar(nombre, edad, tipo, color, enfermedad) {
  
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }

   
    let citas = JSON.parse(data);
    const nuevaCita = {
      nombre,
      edad,
      tipo,
      color,
      enfermedad,
    };
    citas.push(nuevaCita);

    
    fs.writeFile(path, JSON.stringify(citas, null, 2), (err) => {
      if (err) {
        console.error('Error al escribir en el archivo:', err);
        return;
      }
      console.log('Cita registrada con éxito');
    });
  });
}


function leer() {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }

    
    let citas = JSON.parse(data);
    if (citas.length === 0) {
      console.log('No hay citas registradas.');
    } else {
      console.log('Citas registradas:');
      citas.forEach((cita, index) => {
        console.log(`${index + 1}. ${cita.nombre} (${cita.tipo} ${cita.color} - ${cita.edad} años) - Enfermedad: ${cita.enfermedad}`);
      });
    }
  });
}

module.exports = { registrar, leer };
