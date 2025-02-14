"use client"
import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className=" bg-white h-[121px] py-[14px] w-full">
        {/* Menu desktop */}
        <div className="hidden md:block">
        <div className=" mx-auto flex items-center justify-between px-[70px] mb-[34px]">
            {/* Logo a la izquierda */}
            <div className=" text-[32px] text-[#0F1E7B] font-[800] italic">
            Mi Tienda
            </div>

            {/* Barra de búsqueda en el centro con lupa */}
            <div className="flex w-[515px] mx-8 relative ">
            <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Ícono de lupa */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            </div>

            {/* Enlaces a la derecha */}
            <div className="flex items-center space-x-6">
            {/* Mi cuenta con ícono de usuario */}
            <a href="#" className="flex items-center text-gray-700">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
                </svg>
                Mi cuenta
            </a>

            {/* Carrito sin notificación */}
            <a href="#" className="text-gray-700 hover:text-blue-500">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
                </svg>
            </a>
            </div>
        </div>

        {/* Menu categorias */}
        <div>
            <ul className="flex float-right gap-[24px] text-[#5E5E5E] font-[500] mr-[70px]">
                <li><a href="/">Muebles</a></li>
                <li><a href="/">Calzado</a></li>
                <li><a href="/">Colchones</a></li>
                <li><a href="/">Herramientas</a></li>
                <li>
                <a href="/" className="flex items-center text-[#DC1E0F]">
                Ofertas
                {/* Ícono de fueguito */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="#DC1E0F"
                >
                <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                />
                </svg>
                </a>
                </li>
            </ul>
        </div>
        </div>
  
        {/* Menu Mobile */}
        <div className="block md:hidden">
            {/* Primera fila: Ícono de menú, logo e íconos de usuario/carrito */}
        <div className="flex items-center justify-between px-[17px] w-full">
          {/* Ícono de menú hamburguesa */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none mr-[24px]"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo "Mi Tienda" */}
          <div className="text-2xl w-full text-center font-[800] text-[#0F1E7B] italic">Mi Tienda</div>

          {/* Íconos de usuario y carrito */}
          <div className="flex items-center space-x-4">
            {/* Ícono de usuario */}
            <a href="#" className="text-gray-700 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </a>

            {/* Ícono de carrito */}
            <a href="#" className="text-gray-700 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Barra de búsqueda en el centro con lupa */}
        <div className="flex w-[90%] relative mx-auto">
            <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Ícono de lupa */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            </div>

        {/* Menú desplegable  */}
        {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50">
          {/* Fila superior del menú desplegable */}
          <div className="flex items-center justify-between border-b border-[#000000]">
            {/* Logo "Mi Tienda" */}
            <div className="text-[32px] font-[800] text-[#0F1E7B] italic pl-6">
              Mi Tienda
            </div>

            {/* Ícono de cierre (X) */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 px-4 focus:outline-none"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Lista de categorías */}
          <div className="py-8 px-[27px] ">
            <ul className="space-y-3 w-full text-[#5E5E5E] text-base font-medium">
              <li className="w-full border-b-[1px] border-[#000000]">
                <a href="/" className=" block pb-[12px]">
                  Muebles
                </a>
              </li>
              <li className="w-full border-b-[1px] border-[#000000]">
                <a href="/" className="block pb-[12px] ">
                  Calzado
                </a>
              </li>
              <li className="w-full border-b-[1px] border-[#000000]">
                <a href="/" className="block pb-[12px]">
                  Colchones
                </a>
              </li>
              <li className="w-full border-b-[1px] border-[#000000]">
                <a href="/" className="block pb-[12px] ">
                  Herramientas
                </a>
              </li>
              <li className="w-full ">
                <a
                  href="/"
                  className="w-full flex items-center pb-[12px] text-[#DC1E0F] "
                >
                  Ofertas
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="#DC1E0F"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
        </div>
    </header>
  );
};

export default Header;