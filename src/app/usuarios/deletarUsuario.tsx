"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoTrashBin } from "react-icons/io5";

type Usuario = {
  id: number;
  nome: string;
  email: number;
};

export default function DeleteUser(user: Usuario) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleDelete(productId: number) {
    setIsMutating(true);

    await fetch(`http://localhost:8080/usuario/${user.id}`, {
      method: "DELETE",
    });
    alert("Usuário Deletado com sucesso!");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={() => handleDelete(user.id)}
      className="btn btn-primary"
    >
      <IoTrashBin className=" mx-1 text-red-800" />
    </button>
  );
}
