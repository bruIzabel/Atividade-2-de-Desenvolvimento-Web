export default function Historia() {
    return (
        <div className="flex flex-col w-full bg-neutral-900 rounded-xl overflow-hidden my-8 border border-neutral-800 py-12 px-8 gap-16 md:gap-24">

            {/* --- PRIMEIRA LINHA --- */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24">
                {/* Texto 1 */}
                <div className="w-full md:w-auto flex flex-col items-center text-center">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl text-neutral-100 font-serif mb-6">
                            Nossa História
                        </h2>

                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-serif mb-4">
                            A história da Poções e Soluções começou em 1867, quando a alquimista
                            Annabelle Merigold I abriu um pequeno laboratório escondido entre as
                            vielas do Beco da Última Saída.
                        </p>

                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-serif">
                            Naquela época, a cidade enfrentava uma grande crise causada pela
                            escassez de ingredientes mágicos. Enquanto muitos comerciantes
                            abandonavam seus negócios, Annabelle decidiu compartilhar seus
                            conhecimentos de alquimia com a população local, criando poções
                            acessíveis para auxiliar viajantes, comerciantes e moradores.
                        </p>
                    </div>
                </div>

                {/* Imagem 1 */}
                <div className="shrink-0 flex justify-center items-center">
                    <div className="p-6 rounded-full border-2 border-dashed border-amber-700/50 bg-neutral-800 shadow-[0_0_20px_rgba(180,83,9,0.15)]">
                        <img
                            src="/Primeiraloja.png"
                            alt="Primeira loja antiga"
                            className="w-64 h-64 md:w-96 md:h-96 lg:w-md lg:h-112 object-cover rounded-full border-4 border-neutral-900"
                        />
                    </div>
                </div>
            </div>

            {/* --- SEGUNDA LINHA --- */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24">
                {/* Imagem 2 */}
                <div className="shrink-0 flex justify-center items-center">
                    <div className="p-2 rounded-full border-2 border-dashed border-amber-700/50 bg-neutral-800 shadow-[0_0_20px_rgba(180,83,9,0.15)]">
                        <img
                            src="/atual.png"
                            alt="atual"
                            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-neutral-900"
                        />
                    </div>
                </div>
                
                {/* Texto 2 */}
                <div className="w-full md:w-auto flex flex-col items-center text-center">
                    <div className="max-w-2xl">
                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-serif mb-4">
                            Com o passar das décadas, a fama de suas fórmulas se espalhou pelos reinos vizinhos. 
                            Histórias sobre a lendária Poção Blue Sky, capaz de despertar ideias brilhantes, e o 
                            famoso Caldeirão das Verdades Secretas, utilizado por nobres e investigadores, atraíram 
                            clientes de todos os cantos do mundo mágico.
                        </p>

                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-serif">
                            Ao longo de cinco gerações, a família Merigold continuou aprimorando receitas, 
                            colecionando ingredientes raros e preservando segredos alquímicos transmitidos 
                            de mestre para aprendiz.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- TERCEIRA LINHA --- */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24">
                {/* Texto 3 */}
                <div className="w-full md:w-auto flex flex-col items-center text-center">
                    <div className="max-w-2xl">
                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-serif mb-4">
                            Com o passar das décadas, a fama de suas fórmulas se espalhou pelos reinos vizinhos. 
                            Histórias sobre a lendária Poção Blue Sky, capaz de despertar ideias brilhantes, e o 
                            famoso Caldeirão das Verdades Secretas, utilizado por nobres e investigadores, atraíram 
                            clientes de todos os cantos do mundo mágico.
                        </p>

                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-serif">
                            Ao longo de cinco gerações, a família Merigold continuou aprimorando receitas, 
                            colecionando ingredientes raros e preservando segredos alquímicos transmitidos 
                            de mestre para aprendiz.
                        </p>
                    </div>
                </div>

                {/* Imagem 3 */}
                <div className="shrink-0 flex justify-center items-center">
                    <div className="p-2 rounded-full border-2 border-dashed border-amber-700/50 bg-neutral-800 shadow-[0_0_20px_rgba(180,83,9,0.15)]">
                        <img
                            src="/Loja.png"
                            alt="Loja"
                            className="w-64 h-64 md:w-96 md:h-96 lg:w-md lg:h-112 object-cover rounded-full border-4 border-neutral-900"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}