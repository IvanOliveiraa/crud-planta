export async function getPlantaPorId(id: string) {
  const response = await fetch(`http://localhost:8080/plantas/${id}`, {
    cache: "no-store",
  });
  const planta = await response.json();
  return planta[0];
}
