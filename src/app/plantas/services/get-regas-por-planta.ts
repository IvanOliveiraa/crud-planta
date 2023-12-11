export async function getRegasPorPlanta(id: string) {
  const response = await fetch(`http://localhost:8080/regas/${id}`);
  const REGAS = await response.json();
  return REGAS;
}
