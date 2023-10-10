export async function getUsuarios() {
    const res = await fetch('http://localhost:3031/usuarios/');
    const usuarios = await res.json();
    return usuarios || [];
    
}