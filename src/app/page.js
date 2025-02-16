
import Header from "@/components/Header";
import Carrusel from "@/components/Carrusel";
import Tendencias from "@/components/Tendencias";
import Categorias from "@/components/Categorias";

export default function Home() {
  return (
   
      <main className="flex flex-col row-start-2 items-center sm:items-start 2xl:px-60">
       <Header/>

       <Carrusel/>

       <Tendencias/>

       <Categorias/>
      </main>
      
    
  );
}
