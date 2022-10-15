import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

 
export function CreateAdBanner(){
   return(
        <div className='pt-1 bg-nlw-gradient  self-stretch rounded-lg mt-8 m-16  overflow-hidden'>
            <div className='bg-[#2A2634]  px-8 py-6 flex justify-between items-center'>
            <div>
                <strong className=' text-2xl text-white  font-black block'>Nao encontrou o seu duo</strong>
                <span className='text-zinc-400 block'>Publique Um anuncio para encontrar novos players</span> 
            </div>
            <button className='px-3 py-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3 '>
                <MagnifyingGlassPlus size='24'/>
                publicar anuncio
            </button>
            </div>
        </div>
        )
} 