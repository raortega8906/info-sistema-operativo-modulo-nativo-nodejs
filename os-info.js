const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('-----------------------------------')

console.log('Nombre del sistema operaativo:', os.platform())
console.log('Versión del sistema operaativo:', os.release())
console.log('Arquitectura del sistema operaativo:', os.arch())
console.log('CPUs:', os.cpus())
console.log('Memoria libre:', os.freemem() / 1024 / 1024)
console.log('Memoria total:', os.totalmem() / 1024 / 1024)
console.log('Cantidad de horas encendido el Mac:', os.uptime() / 60 / 60)