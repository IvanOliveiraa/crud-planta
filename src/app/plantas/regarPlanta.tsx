"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImDroplet } from "react-icons/im";

type Planta = {
  id: number;
  hardware: 4;
  usuario: string;
  NOME_PLANTA: string;
  BOMBA_STATUS: string;
  REGA_TEMPO: number;
  UMIDADE: number;
};

export default function RegarPlanta(planta: Planta) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleRegar(idplanta: number | string) {
    setIsMutating(true);

    await fetch(`http://localhost:8080/planta/novarega/${idplanta}`, {
      method: "POST",
    });
    alert("Planta REGADA com sucesso!");
    router.refresh();
  }
  const Regar = () => {
    console.log("Botão clicado!");
    // Adicione a lógica que você deseja executar aqui
  };
  return (
    <button
      onClick={() => handleRegar(planta.id)}
      className="text-5xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-[15px]"
    >
      <ImDroplet />
    </button>
  );
}
