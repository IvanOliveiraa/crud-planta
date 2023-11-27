'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Voltar() {
  const router = useRouter()
 
  return (
    <button className=" rounded-md px-1 py-0.5 mb-1   border-2 border-emerald-700 text-center text-sm font-normal text-emerald-700  hover:text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600" type="button" onClick={() => router.back()}>
    <span> ⬅ </span>
    </button>
  )
}