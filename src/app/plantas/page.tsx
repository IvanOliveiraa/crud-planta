import { getPlantas } from "./services/get-plantas"
import Image from "next/image";
import Link from "next/link";
import { IoEye, IoPencil } from "react-icons/io5";
import DeletePlanta from "./deletarPlanta";

export default async function PaginaPlantas() {
    const plantas = await getPlantas();
    return(
    <>
    
    <h2>Plantas:</h2>
    
    <div className="flex mb-6 w-100 justify-center items-center p-4 bg-gradient-to-b from-emerald-900 via-emerald-600 to-emerald-900 rounded-[15px] border border-green-600 ">
            {plantas.map((planta: any )=>(
                <div key={planta.id} className=" mx-2 text-center justify-center justify-items-center  bg-emerald-900 border border-emrald-600 rounded-lg shadow flex-1">
           <h1 className="text-emerald-400 text-bold">{planta.NOME_PLANTA}</h1> 
            <Link href={`/plantas/${planta.id}`} className="mx-auto"key={planta.id}>
                <Image src="/planta.png"
      width={150}
      height={150}
      alt="Picture of the author"/>
                    
                    
                </Link>
               <div className="flex p-3 items-center">
                <Link href={`/plantas/${planta.id}`}>
                 <IoEye className=" mx-1 text-white" />
               </Link>
               <Link href={`/plantas/criar/${planta.id}`}>
                 <IoPencil className=" mx-1 text-white"/>
               </Link>
               <DeletePlanta {...planta} /></div>
                </div>
                ))}
        
        

    </div>
    <Link  className="block mt-3 w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      href="plantas/criar"> criar nova</Link>
    </>);
    
}