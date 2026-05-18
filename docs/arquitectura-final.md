# Arquitectura Final - React + TypeScript

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

# Descripción

Este documento explica cómo el uso de TypeScript dentro de una aplicación React ayuda a reducir errores en tiempo de ejecución y mejora la mantenibilidad del proyecto.

La práctica se ha desarrollado utilizando componentes reutilizables, tipado estricto, genéricos, tipos de utilidad, uniones discriminadas y una librería externa para el cálculo de fechas.

---

# Genéricos

El componente principal `DataTable<T>` utiliza genéricos para poder trabajar con diferentes modelos de datos sin perder seguridad de tipos.

Esto permite reutilizar el mismo componente para distintas entidades, manteniendo validación estricta en las propiedades utilizadas.

---

# Tipos de utilidad

Se utiliza `Partial<T>` para gestionar el estado temporal de edición de una fila.

Esto permite representar objetos parcialmente editados sin obligar a que todas las propiedades estén completas desde el primer momento.

---

# Unión discriminada

El proyecto utiliza una unión discriminada para representar distintos estados de carga.

Cada estado tiene una propiedad `tipo`, lo que permite a TypeScript identificar de forma segura qué datos están disponibles en cada caso.

---

# Uso de never

El tipo `never` se utiliza para aplicar análisis exhaustivo en los estados posibles.

Gracias a esto, si en el futuro se añade un nuevo estado y no se controla en el `switch`, TypeScript podrá detectar el problema durante el desarrollo.

---

# Librería externa

Se ha integrado la librería `date-fns` para calcular la diferencia en días entre dos fechas.

La función creada recibe dos valores de tipo `Date` y devuelve un resultado de tipo `number`, manteniendo entradas y salidas estrictamente tipadas.

---

# Comparación con JavaScript estándar

Si este proyecto se hubiera desarrollado únicamente con JavaScript, muchos errores solo aparecerían en tiempo de ejecución.

Con TypeScript, el compilador permite detectar errores antes de ejecutar la aplicación, como:

- Propiedades inexistentes
- Tipos incompatibles
- Estados no controlados
- Props incorrectas en componentes
- Uso incorrecto de datos parciales

---

# Ventajas arquitectónicas

El uso de TypeScript en este proyecto aporta:

- Mayor seguridad de tipos
- Mejor mantenimiento del código
- Componentes reutilizables
- Reducción de errores runtime
- Mejor documentación interna del código
- Arquitectura frontend más escalable

---

# Autor

**Ismael Contelles**  
Bootcamp Full Stack - 2026