// src/components/ModalAdicionar.tsx
import { useState } from "react";

interface NovoProduto {
    nome: string;
    preco: string;
    imagem: string;
    descricao: string;
}

interface ModalAdicionarProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (produto: NovoProduto) => void;
}

export default function ModalAdicionar({ isOpen, onClose, onConfirm }: ModalAdicionarProps) {
    // Estados para os campos do formulário
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");
    const [descricao, setDescricao] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!nome || !preco) return;

        // Cria o objeto do novo produto. Se não puser imagem, usa a padrão.
        const produtoFinal = {
            nome,
            preco: preco.toLowerCase().includes('moedas') ? preco : `${preco} moedas`, // Garante a palavra "moedas"
            imagem: imagem || "https://i.ibb.co/ZzS7xb2/rsz-sky.png", // Imagem genérica se ficar vazio
            descricao
        };

        onConfirm(produtoFinal);
        
        // Limpa os campos para a próxima vez
        setNome("");
        setPreco("");
        setImagem("");
        setDescricao("");
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            <div 
                className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-[0_0_40px_rgba(180,83,9,0.15)] animate-in fade-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()} // Impede o clique de vazar e fechar o modal
            >
                {/* Botão Fechar (X) */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-500 hover:text-amber-500 transition-colors cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Cabeçalho */}
                <div className="flex flex-col items-center mb-8 text-center">
                    <h2 className="text-2xl text-neutral-100 font-bold mb-2 font-serif">
                        Criar Nova Poção
                    </h2>
                    <p className="text-neutral-400 text-sm font-serif">
                        Preencha os ingredientes para adicionar ao estoque.
                    </p>
                </div>

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    {/* Nome */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-neutral-300 font-serif" htmlFor="nome">Nome do Produto</label>
                        <input 
                            type="text" 
                            id="nome"
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Ex: Poção do Amor"
                            className="w-full bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-xl px-4 py-3 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all placeholder:text-neutral-600"
                        />
                    </div>

                    {/* Descrição */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-neutral-300 font-serif" htmlFor="descricao">Descrição</label>
                        <textarea
                            id="descricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            placeholder="Ex: Poção que traz sorte por 7 dias"
                            rows={4}
                            className="w-full bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-xl px-4 py-3 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all placeholder:text-neutral-600 resize-none"
                        />
                    </div>

                    {/* Preço */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-neutral-300 font-serif" htmlFor="preco">Valor</label>
                        <input 
                            type="text" 
                            id="preco"
                            required
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                            placeholder="Ex: 150"
                            className="w-full bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-xl px-4 py-3 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all placeholder:text-neutral-600"
                        />
                    </div>

                    {/* URL da Imagem */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-neutral-300 font-serif" htmlFor="imagem">URL da Imagem</label>
                        <input 
                            type="text" 
                            id="imagem"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                            placeholder="https://..."
                            className="w-full bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-xl px-4 py-3 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all placeholder:text-neutral-600"
                        />
                    </div>

                    {/* Botões */}
                    <div className="flex gap-3 mt-4">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-serif text-sm py-3 px-4 rounded-xl transition-colors duration-300 cursor-pointer"
                        >
                            Cancelar
                        </button>
                        
                        <button 
                            type="submit"
                            className="flex-1 bg-amber-700 hover:bg-amber-600 text-white font-serif uppercase tracking-widest text-sm py-3 px-4 rounded-xl transition-colors duration-300 shadow-lg cursor-pointer"
                        >
                            Criar Produto
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
}