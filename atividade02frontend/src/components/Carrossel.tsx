export default function Carrossel() {
    return (
        <div className="flex flex-col md:flex-row gap-6 w-full mx-auto min-h-125 bg-neutral-900 rounded-xl overflow-hidden shadow-2xl my-8 border border-neutral-800">

            {/* Imagem */}
            <div className="w-full md:w-1/2 relative h-64 md:h-auto shrink-0">
                <img
                    src="/Potions.png"
                    alt="Frascos de poções mágicas sobre a mesa"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Degradê */}
                <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-transparent via-neutral-900/40 to-neutral-900"></div>
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2 flex justify-center items-center px-8 md:px-12 py-10 bg-neutral-900">
                <div className="max-w-lg text-center md:text-left">

                    <span className="text-amber-500 text-xs tracking-[0.2em] uppercase mb-4 block font-semibold">
                        Tradição & Magia
                    </span>

                    <h2 className="text-3xl md:text-4xl text-neutral-100 font-serif mb-6">
                        Sobre nós
                    </h2>

                    <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-serif">
                        Bem-vindo à{" "}
                        <strong className="text-amber-400 font-normal">
                            Poções e Soluções
                        </strong>
                        . Desde 1867, nossa loja oferece poções, elixires e
                        soluções alquímicas para bruxos, aventureiros e
                        estudiosos da magia.
                    </p>

                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-serif mt-4">
                        Com receitas tradicionais passadas por gerações,
                        unimos conhecimento arcano e qualidade para criar
                        produtos únicos capazes de transformar o cotidiano
                        em algo extraordinário.
                    </p>

                </div>
            </div>

        </div>
    );
}