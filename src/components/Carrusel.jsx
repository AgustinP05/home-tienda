"use client"
import React from "react";
// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Importa los módulos de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules"; 
const Carrusel = () => {
  return (
    <div className=" w-full mt-2">
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
          <div className="w-full flex items-center justify-center">
          <picture className="w-full">
              {/* Imagen para mobile */}
              <source
                srcSet="/bannerCarrusel1mobile.png" // imagen mobile 
                media="(max-width: 767px)" // Breakpoint para mobile
              />
              {/* Imagen para desktop */}
              <img
                src="/bannerCarrusel1.jpg" // imagen desktop
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center justify-center">
          <picture className="w-full">
              {/* Imagen para mobile */}
              <source
                srcSet="/bannerCarrusel1mobile.png" // imagen mobile 
                media="(max-width: 767px)" // Breakpoint para mobile
              />
              {/* Imagen para desktop */}
              <img
                src="/bannerCarrusel1.jpg" // imagen desktop
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center justify-center">
          <picture className="w-full">
              {/* Imagen para mobile */}
              <source
                srcSet="/bannerCarrusel1mobile.png" // imagen mobile 
                media="(max-width: 767px)" // Breakpoint para mobile
              />
              {/* Imagen para desktop */}
              <img
                src="/bannerCarrusel1.jpg" // imagen desktop
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center justify-center">
          <picture className="w-full">
              {/* Imagen para mobile */}
              <source
                srcSet="/bannerCarrusel1mobile.png" // imagen mobile 
                media="(max-width: 767px)" // Breakpoint para mobile
              />
              {/* Imagen para desktop */}
              <img
                src="/bannerCarrusel1.jpg" // imagen desktop
                alt="Slide 4"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrusel;