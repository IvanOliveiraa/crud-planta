import { useParams } from "next/navigation";
import { getUsuarioPorId } from "../services/get-usuario-por-id";
import { getPlantasUser } from "../services/get-plantas-por-user";
import Image from "next/image";
import Link from "next/link";

export default async function PaginaUsuario({
  params,
}: {
  params: { usuarioid: string };
}) {
  console.log(params);
  const usuario = await getUsuarioPorId(params.usuarioid);
  const plantas = await getPlantasUser(params.usuarioid);

  return (
    <>
      <h3> Id: {params.usuarioid}</h3>
      <h2> Nome: {usuario.nome}</h2>
      <h3> Email: {usuario.email}</h3>
      <button id={params.usuarioid} />
      <h2>Plantas:</h2>

      <div className="flex mb-6 w-100  flex-wrap auto-cols-max content-start p-4 gap-4 bg-verde-250   rounded-[15px] shadow-xl ">
        {plantas.map((planta: any) => (
          <div
            key={planta.id}
            className=" mx-2 w-32 max-w-2 text-center justify-center justify-items-center bg-gradient-radial to-verde-900 from-verde-400  border-2 border-verde-400 rounded-lg shadow max-w-xs flex-1"
          >
            <Link
              href={`/plantas/${planta.id}`}
              className="mx-auto"
              key={planta.id}
            >
              <h1 className="text-white text-2xl font-VT323 ">
                {planta.NOME_PLANTA}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
