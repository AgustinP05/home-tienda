"use client";

import React, { useRef } from "react";
// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Importa los módulos de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const MasVendidas = () => {
  // Referencias para los botones de navegación
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  // Datos de ejemplo para las tarjetas
  const tendencias = [
    { id: 1, nombre: 'Samsung', modelo: 'Smart Tv 75" UHD', imagen: "/tendencia1.png", precio: "1.100.999", link: "#" },
    { id: 2, nombre: 'Samsung', modelo: 'Smart Tv 75" UHD', imagen: "/tendencia1.png", precio: "1.100.999", link: "#" },
    { id: 3, nombre: 'Samsung', modelo: 'Smart Tv 75" UHD', imagen: "/tendencia1.png", precio: "1.100.999", link: "#" },
    { id: 4, nombre: 'Samsung', modelo: 'Smart Tv 75" UHD', imagen: "/tendencia1.png", precio: "1.100.999", link: "#" },
    { id: 5, nombre: 'Samsung', modelo: 'Smart Tv 75" UHD', imagen: "/tendencia1.png", precio: "1.100.999", link: "#" },
    { id: 6, nombre: 'Samsung', modelo: 'Smart Tv 75" UHD', imagen: "/tendencia1.png", precio: "1.100.999", link: "#" },
    { id: 7, nombre: 'Samsung', modelo: 'Smart Tv 75" UHD', imagen: "/tendencia1.png", precio: "1.100.999", link: "#" },
    { id: 8, nombre: 'Samsung', modelo: 'Smart Tv 75" UHD', imagen: "/tendencia1.png", precio: "1.100.999", link: "#" },
    { id: 9, nombre: 'Samsung', modelo: 'Smart Tv 75" UHD', imagen: "/tendencia1.png", precio: "1.100.999", link: "#" },
    { id: 10, nombre: 'Samsung', modelo: 'Smart Tv 75" UHD', imagen: "/tendencia1.png", precio: "1.100.999", link: "#" },
  ];

  return (
    <div className="container  h-[380px] sm:h-auto mx-auto mt-10 sm:mt-20 px-4 md:px-16 py-11  relative custom-swiper-pagination-vendidas custom-swiper-vendidas">
      
      <style>
            {`
             .custom-swiper-pagination-vendidas .swiper-pagination {
                position: relative !important; /* Hace que la paginación sea absoluta */
                bottom: -8px ; /* Mueve la paginación un poco más abajo */
                left: 50% !important; /* Centra horizontalmente */
                transform: translateX(-50%) !important; /* Ajusta el centrado */
                z-index: 10 !important; /* Asegura que la paginación esté por encima del contenido */
              }

            .custom-swiper-vendidas .swiper-pagination-bullet {
                background: transparent; /* Fondo transparente para los puntos inactivos */
                border: 2px solid #DC1E0F; /* Borde blanco para los puntos inactivos */
                opacity: 1;
                   
              }
              .custom-swiper-vendidas .swiper-pagination-bullet-active {
                background-color: #DC1E0F;
              }
            `}
        </style>
      
      <h2 className="text-[24px] md:text-[32px] font-extrabold mb-10 uppercase italic">Los mas vendidas</h2>

      {/* Botones de navegación personalizados (ocultos en mobile) */}
      <button
        ref={navigationPrevRef}
        className="hidden md:block absolute left-11 top-[57%] transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-2xl drop-shadow-md hover:bg-gray-100"
      >
        {/* Ícono de flecha izquierda*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        ref={navigationNextRef}
        className="hidden md:block absolute right-11 top-[57%] transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-2xl drop-shadow-md hover:bg-gray-100"
      >
        {/* Ícono de flecha derecha*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Carrusel de Swiper */}
      <Swiper
      
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        navigation={{
          prevEl: navigationPrevRef.current, 
          nextEl: navigationNextRef.current, 
        }}
        pagination={{
          clickable: true, 
          dynamicBullets: true, 
        }}
        loop
        breakpoints={{
          320: {
            slidesPerView: 2,
            pagination: {
              enabled: true, // Habilita la paginación en mobile
            },
          },
          640: {
            slidesPerView: 3,
            pagination: {
              enabled: true, // Desactiva la paginación en tablet
            },
          },
          1024: {
            slidesPerView: 5,
            pagination: {
              enabled: false, // Desactiva la paginación en desktop
            },
          },
        }}
        onInit={(swiper) => {
          // Asigna las referencias de los botones después de que Swiper se inicialice
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {/* Mapear las tarjetas de tendencias */}
        {tendencias.map((tendencia) => (
          <SwiperSlide key={tendencia.id} className="shadow-md shadow-slate-300 rounded-2xl  sm:h-[388px]">
            <div className="flex flex-col justify-between items-center    sm:rounded-md overflow-hidden h-[233px] sm:h-96 md:px-8 pt-4 pb-2 sm:py-6">
              {/* Imagen de la tarjeta */}
              <img
                src={tendencia.imagen}
                alt={tendencia.nombre}
                className="w-full h-[50%] object-contain"
              />
              {/* Nombre del producto */}
              <div className="px-4">
                <h3 className="text-xs sm:text-base font-medium text-[#5E5E5E] text-center">
                  <span className="block">{tendencia.nombre}</span>
                  <span className="block">{tendencia.modelo}</span>
                </h3>
              </div>
              {/* Precio */}
              <div>
                <h3 className="text-xs sm:text-2xl font-semibold text-[#000000B8]">$ {tendencia.precio}</h3>
              </div>
              {/* Botón Comprar */}
              <div>
                <a
                  href={tendencia.link}
                  className="text-[10px] sm:text-base font-medium sm:font-semibold text-[#DC1E0F] border-[1px] border-[#DC1E0F] rounded-2xl px-6 py-1"
                >
                  Comprar
                </a>
              </div>
             
            </div>
           
          </SwiperSlide>
          
        ))}
         <span className="block md:hidden bg-transparent w-full h-[20px]"></span>
      </Swiper>

     
    </div>
  );
};

export default MasVendidas;