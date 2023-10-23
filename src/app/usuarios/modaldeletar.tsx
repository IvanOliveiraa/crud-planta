import { useState } from 'react';
import { createPortal } from 'react-dom';
import Deleteusuario from './deleteUsuario';
type Usuario = {
    id: number;
    nome: string;
    email: number;
  };
export default function PortalExample(usuario: Usuario) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <Deleteusuario {...usuario}/>,
        document.body
      )}
    </> );
}