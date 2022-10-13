import './styles/main.css';
import logoImg from './assets/logo.svg';
import {MagnifyingGlassPlus} from 'phosphor-react'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
function App() {

  return (
    <div className='max-w-[1344] max-auto flex flex-col items-center my-20'>
      {/* Logo */}
      <img src={logoImg} alt=''/> 

      <h1 className='text-6xl text-white font-black mt-20'> Seu <span className='bg-nlw-gradient text-transparent bg-clip-text' >duo</span> esta aqui.</h1>

      {/* list of games */}
      <div className='grid grid-cols-6 gap-6 mt-16' >
          <GameBanner bannerUrl="/game-6.png" title="League of  Legends" adsCount={4}/>

      </div>
      <CreateAdBanner/>

    </div>
  )
}

export default App
