export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: "ADMIN" | "PROFESOR" | "ESTUDIANTE";
  activo: boolean;
}