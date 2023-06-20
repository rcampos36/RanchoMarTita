const CTA = () => {
    return ( 
        <div className="cta relative flex items-center justify-center flex-col -z-10">
            <img className="w-full bg-cover h-72" src="/images/CTA.png" alt="hero section" />
            <div className="cta-content absolute flex items-center justify-center flex-col gap-5">
                <div className=" title text-3xl text-white">Una super experiencia para contar</div>
                <button className="secondary-btn">Reservar ahora</button>
            </div>
        </div>
     );
}
 
export default CTA;