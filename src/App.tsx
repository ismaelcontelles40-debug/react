import "./App.css";

import { useState } from "react";

import { DataTable } from "./components/DataTable";
import { usuarios } from "./data/usuarios";
import { renderizarEstado, type EstadoCarga } from "./types/estado";
import type { Usuario } from "./types/usuario";
import { calcularDiferenciaDias } from "./utils/fechas";

function App() {
  const [busqueda, setBusqueda] = useState("");

  const diasProyecto = calcularDiferenciaDias(
    new Date("2026-05-01"),
    new Date()
  );

  const estadoCarga: EstadoCarga = {
    tipo: "EXITO",
    datos: usuarios.map((usuario) => usuario.nombre)
  };

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const columnas: { clave: keyof Usuario; titulo: string }[] = [
    {
      clave: "nombre",
      titulo: "Nombre"
    },
    {
      clave: "email",
      titulo: "Email"
    },
    {
      clave: "rol",
      titulo: "Rol"
    },
    {
      clave: "activo",
      titulo: "Activo"
    }
  ];

  return (
    <main className="container">
      <header className="hero">
        <h1>React + TypeScript</h1>

        <p>
          Proyecto del bootcamp centrado en componentes genéricos,
          tipado estricto y reutilización de lógica.
        </p>
      </header>

      <section className="search-section">
        <input
          type="text"
          placeholder="Buscar usuario..."
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
        />
      </section>

      <section className="status-card">
        {renderizarEstado(estadoCarga)}
      </section>

      <section className="days-card">
        Días desde el inicio del proyecto: {diasProyecto}
      </section>

      <DataTable<Usuario>
        datos={usuariosFiltrados}
        columnas={columnas}
      />
    </main>
  );
}

export default App;