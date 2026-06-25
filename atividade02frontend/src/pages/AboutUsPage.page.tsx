import Carrosel from "../components/Carrossel"; 
import MenuNavegacao from "../components/MenuNavegacao"; 
import Historia from "../components/SessaoHistorica";
import Navbar from "../components/Navbar";
import Rodape from "../components/footer";

export default function User(){
    return(
        <div className="flex flex-col w-full min-h-screen bg-[#121212] text-white gap-8 overflow-y-auto">
            <Navbar/>

            <MenuNavegacao paginaAtual="sobre" />

            <div className="flex-1 px-4 md:px-8">
                <Carrosel />
            </div>
            <div>
                <Historia/>
            </div>
            <div>
                <Rodape/>
            </div>
        </div>
    );
}