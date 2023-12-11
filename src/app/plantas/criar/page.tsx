"use client";
import axios from "axios";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormData = {
  id: number | string;
  hardware: number | string;
  usuario: string;
  NOME_PLANTA: string;
  BOMBA_STATUS: boolean;
  REGA_TEMPO: number | string;
  UMIDADE: number | string;
  REGAS: any[];
};

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      NOME_PLANTA: "",
      usuario: "",
      hardware: "",
      REGA_TEMPO: "",
      UMIDADE: "",
    },
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    await axios.post("http://localhost:3031/plantas", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("planta criada com sucesso");
    router.refresh();
    router.push("/plantas");
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => console.log(errors);

  return (
    <div className="isolate bg-white px-6 py-2 sm:py-4 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Criar Novo
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            NOME_PLANTA
          </label>
          <div className="mt-2.5">
            <input
              {...register("NOME_PLANTA", {
                required: "NOME_PLANTA é requerido.",
                minLength: {
                  value: 5,
                  message: "NOME_PLANTA precisa ter pelo menos 5 caracteres",
                },
              })}
              type="text"
              name="NOME_PLANTA"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
            />
            {errors?.NOME_PLANTA && (
              <span className="text-red-700">{errors.NOME_PLANTA.message}</span>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Hardware
          </label>
          <div className="mt-2.5">
            <input
              {...register("hardware", {
                required: "hardware é requerido.",
              })}
              type="number"
              name="hardware"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
            />
            {errors?.hardware && (
              <span className="text-red-700">{errors.hardware.message}</span>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            REGA_TEMPO
          </label>
          <div className="mt-2.5">
            <input
              {...register("REGA_TEMPO", {
                required: "REGA_TEMPO é requerido.",
              })}
              type="number"
              name="REGA_TEMPO"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
            />
            {errors?.REGA_TEMPO && (
              <span className="text-red-700">{errors.REGA_TEMPO.message}</span>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            USUARIO
          </label>
          <div className="mt-2.5">
            <input
              {...register("usuario", {
                required: "usuario é requerido.",
                minLength: {
                  value: 4,
                  message: "usuario precisa ter pelo menos 5 caracteres",
                },
              })}
              type="text"
              name="usuario"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
            />
            {errors?.usuario && (
              <span className="text-red-700">{errors.usuario.message}</span>
            )}
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
