"use client"
import React from "react";
// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Importa los módulos de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules"; 

const Categorias = () => {
    
  return (
    <section className="  w-full px-0 md:px-16 mt-10 md:mt-32">
        <h2 className=" px-4 md:px-0 text-[24px] md:text-[32px] mb-3  md:mb-6  font-extrabold uppercase italic">Visitá las categorías más populares</h2>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-12 grid-rows-5 gap-3 text-[#FFFFFF] font-extrabold text-4xl ">
            {/* Izquierda */}
        
            <a href="#" className="col-span-3 row-span-4   h-[400px] p-4 uppercase bg-[url('/zapatillas.jpg')] bg-cover bg-center bg-no-repeat  flex items-end">
                Zapatillas
            </a>
            
            

            {/* Centro */}
            <a href="#" className="col-span-6 row-span-2 col-start-4 h-[193px] p-4 uppercase bg-[url('/futbol.jpg')] bg-cover bg-center bg-no-repeat  flex items-end">
                Fútbol
            </a>
            <a href="#" className="col-span-6 row-span-2 col-start-4 row-start-3  h-[193px] p-4 uppercase bg-[url('/calzas.jpg')] bg-cover bg-center bg-no-repeat  flex items-end">
                Calzas
            </a>

            {/* Derecha */}
            <a href="#" className="col-span-3 row-span-4 col-start-10 row-start-1  h-[400px] p-4 uppercase bg-[url('/pelotas.jpg')] bg-cover bg-center bg-no-repeat  flex items-end ">
                Pelotas
            </a>
        </div>

        {/* Mobile */}
        <div className="block md:hidden w-full  text-[#FFFFFF] font-extrabold text-4xl custom-swiper-pagination-categorias custom-swiper-categorias">

        <style>
            {`
            .custom-swiper-pagination-categorias .swiper-pagination {
               
                bottom: -3px ; /* Mueve la paginación un poco más abajo */ 
                /*background-color:red;*/
              }


            .custom-swiper-categorias .swiper-pagination-bullet {
                background: transparent; /* Fondo transparente para los puntos inactivos */
                border: 2px solid #000000; /* Borde blanco para los puntos inactivos */
                opacity: 1;
              }
              .custom-swiper-categorias .swiper-pagination-bullet-active {
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
            <div className="w-full h-[208px] flex flex-col">
            <a href="#" className="w-full h-full flex items-center justify-center p-4 uppercase bg-[url('/zapatillas.jpg')] bg-cover bg-center bg-no-repeat">
               <span>Zapatillas</span> 
            </a>
            <span className="block bg-white w-full h-[20px]"></span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="w-full h-[208px] flex flex-col">
            <a href="#" className="w-full h-full flex items-center justify-center p-4 uppercase bg-[url('/futbol.jpg')] bg-cover bg-center bg-no-repeat">
               <span>Fútbol</span> 
            </a>
            <span className="block bg-white w-full h-[20px]"></span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="w-full h-[208px] flex flex-col">
            <a href="#" className="w-full h-full flex items-center justify-center p-4 uppercase bg-[url('/calzas.jpg')] bg-cover bg-center bg-no-repeat">
               <span>Calzas</span> 
            </a>
            <span className="block bg-white w-full h-[20px]"></span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="w-full h-[208px] flex flex-col">
            <a href="#" className="w-full h-full flex items-center justify-center p-4 uppercase bg-[url('/pelotas.jpg')] bg-cover bg-center bg-no-repeat">
               <span>Pelotas</span> 
            </a>
            <span className="block bg-transparent w-full h-[20px]"></span>
            </div>
            </SwiperSlide>
            
        </Swiper>
    </div>
    </section>
  );
};

export default Categorias;