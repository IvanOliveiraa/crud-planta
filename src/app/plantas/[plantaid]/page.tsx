import { useParams } from "next/navigation";
import { getPlantaPorId } from "../services/get-planta-por-id";
import { ImDroplet } from "react-icons/im";
import { MdAddPhotoAlternate } from "react-icons/md";
import Image from "next/image";
import Mapcomponent from "@/app/components/Map";
import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";
type Position = [number, number];

const position: Position = [-8.745842214870901, -63.85542867750755];

const MapComponent = dynamic(() => import("../../components/Map"));

export default async function PaginaPlanta({
  params,
}: {
  params: { plantaid: string };
}) {
  console.log(params);

  const planta = await getPlantaPorId(params.plantaid);
  console.log(planta.LOC);

  return (
    <>
      <div className="w-100 flex mb-6   flex-wrap auto-cols-max content-start p-4 gap-4 text-white justify-center items-center  bg-verde-250 border-2 rounded-[15px]  ">
        <div className=" p-8 h-full space-y-4  md:w-auto flex flex-col justify-center items-center max-w-2xl bg-gradient-radial  to-verde-900 rounded-[15px]  from-verde-400 ">
          <Image
            src="/WIDGET.png"
            width={350}
            height={350}
            alt="Picture of the author"
          />
          <div className="justify-center space-x-3 items-center">
            <button className="text-5xl bg-verde-250 hover:bg-verde-300 text-white font-bold py-2 px-4 border-b-4 border-verde-700 hover:border-verde-500 rounded-[15px]">
              <MdAddPhotoAlternate />
            </button>
            <button className="text-5xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-[15px]">
              <ImDroplet />
            </button>
          </div>
        </div>
        <div className="flex-1 min-w-[50%] md:w-auto">
          <div className="  flex-1 w-full md:w-auto  p-8 bg-gradient-radial space-y-2  to-verde-900 rounded-[15px]  from-verde-400 ">
            <Mapcomponent initialPosition={position} />
            <h3> Id: {params.plantaid}</h3>
            <h2 className=""> Nome: {planta.NOME_PLANTA}</h2>
            <h3> UMIDADE: {planta.UMIDADE}</h3>
            <h3> STAUS: {planta.BOMBA_STATUS}</h3>
            <h3> TEMPO DE REGA: {planta.REGA_TEMPO}</h3>
            <h3> Ultima rega: {planta.REGAS[0]}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
