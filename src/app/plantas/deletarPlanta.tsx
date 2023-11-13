"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoTrashBin } from "react-icons/io5";


type Planta = {
  id: number;
  hardware: 4,
      usuario: string,
      NOME_PLANTA:string,
      BOMBA_STATUS:string,
      REGA_TEMPO: number,
      UMIDADE: number,
      REGAS: any[]
};

export default function DeletePlanta(planta: Planta) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleDelete(idplanta: number) {
    setIsMutating(true);

    await fetch(`http://localhost:3031/plantas/${idplanta}`, {
      method: "DELETE",
    });
    alert("Planta Deletada com sucesso!");
    router.refresh();
  }

  

  return (
              <button
                type="button"
                onClick={() => handleDelete(planta.id)}
                className="btn btn-primary"
              >
               <IoTrashBin className=" mx-1  text-white"/>
              </button>
  );
}