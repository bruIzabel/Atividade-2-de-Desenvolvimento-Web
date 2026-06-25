import Simbolo from "./Simbolo"; // Ajuste o caminho de importação conforme sua estrutura

export default function NavbarAdmin() {
    return (
        <nav className="w-full flex items-center justify-between px-4 md:px-8 pt-8 pb-4">
            <div className="flex-1"></div>

            <div className="flex justify-center flex-1">
                <Simbolo />
            </div>

            {/* Botão de Logout */}
            <div className="flex justify-end flex-1 mr-4 md:mr-8">
                <a 
                    href="/"
                    className="flex items-center gap-2 border border-neutral-800 bg-neutral-900/50 text-neutral-300 hover:text-red-400 hover:border-red-900 hover:bg-red-950/40 font-serif uppercase tracking-widest text-sm py-2 px-4 rounded-xl transition-all duration-300 shadow-lg cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span className="hidden sm:inline">Log Out</span>
                </a>
            </div>
        </nav>
    );
}