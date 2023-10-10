import { useParams } from 'next/navigation'
import { getUsuarioPorId } from "../services/get-usuario-por-id";


export default async function PaginaUsuario({
    params
}:{
params:{usuarioid : string};
}) {
    console.log(params)
    const usuario = await getUsuarioPorId(params.usuarioid);

    return(
    <>
    <h2> Nome: {usuario.nome}</h2>
    <h3> Id: {params.usuarioid}</h3>
    <h3> Email: {usuario.email}</h3>


    </>);
    
}