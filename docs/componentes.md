# Documentación técnica de componentes

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

# DataTable<T>

## Descripción

`DataTable<T>` es un componente genérico reutilizable desarrollado con React y TypeScript.

Su objetivo principal es renderizar tablas dinámicas utilizando tipado estricto y Generics de TypeScript para garantizar:

- Seguridad de tipos
- Reutilización de lógica
- Escalabilidad
- Mejor mantenibilidad del código

---

# Características principales

- Uso de TypeScript Generics
- Renderizado dinámico de columnas
- Props completamente tipadas
- Arquitectura reutilizable
- Compatibilidad con diferentes modelos de datos
- Gestión de estado mediante React Hooks
- Integración con búsqueda dinámica

---

# Tipado genérico

El componente utiliza la siguiente estructura:

```ts
interface DataTableProps<T> {
  datos: T[];
  columnas: Columna<T>[];
}
```

Esto permite reutilizar el mismo componente para diferentes entidades manteniendo validación estricta de tipos.

---

# Restricción de tipos

El componente implementa:

```ts
T extends { id: string }
```

Esto obliga a que todas las entidades utilizadas dispongan de un identificador único.

De esta forma se mejora:

- La consistencia de datos
- La gestión de renderizado
- La identificación de elementos
- La seguridad estructural

---

# Gestión de estado

La edición de filas utiliza:

```ts
Partial<T>
```

Esto permite trabajar con objetos parcialmente editados sin perder el tipado original.

---

# Renderizado dinámico

Las columnas se generan utilizando:

```ts
keyof T
```

Esto asegura que únicamente se puedan utilizar propiedades válidas del modelo de datos.

---

# Arquitectura utilizada

El proyecto se organiza utilizando separación de responsabilidades:

```bash
src/
├── components/
├── data/
├── hooks/
├── types/
```

Cada carpeta mantiene una responsabilidad concreta dentro de la aplicación.

---

# Hooks utilizados

## useState

Utilizado para:

- Gestión de búsqueda
- Gestión de edición
- Estado de componentes


# Exhaustiveness checking

El proyecto implementa control exhaustivo de estados utilizando:

```ts
never
```

Esto garantiza que todos los estados posibles sean tratados correctamente dentro de estructuras discriminadas.

---

# Ventajas arquitectónicas

La implementación desarrollada aporta:

- Mayor mantenibilidad
- Reutilización de componentes
- Seguridad de tipos
- Escalabilidad futura
- Mejor organización del código
- Reducción de errores runtime
- Arquitectura frontend moderna

---

# Tecnologías utilizadas

- React
- TypeScript
- Vite
- ESLint
- CSS3
- Git
- GitHub

---

# Objetivos de aprendizaje

Durante esta práctica se trabajan conceptos como:

- Componentes genéricos
- Tipado avanzado
- Arquitectura frontend
- Gestión de estado
- Renderizado dinámico
- Reutilización de componentes
- Buenas prácticas de desarrollo

---

# Autor

**Ismael Contelles**  
Bootcamp Full Stack - 2026