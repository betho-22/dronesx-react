# Drones X - Módulo de login y registro (React)

Módulo web del proyecto Drones X (SENA), desarrollado con React.
Evidencia GA7-220501096-AA3-EV01.

## Tecnologías
- React (componentes y estado con hooks)
- Vite (herramienta de desarrollo)
- Oxlint (revisión de estándares de código)
- localStorage del navegador (simula la base de datos en esta etapa)

## Funcionalidades
- Registro de usuario: documento, nombre completo, fecha de nacimiento, celular, correo y contraseña
- Validaciones: documento numérico, celular de 10 dígitos, contraseña de mínimo 4 caracteres y documento no repetido
- Inicio de sesión con documento y contraseña
- Pantalla de bienvenida y cierre de sesión

## Estructura
- `src/components`: componentes Login y Registro
- `src/services`: servicio de usuarios (registro y validación)
- `src/App.jsx`: componente principal que controla las pantallas

## Cómo ejecutarlo
1. Instalar Node.js (versión LTS)
2. Instalar dependencias: `npm install`
3. Iniciar el servidor: `npm run dev`
4. Abrir `http://localhost:5173/`

## Autor
Adalberto Acosta Toncel
