export async function getUsuarioPorId(id: number | string) {
  const response = await fetch(`http://localhost:8080/usuario/${id}`, {
    cache: "no-store",
  });
  const usuario = await response.json();
  return usuario[0];
}
