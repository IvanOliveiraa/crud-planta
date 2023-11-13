export async function getUsuarioPorId(id: string) {
    const response = await fetch(`http://localhost:3031/usuarios/${id}`);
    const usuario = await response.json();
    return usuario ;
}