import { useState, useEffect } from "react";
import Simbolo from "../components/Simbolo";
import Rodape from "../components/footer";
import ModalDeletar from "../components/ModalDeletar";
import ModalAdicionar from "../components/ModalAdicionar";

interface Produto {
    id: number;
    nome: string;
    preco: string;
    imagem: string;
    descricao?: string;
}

export default function Adimin() {
    // Estados para gerenciar a tela
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState<number | null>(null);
    
    // Estados para controlar os Modais
    const [produtoParaDeletar, setProdutoParaDeletar] = useState<Produto | null>(null);
    const [isModalAdicionarOpen, setIsModalAdicionarOpen] = useState(false);

    // 1. BUSCAR PRODUTOS DO BANCO AO CARREGAR A PÁGINA
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
            .catch(erro => console.error("Erro ao buscar poções:", erro));
    }, []);

    // Função para mostrar ou esconder o botão de deletar no card
    const handleSelecionarCard = (id: number) => {
        setProdutoSelecionado(produtoSelecionado === id ? null : id);
    };

    // Função para abrir o modal de confirmação de exclusão
    const handleAbrirModalDeletar = (e: React.MouseEvent, produto: Produto) => {
        e.stopPropagation();
        setProdutoParaDeletar(produto);
    };

    // 2. DELETAR PRODUTO NO BANCO DE DADOS
    const confirmarDelecao = async (id: number) => {
        try {
            const resposta = await fetch(`http://localhost:3001/api/produtos/${id}`, {
                method: "DELETE"
            });

            if (resposta.ok) {
                // Tira da tela após confirmar com o servidor
                setProdutos(produtos.filter(produto => produto.id !== id));
                setProdutoParaDeletar(null);
                setProdutoSelecionado(null);
            }
        } catch (erro) {
            console.error("Erro ao deletar:", erro);
        }
    };

    // 3. ADICIONAR PRODUTO NO BANCO DE DADOS
    const handleAdicionarProdutoConfirm = async (novoProduto: Omit<Produto, 'id'>) => {
        try {
            const resposta = await fetch("http://localhost:3001/api/produtos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(novoProduto)
            });
            
            if (resposta.ok) {
                const produtoSalvo = await resposta.json();
                const produtoParaTela = {
                    ...produtoSalvo,
                    descricao: novoProduto.descricao || produtoSalvo.descricao || ""
                };
                setProdutos([...produtos, produtoParaTela]); 
                try {
                    const key = 'produtos_descricao_overrides';
                    const raw = localStorage.getItem(key);
                    const map = raw ? JSON.parse(raw) : {};
                    if (produtoParaTela.id) map[produtoParaTela.id] = produtoParaTela.descricao || "";
                    localStorage.setItem(key, JSON.stringify(map));
                } catch (err) {
                    console.warn('Não foi possível salvar descrição localmente:', err);
                }
                setIsModalAdicionarOpen(false); // Fecha o modal
            }
        } catch (erro) {
            console.error("Erro ao adicionar:", erro);
        }
    };

    return (
        <>
            <div className="flex flex-col w-full min-h-screen bg-[#121212] text-white overflow-y-auto">
                
                {/* CABEÇALHO ADMIN */}
                <header className="w-full flex items-center justify-between px-6 md:px-12 pt-8 pb-4">
                    <div className="flex-1"></div>

                    <div className="flex-1 flex justify-center">
                        <Simbolo />
                    </div>

                    {/*Botão de Logout*/}
                    <div className="flex-1 flex justify-end">
                        <a 
                            href="/" 
                            className="mr-12 md:mr-24 flex items-center gap-2 border border-neutral-800 bg-neutral-900/50 text-neutral-300 hover:text-red-400 hover:border-red-900 hover:bg-red-950/40 font-serif uppercase tracking-widest text-sm py-2 px-5 rounded-xl transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                <polyline points="16 17 21 12 16 7"></polyline>
                                <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg>
                            <span className="hidden sm:inline">Log Out</span>
                        </a>
                    </div>
                </header>

                <main 
                    className="flex-1 px-4 md:px-8 py-10 flex flex-col w-full"
                    onClick={() => setProdutoSelecionado(null)} 
                >
                    <div className="w-full flex-1 flex flex-col rounded-3xl bg-neutral-900/80 border border-neutral-800 p-8 shadow-xl">
                        
                        <h1 className="text-3xl md:text-4xl font-serif text-amber-400 mb-2">
                            Página de Administrador
                        </h1>
                        
                        {produtos.length === 0 ? (
                            <div className="flex-1 flex items-center justify-center text-center text-neutral-400 font-serif text-lg py-12 border border-dashed border-neutral-700 rounded-2xl">
                                O estoque está vazio ou o servidor ainda está preparando as poções...
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-10">
                                
                                {produtos.map((produto) => (
                                    <div 
                                        key={produto.id} 
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            handleSelecionarCard(produto.id);
                                        }}
                                        // h-full garante que todos os cards fiquem do mesmo tamanho na linha
                                        className={`bg-neutral-900 border ${
                                            produtoSelecionado === produto.id 
                                            ? 'border-red-900/50 shadow-[0_0_20px_rgba(153,27,27,0.15)]' 
                                            : 'border-neutral-800 hover:border-neutral-600'
                                        } rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 cursor-pointer`}
                                    >
                                        <div className="relative w-full h-48 overflow-hidden bg-neutral-800 p-4 flex items-center justify-center shrink-0">
                                            <img src={produto.imagem} alt={produto.nome} className="object-contain w-full h-full" />
                                        </div>

                                        <div className="p-5 flex flex-col flex-1 text-center items-center w-full">
                                            
                                            <div className="flex flex-col flex-1 w-full gap-2">
                                                <h3 className="text-lg text-neutral-100 font-semibold" style={{ fontFamily: '"Playfair Display", serif' }}>
                                                    {produto.nome}
                                                </h3>
                                                <p className="text-sm text-neutral-400 leading-relaxed">
                                                    {produto.descricao || "Descrição não disponível."}
                                                </p>
                                            </div>

                                            {/* Bloco Inferior: Preço e Botão travados na base */}
                                            <div className="w-full mt-4 flex flex-col gap-4">
                                                <p className="text-xl text-amber-500 font-bold">
                                                    {produto.preco}
                                                </p>

                                                {produtoSelecionado === produto.id && (
                                                    <div className="w-full animate-in fade-in slide-in-from-top-2">
                                                        <button 
                                                            onClick={(e) => handleAbrirModalDeletar(e, produto)}
                                                            className="w-full bg-red-950/40 hover:bg-red-900 text-red-400 hover:text-red-100 border border-red-900/50 font-serif uppercase tracking-widest text-sm py-2 px-4 rounded-xl transition-all duration-300 shadow-lg cursor-pointer"
                                                        >
                                                            Deletar Produto
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}

                            </div>
                        )}

                        <div className="mt-auto pt-8 border-t border-neutral-800 flex justify-center md:justify-end">
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsModalAdicionarOpen(true);
                                }}
                                className="flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white font-serif uppercase tracking-widest text-sm py-3 px-6 md:px-8 rounded-xl transition-colors duration-300 shadow-lg cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                Adicionar Produto
                            </button>
                        </div>

                    </div>
                </main>

                <Rodape />
            </div>

            <ModalDeletar 
                isOpen={produtoParaDeletar !== null} 
                produto={produtoParaDeletar} 
                onClose={() => setProdutoParaDeletar(null)} 
                onConfirm={confirmarDelecao} 
            />

            <ModalAdicionar 
                isOpen={isModalAdicionarOpen}
                onClose={() => setIsModalAdicionarOpen(false)}
                onConfirm={handleAdicionarProdutoConfirm}
            />
        </>
    );
}