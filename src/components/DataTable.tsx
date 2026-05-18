import { useState } from "react";

export interface Columna<T> {
  clave: keyof T;
  titulo: string;
}

interface DataTableProps<T> {
  datos: T[];
  columnas: Columna<T>[];
}

export function DataTable<T extends { id: string }>({ datos, columnas }: DataTableProps<T>) {
  const [filaEditando, setFilaEditando] = useState<Partial<T> | null>(null);

  function iniciarEdicion(fila: T): void {
    setFilaEditando({ ...fila });
  }

  function cancelarEdicion(): void {
    setFilaEditando(null);
  }

  return (
    <section className="table-section">
      <div className="table-header">
        <h2>Tabla de datos genérica</h2>
        <p>
          Componente reutilizable creado con React y TypeScript usando genéricos.
        </p>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            {columnas.map((columna) => (
              <th key={String(columna.clave)}>{columna.titulo}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {datos.map((fila) => (
            <tr key={fila.id}>
              {columnas.map((columna) => (
                <td key={String(columna.clave)}>
                  {String(fila[columna.clave])}
                </td>
              ))}
              <td>
                <button type="button" onClick={() => iniciarEdicion(fila)}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filaEditando && (
        <div className="edit-panel">
          <h3>Fila en edición</h3>
          <pre>{JSON.stringify(filaEditando, null, 2)}</pre>
          <button type="button" onClick={cancelarEdicion}>
            Cancelar edición
          </button>
        </div>
      )}
    </section>
  );
}