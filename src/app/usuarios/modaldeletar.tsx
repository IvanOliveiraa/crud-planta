"use client";
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Deleteusuario from './deleteUsuario';
type Usuario = {
    id: number;
    nome: string;
    email: number;
  };
export default function ModalDeletar(usuario: Usuario) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        
      </button>
      {showModal && createPortal(
        <></>,
        document.body
      )}
    </> );
}