import './styles/main.css';
import logoImg from './assets/logo.svg';
import {GameController, MagnifyingGlassPlus} from 'phosphor-react'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import { Input } from './components/form/imput';

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
        <Dialog.Portal>
           <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
           <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/40">
              <Dialog.Title className="text-3xl font-black">Publique Um anuncio</Dialog.Title>
                <form className="mt-8 ">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="game" className="font-semibold">Qual o Game?</label>
                    <Input 
                      id="game"
                      placeholder="selecione o game q deseja jogar " 
                      />
                  </div>

                  <div>
                    <label htmlFor="name">seu Nome ( ou nickname)</label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Como te chamam os outros"/>
                  </div>

                  <div>
                    <div>
                      <label htmlFor="yearsPlaying">Joga ha quantos anos?</label>
                      <Input id="yearsPlaying" type="number" placeholder="Yudo bem ser Zero"/>
                    </div>
                    <div>
                      <label htmlFor="discord">Qual o seu Discord</label>
                      <Input id="discord" type="text" placeholder="usuario#0000"/>
                    </div>

                    <div>
                      <div>
                        <label htmlFor="weekDays">Quando costuma jogar?</label>
                      </div>
                      <div>
                        <label htmlFor="hourStart">Qual o horario do Dia?</label>
                        <div>
                          <Input id="hourStart" type="time" placeholder="De"/>
                          <Input id="hourEnd" type="time" placeholder="De"/>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div>
                    <input type="checkbox"/>
                    constumo me conectar ao chat de voz
                  </div>
                  <footer>
                    <button>Cancelar</button>
                    <button type="submit">
                      <GameController/>
                      encontrar Duo
                    </button>
                  </footer>
                </form>
                
           </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
export default App
