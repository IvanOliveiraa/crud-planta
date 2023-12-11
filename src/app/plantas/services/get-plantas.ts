export async function getPlantas() {
  const res = await fetch("http://localhost:8080/plantas", {
    cache: "no-store",
  });
  const plantas = await res.json();
  return plantas || [];
}
