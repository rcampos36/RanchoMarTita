import { FaRegCalendarAlt } from "react-icons/fa";

const Events = () => {
  return (
    <div className='bg-gardient-to-bottom w-full flex flex-col' id="events">
        <div className='max-w-[1080px] w-full mx-auto flex flex-col items-center mt-14 mb-10'>
            <div className='text-4xl font-bold'>¡Disfruta con nosotros!</div>
            <p className='text-gray-500'>Realizamos todo tipo de eventos</p>
        </div>
        <div className='events flex gap-5 max-w-[1080px] w-full mx-auto border-b pb-10 mb-10'>
            <div className='flex'>
                <img src="/images/event-1-image.png" alt='event 1 image' />
            </div>
            <div>
                <p className="text-sky-700 mt-2 mb-2">en Playa El Cuco</p>
                <h2 className="text-2xl font-bold mb-2">Tomorrowland Beach</h2>
                <p className="mb-2">Breve descripción del evento que puede ocupara hasta 3 líneas de texto.</p>
                <p className="text-sky-700 flex gap-1 items-center mb-10"><FaRegCalendarAlt />10 Jun 2024 - por 3 dias</p>
                <button className="primary-btn">Me Interesa</button>
            </div>
        </div>
        <div className='events flex gap-5 max-w-[1080px] w-full mx-auto border-b pb-10 mb-10'>
            <div>
                <p className="text-sky-700 mt-2 mb-2">en Playa El Cuco</p>
                <h2 className="text-2xl font-bold mb-2">World Tropical</h2>
                <p className="mb-2">Breve descripción del evento que puede ocupara hasta 3 líneas de texto.</p>
                <p className="text-sky-700 flex gap-1 items-center mb-10"><FaRegCalendarAlt />10 Sep 2024 • por 1 semana</p>
                <button className="primary-btn">Me Interesa</button>
            </div>
            <div className='flex'>
                <img src="/images/event-2-image.png" alt='event 1 image' />
            </div>
        </div>
    </div>
  )
}

export default Events
