export async function getPlantasUser(iduser: number | string) {
  const res = await fetch(`http://localhost:8080/plantasuser/${iduser}`, {
    cache: "no-store",
  });
  const plantas = await res.json();
  return plantas || [];
}
