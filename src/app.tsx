import {useState} from 'react'
import {MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2} from 'lucide-react'

export function App() {

  const [isGuestInputVisible, setIsGuestInputVisible] = useState<boolean>(false);

  const handleVisibilityGuestInput = () => {
    setIsGuestInputOpen(true);

  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center ">

      
        <div className="max-w-[720px] w-full px-6 text-center space-y-10">
          <div className='flex flex-col items-center gap-3'>
            <img src='/logo.svg' alt="" />
            <p className="text-zinc-300 text-lg ">
              Convide seus amigos e planeje sua próxima viagem!
            </p>
          </div>

          <div className='space-y-4'>
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">
              <div className='flex items-center flex-1 gap-2'>
                <MapPin className='size-5 text-zinc-400'/>
                <input 
                  type="text" 
                  placeholder="Para onde vcê vai?" 
                  disable={isGuestInputVisible}
                  className="flex-1 text-large placeholder:text-zinc-400 bg-transparent outline-none" 
                />
              </div>
              
              <div className='flex items-center gap-2 '>
                <Calendar className='size-5 text-zinc-400'/>
                <input 
                  type="text" 
                  placeholder="Quando?" 
                  disable={isGuestInputVisible}
                  className="w-40 text-large placeholder:text-zinc-400 bg-transparent outline-none" 
                />
              </div>

              <div className='w-px h-6 bg-zinc-800'/>

              {
                isGuestInputVisible ? 
                <button 
                  onClick= {() => setIsGuestInputVisible(false)}
                  className='px-5 py-2 flex items-center gap-2 font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg'
                >
                  Alterar local/data
                  <Settings2 className='size-5 '/>
                </button>
                :
                <button 
                  onClick= {() => setIsGuestInputVisible(true)}
                  className='px-5 py-2 flex items-center gap-2 font-medium text-lime-950 bg-lime-300 hover:bg-lime-400 rounded-lg'
                >
                  Continuar
                  <ArrowRight className='size-5 '/>
                </button>

              }

            </div>

            {
              isGuestInputOpen &&
              <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">
                <div className='flex items-center flex-1 gap-2'>
                  <UserRoundPlus className='size-5 text-zinc-400'/>
                  <input 
                    type="text" 
                    placeholder="Quam estará na viagem?" 
                    className="flex-1 text-large placeholder:text-zinc-400 bg-transparent outline-none" 
                  />
                </div>

                <div className='w-px h-6 bg-zinc-800'/>

                <button 
                  onClick= {() => setIsGuestInputOpen(true)}
                  className='px-5 py-2 flex items-center gap-2 font-medium text-lime-950 bg-lime-300 hover:bg-lime-400 rounded-lg'
                >
                  Confirmar viagem
                  <ArrowRight className='size-5 '/>
                </button>
              </div>
            }
          </div>

          <p className="text-small text-zinc-500">
            Ao planejar sua viagem pela plann.er você automaticamente concorda 
            com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade.</a>
          </p>
        </div>
      </div>
    
  )
}
//42min