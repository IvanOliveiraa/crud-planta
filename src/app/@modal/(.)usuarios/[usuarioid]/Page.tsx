import { getUsuarioPorId } from '../../../usuarios/services/get-usuario-por-id';
import { useParams } from 'next/navigation'


export default async function PaginaUsuario({
    params
}:{
params:{usuarioid : string};
}) {
    console.log(params)
    const usuario = await  getUsuarioPorId(params.usuarioid);

    return(
    <>
    <h3> Id: {params.usuarioid}</h3>
    <h2> Nome: {usuario.nome}</h2>
    <h3> Email: {usuario.email}</h3>
    <button id={params.usuarioid} />
    </>);
    
}