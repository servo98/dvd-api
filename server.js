import api from './api/api.js';
import http from 'http';

const port = 3000;

const server = http.createServer(api);
server.on('listening', onListening);
server.on('error', onError);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Servidor escuchando ✅ en ${bind}`);
}

function onError(error) {
  switch (error.code) {
    case 'EACCES':
      console.error('El sistema no tiene permisos suficientes 🔴');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('El puerto con esa dirección ya están siendo usados 😢');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

server.listen(port);
