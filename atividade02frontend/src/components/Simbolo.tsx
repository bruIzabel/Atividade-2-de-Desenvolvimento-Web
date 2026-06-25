export default function Simbolo() {
    return (
        <div 
            className="flex items-center gap-4 text-2xl md:text-3xl text-neutral-100"
            style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
            }}
        >
            <span>Merigold's Elixir</span>
            
            <img 
                src="/simbolo.png" 
                alt="Símbolo Merigold" 
                className="h-8 md:h-10 w-auto object-contain" 
            />
        </div>
    );
}