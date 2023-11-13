import { useParams } from 'next/navigation'
import { getPlantaPorId } from "../services/get-planta-por-id";
import Image from 'next/image';


export default async function PaginaPlanta({
    params
}:{
params:{plantaid : string};
}) {
    console.log(params)
    const planta = await getPlantaPorId(params.plantaid);

    return(
    <>
    
    <div className=' className=" inline-grid grid-cols-2 mb-6 w-100  text-white justify-center items-center p-4 bg-gradient-to-b from-emerald-900 to-emerald-800 rounded-[15px] border border-green-600 "'>
    
    <div className='flex-1'>
    <Image src="/WIDGET.png"
      width={400}
      height={400}
      alt="Picture of the author"/>

    </div>
    <div className='flex-1'><h3> Id: {params.plantaid}</h3>
    <h2> Nome: {planta.NOME_PLANTA}</h2>
    <h3> UMIDADE: {planta.UMIDADE}</h3>
    <h3> STAUS: {planta.BOMBA_STATUS}</h3>
    <h3> TEMPO DE REGA: {planta.REGA_TEMPO}</h3>
    <h3> Ultima rega: {planta.REGAS[0]}</h3>
    </div>
    
    </div>
    
    </>);
    
}