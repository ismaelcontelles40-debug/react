# Práctica 4 - React + TypeScript

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

# Descripción del proyecto

Repositorio desarrollado para la práctica de React + TypeScript del bootcamp, centrado en la creación de componentes reutilizables, tipado estricto y arquitectura frontend moderna.

El objetivo principal es aplicar buenas prácticas de desarrollo frontend utilizando React junto con TypeScript para construir interfaces mantenibles, seguras y escalables.

---

# Funcionalidades implementadas

El proyecto incluye:

- Componentes reutilizables con tipado genérico
- Tabla dinámica utilizando `DataTable<T>`
- Búsqueda dinámica de usuarios
- Gestión de estado con React Hooks
- Uso de `Partial<T>`
- Exhaustiveness checking con `never`
- Arquitectura organizada por carpetas
- Diseño responsive
- Renderizado dinámico de datos

---

# Componentes principales

## DataTable<T>

Componente genérico reutilizable capaz de renderizar tablas dinámicas utilizando TypeScript Generics.

### Características

- Tipado estricto
- Reutilización de lógica
- Renderizado dinámico
- Props tipadas
- Arquitectura escalable

---

# Hooks utilizados

## useState

Utilizado para gestionar el estado de búsqueda y edición de datos.

## useMemo

Aplicado inicialmente para optimización del filtrado dinámico y mejora del rendimiento.

---

# Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS3
- ESLint
- Git
- GitHub

---

# Estructura del proyecto

```bash
react/
│
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── types/
│   ├── App.tsx
│   └── App.css
│
├── docs/
├── public/
├── package.json
└── README.md
```

---

# Objetivos de aprendizaje

Durante esta práctica se trabajan conceptos como:

- React moderno
- TypeScript avanzado
- Componentes genéricos
- Tipado estricto
- Arquitectura frontend
- Renderizado dinámico
- Gestión de estado
- Buenas prácticas de desarrollo

---

# Instalación y ejecución

## Instalar dependencias

```bash
npm install
```

## Ejecutar entorno de desarrollo

```bash
npm run dev
```

## Compilar para producción

```bash
npm run build
```

## Ejecutar ESLint

```bash
npm run lint
```

---

# Ventajas del proyecto

La arquitectura desarrollada permite:

- Mejor organización del código
- Reutilización de componentes
- Mayor escalabilidad
- Código más mantenible
- Separación clara de responsabilidades
- Mejor experiencia de desarrollo con TypeScript

---

# Autor

**Ismael Contelles**  
Bootcamp Full Stack - 2026