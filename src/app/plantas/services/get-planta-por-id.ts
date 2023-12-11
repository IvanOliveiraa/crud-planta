export async function getPlantaPorId(id: string) {
  const response = await fetch(`http://localhost:8080/plantas/${id}`);
  const planta = await response.json();
  console.log(planta);
  return planta[0];
}
