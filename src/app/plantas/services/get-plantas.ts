export async function getPlantas() {
    const res = await fetch('http://localhost:3031/plantas/');
    const plantas = await res.json();
    return plantas || [];
    
}