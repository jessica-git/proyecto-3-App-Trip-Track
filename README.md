![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# PROYECTO 3 | IRONHACK | WEB DEVELOPER

Proyecto creado ante la necesidad de planificar un viaje sin tener que abrir millones de blogs para ver la experiencia del usuario, en el lugar específico al que queremos viajar.

- Inspirarnos en viajes realizados por otros usuarios
- Crear nuestro viaje  y compartirlo con la comunidad
- Viajar con el itinerario y la planificación hecha por los demás aventureros
- Puntúa la creación de viajes de la comunidad 

## Instalación

1. Copia el fichero y renombra los siguientes ficheros: `server/.env.sample` a `server/.env` y `client/.env.sample` a `client/.env`

2. Ahora tenemos que ejecuar una serie de scripts para inicializar la base de datos: 
    - Desde la carpeta `server` ejecuta `node bin/initDatabase.js` para iniciar una base de datos vacia.
    - Desde la carpeta `server` ejecuta `node bin/seedsTravel.js` para inicializar la base de datos con datos de prueba. Gracias a esto, tendremos un usuario de prueba generado. Los datos de acceso son, usuario `jess@jess.com` y contraseña `1234`

