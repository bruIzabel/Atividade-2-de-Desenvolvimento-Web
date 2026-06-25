// src/components/Navbar.tsx
import { useState } from "react";
import Simbolo from "./Simbolo";
import LoginModal from "./LoginModal";


export default function Navbar() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    return (
        <>
            <header className="relative w-full h-24 flex items-center justify-center px-4 md:px-8 border-b border-neutral-800 bg-neutral-900">
                
                <Simbolo />

                {/* Container da Direita (Login, Sign In e Carrinho) */}
                <div className="absolute right-4 md:right-8 flex items-center gap-4 md:gap-8">
                    
                    <button className="text-sm md:text-lg font-serif text-neutral-400 hover:text-amber-500 transition-colors cursor-pointer whitespace-nowrap">
                        Sign In
                    </button>

                        <button 
                            onClick={() => setIsLoginModalOpen(true)}
                            className="text-sm md:text-lg font-serif bg-neutral-800 hover:bg-neutral-700 text-neutral-100 py-2 px-3 md:py-3 md:px-8 rounded-xl transition-colors border border-neutral-700 shadow-sm cursor-pointer whitespace-nowrap"
                        >
                            Login
                        </button>
                    
                    <span className="w-px h-8 bg-neutral-700 hidden md:block"></span>

                    <button className="relative p-2 text-neutral-400 hover:text-amber-500 transition-colors cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </button>

                </div>
            </header>

            <LoginModal 
                isOpen={isLoginModalOpen} 
                onClose={() => setIsLoginModalOpen(false)} 
            />
        </>
    );
}