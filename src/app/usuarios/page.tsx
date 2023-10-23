
import { getUsuarios } from "./services/get-usuarios";
import Link from "next/link";
import { IoEye, IoPencil, IoTrashBin } from "react-icons/io5";
import Deleteusuario from "./deleteUsuario";


export default async function PaginaUsuarios() {
    const usuarios = await getUsuarios();
    
    
    return(
    <>    
    <h2>Usuários:</h2>  
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase  bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-3">
            Nome
            </th>
            <th scope="col" className="px-6 py-3">
            Ações
            </th>
            </tr>
        </thead>
        <tbody>
        {usuarios.map((user: any )=>(
        <tr className="bg-white border-b hover:bg-gray-50" key={user.id}>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{user.nome}</td>

            <td className="flex p-3 items-center">
                <Link href={`/usuarios/${user.id}`}>
                 <IoEye className=" mx-1 text-blue-800" />
               </Link>
               <Link href={`/usuarios/criar/${user.id}`}>
                 <IoPencil className=" mx-1 text-red-800"/>
               </Link>
               <Link href='#' >
                 <IoTrashBin className=" mx-1 text-red-800"/>
               </Link>
               <Deleteusuario {...user} />
            </td>
            
        </tr>
        ))} 
        </tbody>   
    </table>
    <Link  className="block mt-3 w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      href="usuarios/criar"> criar novo</Link>


    </>);
    
}