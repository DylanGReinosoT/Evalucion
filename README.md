# Implementación de Proyecto de Adopción de Mascotas

Este proyecto implementa un sistema de adopción de mascotas utilizando un diseño de aplicaciones de 3 capas en el desarrollo web. El diseño consta de las siguientes capas:

1. **Presentación (Interfaz de usuario):** Implementada con React.
2. **Lógica de Negocio (Procesamiento de Datos):** Manejada en el frontend con React y en el backend con Express.
3. **Acceso a Datos (Interacción con la Base de Datos):** Simulada con archivos JSON en este ejemplo.

## Requisitos Previos

Asegúrate de tener instalado Node.js en tu sistema antes de ejecutar la aplicación. Puedes descargarlo desde [la página oficial de Node.js](https://nodejs.org/).

## Estructura del Proyecto

El proyecto sigue la estructura de una aplicación de 3 capas:

``` markdown
adopcion-mascotas/
|-- backend/
| |-- node_modules/
| |-- routes/
| |-- database/
| |-- server.js
| |-- dogs.js
| |-- adopters.js
| |-- adoptions.js
|-- frontend/
| |-- node_modules/
| |-- public/
| |-- src/
| |-- assets/
| |-- components/
| |-- App.jsx
| |-- AdoptionForm.jsx
| |-- index.jsx
| |-- package.json
|-- .gitignore
|-- README.md
```
## Implementación Paso a Paso

### 1. Clona el Repositorio

```bash
git clone https://github.com/tu-usuario/adopcion-mascotas.git
cd adopcion-mascotas
```
### 2. Configura el Backend
``` bash
cd backend
npm init -y
npm install express cors
```
Edita server.js y otros archivos según tus necesidades.

### 3. Configura el Frontend
```bash
cd frontend
npm init -y
npm install react react-dom
npm install -D @vitejs/plugin-react eslint
```
Edita ``App.jsx`` y otros archivos según tus necesidades.

### 4. Inicia el Servidor Backend
```bash
cd backend
npm start
```
El servidor estará disponible en [http://localhost:3001](http://localhost:3001).

### 5. Inicia la Aplicación Frontend
```bash
cd frontend
npm run dev
```
La aplicación estará disponible en http://localhost:3000.

### 6. Abre tu Navegador
Ve a [http://localhost:3000](http://localhost:3000) para ver la aplicación de adopción de mascotas.

¡Listo! Ahora puedes explorar y personalizar este proyecto de acuerdo con tus necesidades.