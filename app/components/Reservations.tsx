import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

const ReservationSection = () => {
    return ( 
        <div id="reservations">
            <div className="reservations w-full border-b border-gray-200">
                <div className="res-content max-w-[1080px] flex gap-10 items-center justify-center mx-auto h-full">
                    <p className="flex gap-2 items-center"><FaPhone className="icons text-stone-500"/>+503 2671 7348</p>
                    <p className="flex gap-2 items-center"><FaEnvelope className="icons text-stone-500"/>ranchomartita@yahoo.com</p>
                    <p className="flex gap-2 items-center"><FaClock className="icons text-stone-500"/>Always Open</p>
                    <button className="primary-btn transition ease-out duration-300 hover:bg-cyan-600 shadow-lg shadow-slate-800/50 flex gap-2 items-center"><BsSearch />Reservar Ahora</button>
                </div>
            </div>
        </div>
     );
}
 
export default ReservationSection;