"use client"
import React from "react";
// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Importa los módulos de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules"; 

const Informacion = () => {
    
  return (
    <section className="  w-full bg-[#ECECEC] text-center pt-10 pb-2 md:py-10 md:px-36  mt-24 md:mt-32">
        
        {/* Desktop */}
        <div className="hidden md:flex justify-between">
            <div className="flex flex-col items-center w-[260px]"> 
                <img src="./info1.png" alt="bolsa" width={50}/>
                <p className=" text-lg font-bold uppercase mt-5">Elegí los productos que vas a comprar</p>
                <p className=" text-base mt-1">Si querés más de uno, sumalos a tu carrito.</p>
            </div>

            <div className="flex flex-col items-center w-[263px]"> 
                <img src="./info2.png" alt="baul" width={58}/>
                <p className=" text-lg font-bold uppercase mt-6">Pagá con el medio de pago que quieras</p>
                <p className=" text-base mt-1">Comprá con seguridad: usamos la tecnología de Mercado Pago.</p>
            </div>

            <div className="flex flex-col items-center w-[260px]"> 
                <img src="./info3.png" alt="camion" width={71}/>
                <p className=" text-lg font-bold uppercase mt-6">Recibí el producto que esperás</p>
                <p className=" text-base mt-1">Elegí la forma de entrega que prefieras ¡y listo! Aseguramos tu entrega con Mercado Envíos.</p>
            </div>
        </div>

        {/* Mobile */}
        <div className="flex  md:hidden w-full custom-swiper-pagination-informacion custom-swiper-informacion">

        <style>
            {`
            .custom-swiper-pagination-informacion .swiper-pagination {
               
                bottom: -3px ; /* Mueve la paginación un poco más abajo */ 
                /*background-color:red;*/
              }

              .custom-swiper-informacion .swiper-pagination-bullet {
                background: transparent; /* Fondo transparente para los puntos inactivos */
                border: 2px solid #000000; /* Borde blanco para los puntos inactivos */
                opacity: 1;
              }
              .custom-swiper-informacion .swiper-pagination-bullet-active {
                background-color: black;
              }

            `}
        </style>

            <Swiper
            // Configuración básica de Swiper
            modules={[Pagination, Autoplay]} 
            spaceBetween={30} // Espacio entre slides
            slidesPerView={1} // Número de slides visibles
            pagination={{ clickable: true }} // Habilitar paginación (puntos)
            loop // Habilitar loop infinito
            autoplay={{
            delay: 3000, // Cambia de slide cada 3 segundos (3000 ms)
            disableOnInteraction: false, // Permite que el autoplay continúe después de interacción del usuario
            }}
            >

            {/* Slides del carrusel con imágenes */}
            <SwiperSlide>
            <div className="flex flex-col items-center w-[260px] mx-auto"> 
                <img src="./info1.png" alt="bolsa" width={50}/>
                <p className=" text-lg font-bold uppercase mt-5">Elegí los productos que vas a comprar</p>
                <p className=" text-base mt-1">Si querés más de uno, sumalos a tu carrito.</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="flex flex-col items-center w-[263px] mx-auto"> 
                <img src="./info2.png" alt="baul" width={58}/>
                <p className=" text-lg font-bold uppercase mt-6">Pagá con el medio de pago que quieras</p>
                <p className=" text-base mt-1">Comprá con seguridad: usamos la tecnología de Mercado Pago.</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="flex flex-col items-center w-[260px] mx-auto"> 
                <img src="./info3.png" alt="camion" width={71}/>
                <p className=" text-lg font-bold uppercase mt-6">Recibí el producto que esperás</p>
                <p className=" text-base mt-1">Elegí la forma de entrega que prefieras ¡y listo! Aseguramos tu entrega con Mercado Envíos.</p>
            </div>
            </SwiperSlide>
            <span className="block md:hidden bg-transparent w-full h-[20px]"></span>
        </Swiper>
    </div>
    </section>
  );
};

export default Informacion;