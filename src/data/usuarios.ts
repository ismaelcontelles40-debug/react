import type { Usuario } from "../types/usuario";

export const usuarios: Usuario[] = [
  {
    id: "USR-001",
    nombre: "Ismael Contelles",
    email: "ismael@example.com",
    rol: "ESTUDIANTE",
    activo: true
  },
  {
    id: "USR-002",
    nombre: "Laura Martínez",
    email: "laura@example.com",
    rol: "PROFESOR",
    activo: true
  },
  {
    id: "USR-003",
    nombre: "Carlos Ruiz",
    email: "carlos@example.com",
    rol: "ADMIN",
    activo: false
  }
];