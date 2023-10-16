"use client";
import axios from 'axios'
import { stringify } from 'node:querystring';
import { json } from 'node:stream/consumers';
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

type FormData = {
nome:string;
email:string;
};

export default function Home() {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues:{
        nome: "",
        email: "",
      }
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) =>{
     await axios.post('http://localhost:3031/usuarios',JSON.stringify(data), {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      } });
   //  await console.log(JSON.stringify(data));
    
    
  }

  const onError: SubmitErrorHandler<FormData> = (errors) => console.log(errors);

  // console.log(register("name"));

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
              Nome
            </label>
            <div className="mt-2.5">
              <input
                {...register('nome',{
                  required: "Nome é requerido.",
                  minLength: {
                    value: 10,
                    message: "Nome precisa ter pelo menos 10 caracteres",
                  },
                })}
                type="text"
                name="nome"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
              {errors?.nome && (
                <span className="text-red-700">{errors.nome.message}</span>
              )}
            </div>
          </div>
          

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              email
            </label>
            <div className="mt-2.5">
              <input
                {...register('email',{
                  required: "email é requerido.",
                  minLength: {
                    value: 10,
                    message: "email precisa ter pelo menos 10 caracteres",
                  },
                })}
                type="text"
                name="email"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
              {errors?.email && (
                <span className="text-red-700">{errors.email.message}</span>
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