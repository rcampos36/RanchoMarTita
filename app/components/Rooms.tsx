const RoomsSection = () => {
    return ( 
        <div className="abitaciones pb-20" id="rooms">
            <div className='max-w-[1080px] w-full mx-auto flex flex-col items-center mt-20 mb-10'>
                <div className='text-4xl font-bold'>Habitaciones de lujo</div>
                <p className='text-gray-500'>Vea todo nuestro catálogo de habitaciones</p>
            </div>
            <div className="rooms flex justify-around items-center gap-10 max-w-[1080px] w-fit mx-auto">
                <div className="room w-1/3">
                    <img src="/images/bed-1.png" alt='room 1' />
                    <p className="mt-3">Wilderness Club at Big Ceddar</p>
                    <p className="text-xs text-gray-400 mb-5">2 Baños </p>
                    <p className="text-sky-500">$816 <span className="text-sm text-sky-500">/3 nights</span></p>
                </div>
                <div className="room w-1/3">
                    <img src="/images/bed-2.png" alt='room 2' />
                    <p className="mt-3">Wilderness Club at Big Ceddar</p>
                    <p className="text-xs text-gray-400 mb-5">1 Baño con jacujacuzzi</p>
                    <p className="text-sky-500">$2016 <span className="text-sm text-sky-500">/6 nights</span></p>
                </div>
                <div className="room w-1/3">
                    <img src="/images/bed-3.png" alt='room 3' />
                    <p className="mt-3">Wilderness Club at Big Ceddar</p>
                    <p className="text-xs text-gray-400 mb-5">Habitación matrimonial</p>
                    <p className="text-sky-500">$1024 <span className="text-sm text-sky-500">/8 nights</span></p>
                </div>
            </div>
        </div>
     );
}
 
export default RoomsSection;