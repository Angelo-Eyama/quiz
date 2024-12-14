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
```

## Requisitos

Para que la aplicación funcione correctamente, las preguntas y respuestas deben seguir el patrón especificado en el archivo `preguntasASI.json`.

## Instalación y Ejecución

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia la aplicación en modo desarrollo con `npm run dev`.
4. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Scripts Disponibles

- `npm run dev`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run lint`: Ejecuta ESLint para encontrar y arreglar problemas en el código.
- `npm run preview`: Previsualiza la aplicación construida.

## Personalización

Puedes personalizar las preguntas y respuestas editando el archivo `preguntasASI.json`. Asegúrate de seguir el formato especificado para evitar errores.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalle.
```