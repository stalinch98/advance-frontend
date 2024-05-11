# Pico y Placa Predictor
Este proyecto es una aplicación Angular que permite a los usuarios verificar si su vehículo puede circular en un día y hora específicos según las reglas del Pico y Placa.

## Requisitos

- Node.js
- Angular CLI
- Un servidor de API que responda a la ruta /isValidToDrive

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta npm install para instalar las dependencias del proyecto.
4. Asegúrate de que tu servidor de API esté en funcionamiento.

## Uso

- Ejecuta ng serve para iniciar el servidor de desarrollo de Angular.
- Abre un navegador web y navega hasta http://localhost:4200.
- Introduce la matrícula de tu vehículo y la fecha y hora que deseas verificar.
- Haz clic en el botón "Verificar" para comprobar si tu vehículo puede circular en la fecha y hora especificadas.

## Funcionalidades

- Verificación de Pico y Placa: Los usuarios pueden verificar si su vehículo puede circular en una fecha y hora específicas.
- Validación de formulario: Los campos de matrícula y fecha/hora son obligatorios. La matrícula debe seguir el formato 'AAA1111'. La fecha y hora no pueden ser anteriores a la fecha y hora actuales.