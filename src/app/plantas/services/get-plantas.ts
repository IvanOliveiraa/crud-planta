export async function getPlantas() {
    const res = await fetch('http://localhost:3031/plantas',{cache:'no-store'});
    const plantas = await res.json();
    return plantas || [];
    
}