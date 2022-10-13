import './styles/main.css';
import logoImg from './assets/logo.svg';
import {MagnifyingGlassPlus} from 'phosphor-react'
function App() {

  return (
    <div className='max-w-[1344] max-auto flex flex-col items-center my-20'>
      {/* Logo */}
      <img src={logoImg} alt=''/> 

      <h1 className='text-6xl text-white font-black mt-20'> Seu <span className='bg-nlw-gradient text-transparent bg-clip-text' >duo</span> esta aqui.</h1>

      {/* list of games */}
      <div className='grid grid-cols-6 gap-6 mt-16' >
          <a href="" className="relative rounded-lg">
            <img src= "/game-1.png"/> 
            <div className='w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of  Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg">
            <img src= "/game-2.png"/> 
            <div className='w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of  Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg">
            <img src= "/game-3.png"/> 
            <div className='w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of  Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg">
            <img src= "/game-4.png"/> 
            <div className='w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of  Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg">
            <img src= "/game-5.png"/> 
            <div className='w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of  Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg">
            <img src= "/game-6.png"/> 
            <div className='w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of  Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anuncios</span>
            </div>
          </a>
      </div>

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
    </div>
  )
}

export default App
