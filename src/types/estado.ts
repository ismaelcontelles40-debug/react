export type EstadoCarga =
  | { tipo: "CARGANDO" }
  | { tipo: "ERROR"; mensaje: string }
  | { tipo: "EXITO"; datos: string[] };

function asegurarExhaustividad(valor: never): never {
  throw new Error(`Estado no soportado: ${JSON.stringify(valor)}`);
}

export function renderizarEstado(estado: EstadoCarga): string {
  switch (estado.tipo) {
    case "CARGANDO":
      return "Cargando datos...";

    case "ERROR":
      return `Error: ${estado.mensaje}`;

    case "EXITO":
      return `Datos cargados: ${estado.datos.length}`;

    default:
      return asegurarExhaustividad(estado);
  }
}