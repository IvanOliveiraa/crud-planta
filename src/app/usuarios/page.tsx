
import { getUsuarios } from "./services/get-usuarios";
import Voltar from "../components/voltar";
import Link from "next/link";

export default async function PaginaUsuarios() {
    const usuarios = await getUsuarios();
    return(
    <>
    
    
    
    <h2>Usuários:</h2>
    
    
    <ul>
            {usuarios.map((user: any )=>(
            <li key={user.id}>
                <Link href={`/usuarios/${user.id}`}>
                    {user.nome}
                </Link>
                </li>
                ))}
        
    </ul>
    <Link  className="block mt-3 w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      href="usuarios/criar"> criar novo</Link>

    </>);
    
}