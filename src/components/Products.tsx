import { Plus } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { products, type Product } from "@/data/products";

interface ProductsProps {
  onAdd: (product: Product, originRect: DOMRect) => void;
}

export const Products = ({ onAdd }: ProductsProps) => {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleAdd = (p: Product) => {
    const el = refs.current[p.id];
    if (el) {
      onAdd(p, el.getBoundingClientRect());
    } else {
      onAdd(p, new DOMRect(window.innerWidth / 2, window.innerHeight / 2, 0, 0));
    }
  };

  return (
    <section id="produtos" className="relative py-24">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Nossos <span className="text-gradient">produtos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Selecionados a dedo (ou melhor, a antena) para você.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-2xl glass-card-cream transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-elegant"
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-2xl"
                />
                <div className="absolute top-3 left-3 rounded-full bg-background/70 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-primary border border-primary/30">
                  {p.category}
                </div>
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-sm line-clamp-2 min-h-[2.5rem] text-gray-900">{p.name}</h3>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-xs text-gray-600">a partir de</div>
                    <div className="text-xl font-black text-amber-600">
                      R$ {p.price.toFixed(2).replace(".", ",")}
                    </div>
                  </div>
                  <Button
                    ref={(el) => (refs.current[p.id] = el)}
                    onClick={() => handleAdd(p)}
                    size="icon"
                    variant="hero"
                    className="rounded-full h-10 w-10"
                    aria-label={`Adicionar ${p.name}`}
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
