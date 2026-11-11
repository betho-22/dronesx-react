/**
 * Servicio de usuarios del proyecto Drones X.
 * Guarda y consulta los usuarios registrados usando localStorage,
 * para simular una base de datos en esta etapa del proyecto.
 * NOTA: guardar contraseñas en texto plano es solo para fines académicos.
 */

// Clave con la que se guarda la lista de usuarios en el navegador
const CLAVE_ALMACEN = "dronesx_usuarios";

/**
 * Devuelve la lista de usuarios registrados.
 * @returns {Array} lista de usuarios (vacía si no hay ninguno)
 */
export function obtenerUsuarios() {
  const texto = localStorage.getItem(CLAVE_ALMACEN);
  return texto ? JSON.parse(texto) : [];
}

/**
 * Registra un nuevo usuario si su documento no existe todavía.
 * @param {Object} usuario datos del formulario de registro
 * @returns {{ok: boolean, mensaje: string}} resultado de la operación
 */
export function registrarUsuario(usuario) {
  const usuarios = obtenerUsuarios();

  // El documento identifica al usuario, por lo que no puede repetirse
  const existe = usuarios.some((u) => u.documento === usuario.documento);
  if (existe) {
    return { ok: false, mensaje: "El documento ya está registrado" };
  }

  usuarios.push(usuario);
  localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(usuarios));
  return { ok: true, mensaje: "Registro exitoso" };
}

/**
 * Valida el documento y la contraseña de un inicio de sesión.
 * @param {string} documento número de documento
 * @param {string} clave contraseña
 * @returns {Object|null} el usuario si las credenciales son correctas, o null
 */
export function validarLogin(documento, clave) {
  const usuarios = obtenerUsuarios();
  const usuario = usuarios.find(
    (u) => u.documento === documento && u.clave === clave
  );
  return usuario || null;
}