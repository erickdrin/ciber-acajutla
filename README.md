# Ciber Acajutla — listo para subir a GitHub Pages

Archivos: `index.html`, `firebase-config.js`, `logo-ca.png`, `firestore.rules`.

## Configuración ya realizada
`firebase-config.js` contiene los datos de la aplicación Firebase `ciber-acajutla`.

## Antes de publicar
1. Verifica en Firebase Authentication que correo/contraseña esté habilitado y que hayas creado el usuario administrador.
2. Verifica que el UID de ese usuario coincida exactamente con el ID de su documento en la colección `staff`, con `active: true` (booleano) y `role: "admin"` (cadena).
3. Confirma que las reglas de Firestore publicadas coincidan con `firestore.rules`. No abras permisos públicos.
4. Sube los archivos del proyecto (no solo el ZIP) a la raíz de un repositorio GitHub.
5. En Settings > Pages, elige Deploy from a branch, `main` y `/ (root)`.
6. En Firebase Authentication > Settings > Authorized domains agrega el dominio `TU-USUARIO.github.io` (sin protocolo ni ruta). El dominio exacto dependerá de tu usuario de GitHub.
7. Abre la dirección de GitHub Pages e inicia sesión con el usuario autorizado.

## Importante
- No publiques contraseñas ni claves privadas de cuentas de servicio. `firebase-config.js` contiene únicamente configuración web pública.
- Las reglas permiten que cualquier empleado activo lea y modifique todas las órdenes y gastos. No hay separación de permisos para operaciones sensibles.
- Si había datos en el almacenamiento local del HTML anterior, no se migran automáticamente a Firestore.
- Prueba con datos ficticios y dos sesiones antes de usar información real de clientes.
- Firebase/Firestore requieren Internet para sincronizar.
