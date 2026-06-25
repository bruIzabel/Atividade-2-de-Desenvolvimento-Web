// src/components/ModalDeletar.tsx

interface Produto {
    id: number;
    nome: string;
}

interface ModalDeletarProps {
    isOpen: boolean;
    produto: Produto | null;
    onClose: () => void;
    onConfirm: (id: number) => void;
}

export default function ModalDeletar({ isOpen, produto, onClose, onConfirm }: ModalDeletarProps) {
    if (!isOpen || !produto) return null;

    return (
        // 1. Adicionamos o onClick={onClose} aqui no fundo escuro
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            {/* 2. Adicionamos o e.stopPropagation() aqui para não fechar se clicar DENTRO da caixa */}
            <div 
                className="relative w-full max-w-sm bg-neutral-900 border border-red-900/50 rounded-2xl p-6 shadow-[0_0_40px_rgba(153,27,27,0.15)] animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center text-center"
                onClick={(e) => e.stopPropagation()}
            >
                
                <div className="w-12 h-12 rounded-full bg-red-950/50 text-red-500 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </div>

                <h2 className="text-xl text-neutral-100 font-bold mb-2 font-serif">
                    Deletar Poção?
                </h2>
                <p className="text-neutral-400 text-sm mb-6">
                    Você está prestes a apagar <strong>{produto.nome}</strong>. Esta ação não poderá ser desfeita.
                </p>

                <div className="flex w-full gap-3">
                    <button 
                        onClick={onClose}
                        className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-serif text-sm py-2 px-4 rounded-xl transition-colors duration-300 cursor-pointer"
                    >
                        Cancelar
                    </button>
                    
                    <button 
                        onClick={() => onConfirm(produto.id)}
                        className="flex-1 bg-red-900 hover:bg-red-800 text-white font-serif text-sm py-2 px-4 rounded-xl transition-colors duration-300 shadow-lg cursor-pointer"
                    >
                        Sim, Deletar
                    </button>
                </div>

            </div>
        </div>
    );
}