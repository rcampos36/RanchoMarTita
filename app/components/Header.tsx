import HeaderNav from "./Header-nav";
import { FaPlayCircle } from "react-icons/fa";

const Header = () => {
    return ( 
        <div className="hero-banner z-0 relative" id="hero">
            <img className="w-full bg-cover" src="/images/Hero-Section.png" alt="hero section" />
            <HeaderNav />
            <div className="header-content absolute bottom-32 z-10 w-full">
                <div className="max-w-[1080px] flex justify-center gap-12 mx-auto items-start flex-col">
                    <h1 className="header-title text-white text-5xl w-[500px] font-Inter h-[160px] mt-10">"Vive una experiencia única en nuestros eventos multitudinarios"</h1>
                    <div className="text-white flex items-center gap-1 relative cursor-pointer w-fit">Ver Video 
                    <div className="p-3 border rounded-full opacity-50 transition ease-out duration-300 hover:opacity-100 ">
                        <div className="p-2 border rounded-full">
                            <FaPlayCircle className="w-6 h-6 text-white"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;