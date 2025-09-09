ToDo_List

Aplicación de gestión de tareas desarrollada con React y Vite. Permite agregar, marcar, eliminar y filtrar tareas, además de mostrar estadísticas básicas en tiempo real.




Descripción

ToDo_List es una aplicación de gestión de tareas (Todo List) que permite a los usuarios:

Agregar nuevas tareas

Marcar tareas como completadas

Eliminar tareas

Ver estadísticas de tareas pendientes, completadas y totales

Filtrar tareas según su estado (opcional)

El proyecto fue desarrollado aplicando conceptos fundamentales de React como:

Componentes

Props

Hooks (useState)

Programación funcional




Tecnologías utilizadas

React
 — Biblioteca para interfaces de usuario

Vite
 — Entorno de desarrollo rápido

JavaScript
 — Lógica y funcionalidad

CSS
 — Estilos y diseño

Git
 & GitHub
 — Control de versiones




Instalación y ejecución
1. Clonar el repositorio
git clone https://github.com/viccelis/ToDo_List.git

2. Acceder al proyecto
cd ToDo_List

3. Instalar dependencias
npm install

4. Ejecutar en modo desarrollo
npm run dev




Funcionalidades

✅ Agregar tareas — Añade nuevas tareas a la lista
✅ Marcar tareas como completadas — Cambia su estado dinámicamente
✅ Eliminar tareas — Quita tareas individualmente
✅ Estadísticas básicas — Contador de tareas totales, completadas y pendientes
✅ Validaciones — Evita agregar tareas vacías
✅ Diseño responsivo — Adaptable a móviles, tablets y escritorio



Estructura del proyecto
ToDo_List/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx       # Formulario para agregar tareas
│   │   ├── TodoList.jsx       # Renderiza la lista de tareas
│   │   ├── TodoItem.jsx       # Representa cada tarea individual
│   │   └── Stats.jsx          # Muestra estadísticas de tareas
│   ├── App.jsx               # Componente principal
│   ├── App.css               # Estilos principales
│   ├── main.jsx              # Punto de entrada
├── .gitignore
├── package.json
├── vite.config.js
└── README.md