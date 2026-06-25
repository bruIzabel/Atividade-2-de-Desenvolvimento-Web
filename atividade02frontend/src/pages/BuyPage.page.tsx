import Navbar from "../components/Navbar";
import MenuNavegacao from "../components/MenuNavegacao";
import Rodape from "../components/footer";
import Produtos from "../components/Produtos";

export default function Buy() {
    return(
        <div className="flex flex-col w-full min-h-screen bg-[#121212] text-white gap-8 overflow-y-auto">
            <Navbar />

            <MenuNavegacao paginaAtual="produtos" />

            <div className="flex-1 px-4 md:px-8 flex flex-col items-center justify-center">
                <div>
                    <Produtos/>
                </div>

            </div>

            <div>
                <Rodape />
            </div>
        </div>
    );
}