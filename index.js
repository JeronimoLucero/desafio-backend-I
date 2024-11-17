
const { registrar, leer } = require('./operaciones');


const args = process.argv.slice(2);


if (args.length === 0) {
  console.log('Por favor, especifique una operación: "registrar" o "leer".');
  process.exit(1);
}


const operacion = args[0];

if (operacion === 'registrar') {
  if (args.length < 6) {
    console.log('Faltan parámetros para registrar. Se necesitan los siguientes: nombre, edad, tipo, color y enfermedad.');
    process.exit(1);
  }
  
  const [nombre, edad, tipo, color, enfermedad] = args.slice(1);
  registrar(nombre, parseInt(edad), tipo, color, enfermedad);
} else if (operacion === 'leer') {
  leer();
} else {
  console.log('Operación no reconocida. Usa "registrar" o "leer".');
}
