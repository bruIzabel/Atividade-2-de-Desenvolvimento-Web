import { useState } from "react";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    // 1. Estados para guardar o que o usuário digita
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(false); // Estado para mostrar mensagem de erro

    // Se o modal não estiver aberto, não renderiza nada
    if (!isOpen) return null;

    // 2. Função que roda ao tentar logar
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault(); // Evita que a página recarregue ao enviar o formulário

        if (email === "admin@merigold.com" && senha === "admin123") {
            setErro(false);
            window.location.href = "/admin"; 
        } else {
            // Se errar a senha ou email, mostra o erro
            setErro(true);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
            
            <div className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-[0_0_40px_rgba(180,83,9,0.15)] animate-in fade-in zoom-in-95 duration-300">
                
                {/* Botão de Fechar */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-500 hover:text-amber-500 transition-colors cursor-pointer"
                    aria-label="Fechar"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="flex flex-col items-center mb-8 text-center">
                    <img src="/simbolo.png" alt="Símbolo" className="h-10 w-auto mb-4 opacity-80" />
                    <h2 className="text-2xl text-neutral-100 font-bold mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                        Bem-vindo de volta
                    </h2>
                    <p className="text-neutral-400 text-sm font-serif">
                        Acesse seu grimório de pedidos e poções.
                    </p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-5">
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-neutral-300 font-serif" htmlFor="email">
                            E-mail Mágico
                        </label>
                        <input 
                            type="email" 
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do e-mail
                            required
                            placeholder="admin@merigold.com"
                            className="w-full bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-xl px-4 py-3 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all placeholder:text-neutral-600"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm text-neutral-300 font-serif" htmlFor="password">
                                Palavra-passe
                            </label>
                            <a href="#" className="text-xs text-amber-600 hover:text-amber-500 transition-colors">
                                Esqueceu o feitiço?
                            </a>
                        </div>
                        <input 
                            type="password" 
                            id="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
                            required
                            placeholder="••••••••"
                            className="w-full bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-xl px-4 py-3 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all placeholder:text-neutral-600"
                        />
                    </div>

                    {erro && (
                        <p className="text-red-500 text-xs font-serif text-center mt-1">
                            Credenciais incorretas. Tente novamente.
                        </p>
                    )}

                    <button 
                        type="submit" 
                        className="w-full bg-amber-700 hover:bg-amber-600 text-white font-serif uppercase tracking-widest text-sm py-3 px-4 rounded-xl transition-colors duration-300 shadow-lg mt-2 cursor-pointer"
                    >
                        Entrar no Laboratório
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-neutral-400">
                        Ainda não é um aprendiz?{' '}
                        <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors font-semibold">
                            Crie sua conta
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
}