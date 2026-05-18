import { useState } from "react";

interface Columna<T> {
  clave: keyof T;
  titulo: string;
}

interface DataTableProps<T extends { id: string }> {
  datos: T[];
  columnas: Columna<T>[];
}

export function DataTable<T extends { id: string }>({
  datos,
  columnas
}: DataTableProps<T>) {
  const [filaEditando, setFilaEditando] = useState<Partial<T> | null>(null);

  return (
    <section className="table-section">
      <header className="table-header">
        <h2>Gestión  de usuarios</h2>

        <p>
        Tabla reutilizable basada en TypeScript Generics, búsqueda
        dinámica y estado tipado
        </p>
      </header>

      <table className="data-table">
        <thead>
          <tr>
            {columnas.map((columna) => (
              <th key={String(columna.clave)}>
                {columna.titulo}
              </th>
            ))}

            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {datos.map((item) => (
            <tr key={item.id}>
              {columnas.map((columna) => (
                <td key={String(columna.clave)}>
                  {typeof item[columna.clave] === "boolean"
                    ? item[columna.clave]
                      ? "Activo"
                      : "Inactivo"
                    : String(item[columna.clave])}
                </td>
              ))}

              <td>
                <button onClick={() => setFilaEditando(item)}>
                  Ver detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filaEditando && (
        <section className="edit-panel">
          <h3>Informacion del usuario</h3>

          <pre>
            {JSON.stringify(filaEditando, null, 2)}
          </pre>
        </section>
      )}
    </section>
  );
}