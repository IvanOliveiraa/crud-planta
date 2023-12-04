import { getPlantas } from "./services/get-plantas";
import Image from "next/image";
import Link from "next/link";
import { IoEye, IoPencil } from "react-icons/io5";
import DeletePlanta from "./deletarPlanta";
import "leaflet/dist/leaflet.css";
import { VT323 } from "next/font/google";

export default async function PaginaPlantas() {
  const plantas = await getPlantas();
  return (
    <>
      <h2>Plantas:</h2>

      <div className="flex mb-6 w-100  flex-wrap auto-cols-max content-start p-4 gap-4 bg-verde-250   rounded-[15px] shadow-xl ">
        {plantas.map((planta: any) => (
          <div
            key={planta.id}
            className=" mx-2 w-32  text-center justify-center justify-items-center bg-gradient-radial to-verde-900 from-verde-400  border-2 border-verde-400 rounded-lg shadow max-w-xs flex-1"
          >
            <Link
              href={`/plantas/${planta.id}`}
              className="mx-auto"
              key={planta.id}
            >
              <Image
                src="/planta.png"
                width={150}
                height={150}
                alt="Picture of the author"
                className=" w-full"
              />
            </Link>
            <h1 className="text-white text-2xl font-VT323 ">
              {planta.NOME_PLANTA}
            </h1>
            <div className="flex text-xl p-3 justify-center space-x-1 items-center">
              <Link
                className="bg-verde-250 hover:bg-verde-300 text-white font-bold p-1  border-b-4 border-verde-700 hover:border-verde-500 rounded"
                href={`/plantas/${planta.id}`}
              >
                <IoEye className=" mx-1 text-white" />
              </Link>
              <Link
                className="bg-verde-250 hover:bg-verde-300 text-white font-bold p-1  border-b-4 border-verde-300 hover:border-verde-400 rounded"
                href={`/plantas/criar/${planta.id}`}
              >
                <IoPencil className=" mx-1 text-white" />
              </Link>
              <DeletePlanta
                className="bg-verde-250 hover:bg-verde-300 text-white font-bold p-1  border-b-4 border-verde-700 hover:border-verde-500 rounded"
                {...planta}
              />
            </div>
          </div>
        ))}
      </div>
      <Link
        className="block mt-3 w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
        href="plantas/criar"
      >
        {" "}
        criar nova
      </Link>
    </>
  );
}
