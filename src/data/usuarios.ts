import type { Usuario } from "../types/usuario";

export const usuarios: Usuario[] = [
  {
    id: "USR-001",
    nombre: "Ismael Contelles",
    email: "ismael.contelles@campusfp.es",
    rol: "ESTUDIANTE",
    activo: true
  },
  {
    id: "USR-002",
    nombre: "Laura Martínez",
    email: "laura.martinez@empresa.dev",
    rol: "PROFESOR",
    activo: true
  },
  {
    id: "USR-003",
    nombre: "Carlos Ruiz",
    email: "carlos.ruiz@adminpanel.dev",
    rol: "ADMIN",
    activo: false
  }
];