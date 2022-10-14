import './styles/main.css';
import logoImg from './assets/logo.svg';
import {MagnifyingGlassPlus} from 'phosphor-react'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';

interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  ads:number;
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
    <div className='max-w-[1344] max-auto flex flex-col items-center my-20'>
      {/* Logo */}
      <img src={logoImg} alt=''/> 

      <h1 className='text-6xl text-white font-black mt-20'> Seu <span className='bg-nlw-gradient text-transparent bg-clip-text' >duo</span> esta aqui.</h1>

      {/* list of games */}
      <div className='grid grid-cols-6 gap-6 mt-16' >
          {games.map(game=>{
            return (
                <GameBanner 
                  key={game.id}
                  bannerUrl={game.bannerUrl} 
                  title={game.title} 
                  adsCount={game._count.ads}
                />            
              )
          })}
      </div>
      <CreateAdBanner/>

    </div>
  )
}

export default App
