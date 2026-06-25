import { useState, useEffect } from "react";

interface Produto {
    id: number;
    nome: string;
    preco: string;
    imagem: string;
    descricao: string;
}

export default function Produtos() {
    // Começa vazio, pois a loja vai buscar do banco
    const [produtos, setProdutos] = useState<Produto[]>([]);

    // Faz o React buscar os produtos do servidor assim que a página carrega
    useEffect(() => {
        fetch("http://localhost:3001/api/produtos")
            .then(resposta => resposta.json())
            .then(dados => {
                try {
                    const raw = localStorage.getItem('produtos_descricao_overrides');
                    const overrides = raw ? JSON.parse(raw) : {};
                    const merged = (dados || []).map((p: any) => ({
                        ...p,
                        descricao: p.descricao || overrides[p.id] || ""
                    }));
                    setProdutos(merged);
                } catch (e) {
                    console.warn('Erro ao aplicar overrides de descrição:', e);
                    setProdutos(dados);
                }
            })
            .catch(erro => console.error("Erro ao buscar as poções da vitrine:", erro));
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto py-12">
            
            {produtos.length === 0 ? (
                <div className="text-center text-neutral-400 font-serif text-xl py-20">
                    O estoque de poções está vazio no momento ou o servidor está adormecido.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {produtos.map((produto) => (
                        <div 
                            key={produto.id} 
                            className="bg-neutral-900 border border-neutral-800 hover:shadow-[0_0_20px_rgba(180,83,9,0.15)] rounded-2xl overflow-hidden flex flex-col group transition-all duration-300"
                        >
                            {/* Imagem do Produto */}
                            <div className="relative w-full h-64 overflow-hidden bg-neutral-800 p-4 flex items-center justify-center">
                                <img 
                                    src={produto.imagem} 
                                    alt={produto.nome} 
                                    className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>

                            {/* Informações do Produto */}
                            <div className="p-6 flex flex-col gap-3 flex-1 text-center items-center">
                                
                                <h3 
                                    className="text-xl text-neutral-100 font-semibold"
                                    style={{ fontFamily: '"Playfair Display", serif' }}
                                >
                                    {produto.nome}
                                </h3>

                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    {produto.descricao || "Descrição não disponível."}
                                </p>
                                
                                <p className="text-2xl text-amber-500 font-bold mb-4">
                                    {produto.preco}
                                </p>

                                {/* Botão de Comprar da Vitrine */}
                                <div className="mt-auto w-full flex flex-col gap-3">
                                    <button 
                                        className="w-full bg-amber-700 hover:bg-amber-600 text-white font-serif uppercase tracking-widest text-sm py-3 px-4 rounded-xl transition-colors duration-300 shadow-lg cursor-pointer"
                                    >
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
}