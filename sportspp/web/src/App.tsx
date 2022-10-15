import './styles/main.css';
import logoImg from './assets/logo.svg';
import {MagnifyingGlassPlus} from 'phosphor-react'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'

interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count:{
    ads:number;
  }
}
function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(()=>{
    fetch('http://localhost:3001/games')
      .then(response => response.json())
      .then(data=>{
        setGames(data);
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""/>

      <h1 className='text-6xl text-white font-black mt-20'> 
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text' >duo</span> esta aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(games =>{
          return (
            <GameBanner
            bannerUrl={games.bannerUrl}
            title={games.title}
            adsCount={games._count.ads}
          />
          )
        })}
      </div> 
      <Dialog.Root>
        <CreateAdBanner/>
      </Dialog.Root>
    </div>
  )
}
export default App
