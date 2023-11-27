export async function getImage(id: string) {
    const response = await fetch(`http://localhost:3031/plantas/${id}`);
    const planta = await response.json();
    return planta ;
    
}