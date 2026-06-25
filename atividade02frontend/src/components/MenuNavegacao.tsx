
// 1. Criamos a interface definindo os tipos permitidos para as props
interface MenuNavegacaoProps {
    paginaAtual: 'sobre' | 'produtos';
}

// 2. Passamos a interface para o componente
import { Link } from "react-router-dom";

export default function MenuNavegacao({ paginaAtual }: MenuNavegacaoProps) {
    return (
        <div className="w-full flex justify-center items-center py-6">
            <div className="flex gap-10 text-sm md:text-base font-serif uppercase tracking-widest">
                
                {/* Link para Sobre Nós */}
                <Link
                    to="/"
                    className={`pb-1 cursor-pointer transition-colors duration-300 ${
                        paginaAtual === 'sobre' 
                        ? 'text-amber-500 font-semibold border-b-2 border-amber-500' 
                        : 'text-neutral-400 hover:text-amber-400'
                    }`}
                >
                    Sobre nós
                </Link>

                {/* Link para Nossos Produtos */}
                <Link
                    to="/buy"
                    className={`pb-1 cursor-pointer transition-colors duration-300 ${
                        paginaAtual === 'produtos' 
                        ? 'text-amber-500 font-semibold border-b-2 border-amber-500' 
                        : 'text-neutral-400 hover:text-amber-400'
                    }`}
                >
                    Nossos produtos
                </Link>
                
            </div>
        </div>
    );
}