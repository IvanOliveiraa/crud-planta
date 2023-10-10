'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Voltar() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.back()}>
    <p> voltar</p>
    </button>
  )
}