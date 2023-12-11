export async function getUsuarios() {
  const res = await fetch("http://localhost:8080/usuarios/", {
    cache: "no-store",
  });
  const usuarios = await res.json();
  return usuarios || [];
}
