import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Voltar from './components/voltar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CRUD PLANTAS',
  description: 'crud das plantas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        
      
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-emerald-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-emerald-50 dark:bg-emerald-800">
      <ul className="space-y-2 font-medium">
         <li>
            <Link href="/plantas" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-emerald-100 dark:hover:bg-emerald-700 group">
               <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <path d="M9.99602 1.84774C9.25906 2.54009 8.73219 3.43002 8.48918 4.41457C8.48529 4.43041 8.48779 4.44514 8.49669 4.45875C8.88323 5.04759 9.18279 5.67784 9.39537 6.34949C9.39926 6.36144 9.40732 6.36769 9.41954 6.36824C11.9489 6.49996 14.1651 4.93394 14.8729 2.51967C14.9276 2.33237 14.9871 2.06102 15.0513 1.7056C15.1497 1.16039 15.2483 0.613792 15.3473 0.0658021C15.35 0.0496847 15.3434 0.0430154 15.3272 0.0457943C14.5041 0.180013 13.6815 0.316733 12.8592 0.455953C11.7357 0.646305 10.7813 1.11023 9.99602 1.84774ZM8.29994 9.29146V10.6891C8.29994 10.7049 8.30786 10.7128 8.3237 10.7128H9.00271C9.01689 10.7128 9.02397 10.7058 9.02397 10.6916C9.02453 10.0247 9.02495 9.35787 9.02522 8.69123C9.02689 5.50958 6.93441 2.80478 3.87656 1.98113C3.66592 1.92444 3.39332 1.87192 3.05875 1.82357C2.20981 1.70074 1.36156 1.57903 0.51401 1.45843C0.502894 1.45676 0.498171 1.46148 0.499838 1.4726C0.591262 2.08089 0.68491 2.6896 0.780781 3.29872C0.836358 3.65247 0.88846 3.92507 0.93709 4.11654C1.62819 6.85427 3.88782 8.82503 6.6764 9.21101C7.17409 9.2802 7.74348 9.2727 8.27827 9.26978C8.29272 9.26978 8.29994 9.27701 8.29994 9.29146ZM13.5754 10.9469C13.5754 10.9416 12.566 10.9507 12.5623 10.9469C12.5585 10.9432 12.5535 10.9411 12.5481 10.9411H3.91814C3.91283 10.9411 3.90774 10.9432 3.90399 10.9469C3.90024 10.9507 3.05891 10.9416 3.05891 10.9469L3.91244 17.48C3.91244 17.4853 3.91455 17.4904 3.9183 17.4941C3.92205 17.4979 3.92714 17.5 3.93244 17.5H12.5625C12.5678 17.5 12.5728 17.4979 12.5766 17.4941C12.5804 17.4904 12.5825 17.4853 12.5825 17.48L13.5754 10.9469Z" />

               </svg>
              
               <span className="ml-3">Plantas</span>
            </Link>
            </li>
         <li>
            <Link  href="/usuarios" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-emerald-100 dark:hover:bg-emerald-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Usuários</span>
            </Link>
         </li>
         <li>
            <Link href="/hardware" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-emerald-100 dark:hover:bg-emerald-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Hardwares</span>
            </Link>
         </li>
      </ul>
   </div>
   
</aside>

<div className="p-4 sm:ml-64">
<Voltar/>
   <div className="p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-emerald-700">
      
   {children}
      {/*<div className="grid grid-cols-3 gap-4 mb-4">
         <div className="flex items-center justify-center h-24 rounded bg-emerald-50 dark:bg-emerald-900">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded bg-emerald-50 dark:bg-emerald-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded bg-emerald-50 dark:bg-emerald-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
      </div> 

      </div>*/}
   </div>
</div>

</body>
    </html>
  )
}
