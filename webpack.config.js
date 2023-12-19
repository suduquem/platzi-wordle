const path = require('path');

module.exports = {
  entry: './src/index.js', // Archivo de entrada, se le pasa el path
  output: { // Configuración del bundle que emite el archivo index.js
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
		// __dirname es la dirección actual de la carpeta
		// public es la carpeta dónde se guardará el bundle
  },
  mode: 'development', // Se habilita el modo de Desarrollo
};