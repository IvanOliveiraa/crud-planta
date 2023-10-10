import { getPlantas } from "./services/get-plantas"
import Image from "next/image";
import Link from "next/link";

export default async function PaginaPlantas() {
    const plantas = await getPlantas();
    return(
    <>
    
    <h2>Plantas:</h2>
    
    <ul>
            {plantas.map((planta: any )=>(
            <li key={planta.id}>
                
                    {planta.NOME_PLANTA}
                    
                </li>
               
                ))}
        
    </ul>
    </>);
    
}