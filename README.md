# indoor-location-ble
Sistema de posicionamiento de interiores con una precisión de ±1 metro.

## directorio /raspberrypi
#### Descripción:
Contiene un beacon bluetooth que se inicia con Docker. Para ejecutar el beacon hay que construir la imagen y ejecutar: `docker run -it --net host --rm cvlzg/rpi-beacon`.

El dockerfile base está en `./dockerfile-beacon-env`. La imagen esta en dockerhub `cvlzg/rpi-beacon-env`. Para ejecutarla desde el proyecto de node: `docker run --net host -it --rm -v "${PWD}:/code" cvlzg/rpi-beacon-env`, nos cargará el directorio actual en /code del contenedor docker. A continuación ejecutar `npm install` y luego `node app.js`. Esto nos da agilidad en el desarrollo.

#### Conexión por ssh:
La raspberrypi tiene activado ssh, basta desde el host ejecutar `ssh pi@raspberrypi.local`.
