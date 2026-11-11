import { useState } from "react";
import { registrarUsuario } from "../services/usuarios";

// Valores iniciales del formulario de registro
const FORMULARIO_VACIO = {
  documento: "",
  nombre: "",
  fechaNacimiento: "",
  celular: "",
  correo: "",
  clave: "",
};

/**
 * Componente de registro de usuarios.
 * @param {Function} onRegistrado se ejecuta cuando el registro es exitoso
 * @param {Function} onIrALogin vuelve a la pantalla de inicio de sesión
 */
function Registro({ onRegistrado, onIrALogin }) {
  const [datos, setDatos] = useState(FORMULARIO_VACIO);
  const [error, setError] = useState("");

  // Actualiza el campo que el usuario está escribiendo
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  };

  // Valida los datos y registra al usuario
  const manejarEnvio = (evento) => {
    evento.preventDefault();

    // Validaciones básicas (las reglas definitivas pueden ajustarse)
    if (!/^\d+$/.test(datos.documento)) {
      setError("El documento debe contener solo números");
      return;
    }
    if (!/^\d{10}$/.test(datos.celular)) {
      setError("El celular debe tener 10 dígitos");
      return;
    }
    if (datos.clave.length < 4) {
      setError("La contraseña debe tener mínimo 4 caracteres");
      return;
    }

    const resultado = registrarUsuario(datos);
    if (resultado.ok) {
      setError("");
      onRegistrado(datos);
    } else {
      setError(resultado.mensaje);
    }
  };

  return (
    <div className="tarjeta">
      <h2>Registro de usuario</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={manejarEnvio}>
        <input name="documento" placeholder="Documento"
          value={datos.documento} onChange={manejarCambio} required />
        <input name="nombre" placeholder="Nombre completo"
          value={datos.nombre} onChange={manejarCambio} required />
        <input name="fechaNacimiento" type="date"
          value={datos.fechaNacimiento} onChange={manejarCambio} required />
        <input name="celular" placeholder="Celular"
          value={datos.celular} onChange={manejarCambio} required />
        <input name="correo" type="email" placeholder="Correo"
          value={datos.correo} onChange={manejarCambio} required />
        <input name="clave" type="password" placeholder="Contraseña"
          value={datos.clave} onChange={manejarCambio} required />

        <button type="submit">Registrarme</button>
      </form>

      <p>
        ¿Ya tienes cuenta?{" "}
        <button type="button" className="enlace" onClick={onIrALogin}>
          Inicia sesión
        </button>
      </p>
    </div>
  );
}

export default Registro;