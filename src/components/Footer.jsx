
import React from "react";

const Footer = () => {
    
  return (
    <section className="  w-full bg-[#000000] text-[#FFFFFF] text-center pt-12 pb-9 md:pt-[54px] md:pb-6 md:pl-[78px] 2xl:px-60  ">
        
        <div className="flex flex-col md:flex-row justify-between items-center  text-sm">
            <div className="flex flex-col items-center text-center font-medium md:items-start md:text-left uppercase md:w-96 order-2 md:order-1"> 
               <ul className="flex flex-col gap-y-3 ">
                <li><a href="#">Condiciones</a></li>
                <li><a href="#">Trabaja con nosotros</a></li>
                <li><a href="#">Medios de pago</a></li>
                <li><a href="#">Preguntas frecuentes</a></li>
               </ul>

               <a href="#" className=" w-fit border-2 text-xs border-solid border-white my-10  px-5 py-3 md:mt-7">Boton de arrepentimiento</a>
            </div>

            <div className="flex flex-col  items-center mb-10 md:mb-0  text-[32px] font-extrabold italic order-1 md:order-2"> 
                <h2>Mi Tienda</h2>
            </div>

            <div className="flex flex-col items-center text-center mb-10 md:mb-20 md:items-start md:text-left  text-nowrap gap-y-7 2xl:mr-[120px] order-4"> 
             
                <a href="#" className="flex gap-5 text-sm font-medium uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={16}><path fill="#ffffff" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                     Sucursales
                </a>
                       

                <ul>
                    <li>Whatsapp 2215137270</li>
                    <li>ecommerce@mateu.com.ar</li>
                    <li>La Plata 1900, Buenos Aires, Argentina</li>
                </ul>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm ">
            <div className="flex gap-x-6">
                <div className="flex gap-x-3 mb-6 md:mb-0">
                    <p>Powered by Pierce commerce</p><img src="./footer/pierce-logo.png" alt="pierce-logo" width={70} height={14}/>
                </div>
                <img src="./footer/vtex-logo.png" alt="vtex" className="hidden md:flex" />
            </div>
            
            <div className="flex flex-col gap-y-6 md:flex-row items-center justify-between md:gap-y-0 md:gap-x-[170px] md:mr-7">
                <p>© 2023 MateuSports</p>
                <div className="flex items-center gap-x-5">
                    <img src="./footer/Data-fiscal-Web.png" alt="data-fiscal" />  
                    <img src="./footer/vtex-logo.png" alt="vtex" className="md:hidden"/>
                </div>
                  
            </div>
            
        </div>
        
    </section>
  );
};

export default Footer;