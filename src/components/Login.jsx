import { useState } from "react";
import { validarLogin } from "../services/usuarios";

/**
 * Componente de inicio de sesión.
 * @param {Function} onLogin se ejecuta con el usuario cuando el login es correcto
 * @param {Function} onIrARegistro cambia a la pantalla de registro
 */
function Login({ onLogin, onIrARegistro }) {
  // Estado de los campos del formulario y del mensaje de error
  const [documento, setDocumento] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  // Se ejecuta al enviar el formulario
  const manejarEnvio = (evento) => {
    evento.preventDefault(); // evita que la página se recargue

    const usuario = validarLogin(documento, clave);
    if (usuario) {
      setError("");
      onLogin(usuario);
    } else {
      setError("Documento o contraseña incorrectos");
    }
  };

  return (
    <div className="tarjeta">
      <h2>Iniciar sesión</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={manejarEnvio}>
        <label>Documento</label>
        <input
          type="text"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          required
        />

        <button type="submit">Ingresar</button>
      </form>

      <p>
        ¿No tienes cuenta?{" "}
        <button type="button" className="enlace" onClick={onIrARegistro}>
          Regístrate
        </button>
      </p>
    </div>
  );
}

export default Login;