# Aplicación de Test de Conocimientos

Esta aplicación es un test interactivo para evaluar los conocimientos de una asignatura. Está desarrollada con React y TypeScript, y utiliza Vite como herramienta de construcción. La aplicación presenta una serie de preguntas con múltiples opciones de respuesta y permite al usuario navegar entre las preguntas, responderlas y ver si su respuesta es correcta o incorrecta.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de directorios:


``` textplain
.
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── footerButtons.tsx
│   │   └── Question.tsx
│   ├── data/
│   │   └── preguntas.json          # Archivo con las preguntas y respuestas
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
|__ generate_questions.py          # Script de python para generar preguntas y respuestas
|__ preguntas.txt                  # Archivo con las preguntas y respuestas (puede ser modificado)
```

## Requisitos

Para que la aplicación funcione correctamente, las preguntas y respuestas deben seguir el patrón especificado en el archivo `preguntas.json`.

## Instalación y Ejecución

1. Clona el repositorio.
2. Navega al directorio del proyecto.
3. Instala las dependencias con `npm install`.
4. Inicia la aplicación en modo desarrollo con `npm run dev`.
5. Abre tu navegador y navega a `http://localhost:5173` para ver la aplicación en funcionamiento.

## Scripts Disponibles

- `npm run dev`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Construye la aplicación para producción.

## Script de python
Este archivo se encarga de leer un archivo txt con las preguntas del tema a evaluar y generar un archivo json con las mismas. Para ejecutarlo, se debe correr el siguiente comando:

```bash
python3 generate_questions.py
```

Asegurense de tener instalado python3 en su computadora.
Tambien de tener un archivo 'preguntas.txt' con las preguntas y respuestas. El formato de las preguntas y respuestas debe ser el siguiente:

```markdown
Tema 1: Introducción
1. Unas de estas opciones NO es un tipo de Sistema Operativo
a) Distribuido
b) En red
c) Monolítico*
d) Por lotes

...

Tema 2: Windows Server
1. ¿Qué servicio de Windows Server se utiliza para la gestión de usuarios y equipos a través de directivas?
a) IIS
b) SQL Server
c) Active Directory *
d) Azure

..etc
```
**NOTA: El script está programado para que, en caso de no poder identificar correctamente, se rellene el enunciado o la opcion con la frase "texto faltante". Verifica el json generado para ver si se ha generado correctamente**

## Personalización

Puedes personalizar las preguntas y respuestas editando el archivo `preguntas.json`. Asegúrate de seguir el formato especificado para evitar errores.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalle.