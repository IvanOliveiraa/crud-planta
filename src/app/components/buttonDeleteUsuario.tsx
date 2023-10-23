"use client";

import { useRouter } from "next/navigation";
import { IoTrashBin } from "react-icons/io5";

export default function RemoveBtn( usuarioid :string ) {
  const router = useRouter();
  const id = usuarioid;
  const deleteUsuario = async () => {
    const confirmed = confirm("quer mesmo Deletar?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3031/usuarios/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={deleteUsuario} className="text-red-400">
      <IoTrashBin  />
    </button>
  );
}