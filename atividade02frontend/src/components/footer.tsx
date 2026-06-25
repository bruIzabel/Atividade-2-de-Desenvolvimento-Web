export default function Rodape() {
    return (
        <footer className="w-full bg-neutral-900 border-t border-neutral-800 py-12 px-4 md:px-8 mt-12 flex flex-col items-center justify-center">
            
            {/* Container Principal Centralizado */}
            <div className="w-full flex flex-col items-center justify-center gap-10 text-center">
                
                {/* Informações da Marca */}
                <div className="flex flex-col items-center gap-3">
                    <h3 
                        className="text-2xl text-neutral-100"
                        style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}
                    >
                        Merigold's Elixir
                    </h3>
                    <p className="text-neutral-400 text-sm max-w-md font-serif">
                        Poções, elixires e soluções mágicas desde 1867. 
                        Trazendo a antiga alquimia para os dias modernos.
                    </p>
                </div>

                {/* Redes Sociais e Contato */}
                <div className="flex flex-col items-center gap-4">
                    <p className="text-neutral-300 font-serif text-sm">Entre em contato:</p>
                    <div className="flex items-center justify-center gap-6">
                        
                        {/* WhatsApp */}
                        <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors" aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>

                        {/* Email */}
                        <a href="mailto:contato@merigolds.com" className="text-neutral-400 hover:text-amber-500 transition-colors" aria-label="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </a>
                        
                    </div>
                </div>
            </div>

            {/* Direitos Autorais Centralizados */}
            <div className="w-full mt-12 pt-6 border-t border-neutral-800 flex flex-col items-center justify-center gap-2 text-xs text-neutral-500 text-center">
                <p>&copy; {new Date().getFullYear()} Merigold's Elixir. Todos os direitos reservados.</p>
                <p>Feito com magia e alquimia.</p>
            </div>
            
        </footer>
    );
}