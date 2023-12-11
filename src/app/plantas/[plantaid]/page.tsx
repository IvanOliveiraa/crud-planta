import { useParams } from "next/navigation";
import { getPlantaPorId } from "../services/get-planta-por-id";

import { MdAddPhotoAlternate } from "react-icons/md";
import Image from "next/image";
import Mapcomponent from "@/app/components/Map";
import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";
import { getRegasPorPlanta } from "../services/get-regas-por-planta";
import { ImDroplet } from "react-icons/im";
import RegarPlanta from "../regarPlanta";
type Position = [any, any];

const position: Position = [-8.745842214870901, -63.85542867750755];

const MapComponent = dynamic(() => import("../../components/Map"));

export default async function PaginaPlanta({
  params,
}: {
  params: { plantaid: string };
}) {
  const planta = await getPlantaPorId(params.plantaid);
  const REGAS = await getRegasPorPlanta(params.plantaid);
  const ultima_rega = REGAS[0];
  function converterStringParaData(dataString: string): Date {
    return new Date(dataString);
  }
  const ultima_rega_formatada = ultima_rega
    ? converterStringParaData(ultima_rega.data_hora)
    : null;

  function obterDataEHora(data: Date): { data: string; hora: string } {
    const dataFormatada = data.toLocaleDateString();
    const horaFormatada = data.toLocaleTimeString();

    return { data: dataFormatada, hora: horaFormatada };
  }

  const { data = "", hora = "" } = obterDataEHora(
    ultima_rega_formatada || new Date()
  );
  let src = "/WIDGET-2.png";
  if (planta.UMIDADE < 40) {
    src = "/WIDGET-1.png";
  } else if (planta.UMIDADE > 80) {
    src = "/WIDGET-3.png";
  }
  console.log(src);

  return (
    <>
      <div className="w-100 flex mb-6   flex-wrap auto-cols-max content-start p-4 gap-4 text-white justify-center items-center  bg-verde-250 border-2 rounded-[15px]  ">
        <div className=" p-8 h-full space-y-4  md:w-auto flex flex-col justify-center items-center max-w-2xl bg-gradient-radial  to-verde-900 rounded-[15px]  from-verde-400 ">
          <h2 className="text-4xl mx-0 px-0 text-verde-100 font-VT323">
            {planta.NOME_PLANTA}
          </h2>
          <Image
            src={src}
            width={350}
            height={350}
            alt="Picture of the author"
          />

          <div className="justify-center space-x-3 items-center">
            <RegarPlanta {...planta} />
          </div>
        </div>
        <div className="flex-1 min-w-[50%] md:w-auto">
          <div className="  flex-1 w-full md:w-auto  p-8 bg-gradient-radial space-y-2  to-verde-900 rounded-[15px]  from-verde-400 ">
            <Mapcomponent initialPosition={[planta.LOC.x, planta.LOC.y]} />

            <h2 className=""> Nome: {planta.NOME_PLANTA}</h2>
            <h3> usuario: {planta.nome_usuario}</h3>
            <h3> UMIDADE: {planta.UMIDADE}%</h3>
            <h3> TEMPO DE REGA: {planta.REGA_TEMPO} segundos</h3>
            <h3>
              Ultima rega: {data} as {hora}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
