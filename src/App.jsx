import { useState } from "react";
import Login from "./components/Login";
import Registro from "./components/Registro";
import "./App.css";

/**
 * Componente principal de Drones X.
 * Controla qué pantalla se muestra: login, registro o bienvenida.
 */
function App() {
  const [vista, setVista] = useState("login");
  const [usuario, setUsuario] = useState(null);

  // Login correcto: guarda el usuario y muestra la bienvenida
  const iniciarSesion = (usuarioValidado) => {
    setUsuario(usuarioValidado);
    setVista("bienvenida");
  };

  // Cierra la sesión y vuelve al login
  const cerrarSesion = () => {
    setUsuario(null);
    setVista("login");
  };

  return (
    <main>
      <h1>Drones X</h1>

      {vista === "login" && (
        <Login
          onLogin={iniciarSesion}
          onIrARegistro={() => setVista("registro")}
        />
      )}

      {vista === "registro" && (
        <Registro
          onRegistrado={() => setVista("login")}
          onIrALogin={() => setVista("login")}
        />
      )}

      {vista === "bienvenida" && usuario && (
        <div className="tarjeta">
          <h2>Bienvenido, {usuario.nombre}</h2>
          <p>Documento: {usuario.documento}</p>
          <button onClick={cerrarSesion}>Cerrar sesión</button>
        </div>
      )}
    </main>
  );
}

export default App;