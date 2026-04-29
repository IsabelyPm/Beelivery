import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import beeMascot from "@/assets/bee-mascot.png";
import type { Product } from "@/data/products";

export type CartItem = Product & { quantity: number };

interface CartProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItem[];
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
}

export const Cart = ({ open, onOpenChange, items, onIncrement, onDecrement, onRemove }: CartProps) => {
  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const delivery = total > 0 ? 5.9 : 0;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-background border-l border-border w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="flex items-center gap-2 text-2xl font-black">
            <ShoppingBag className="h-6 w-6 text-primary" />
            Seu carrinho
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
              <img src={beeMascot} alt="" className="h-32 w-32 animate-float bee-trail" />
              <div>
                <p className="font-bold text-lg">Carrinho vazio</p>
                <p className="text-sm text-muted-foreground mt-1">
                  A abelha está esperando seu pedido!
                </p>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 glass-card rounded-2xl p-3 animate-fade-in"
              >
                <div className="h-20 w-20 shrink-0 rounded-xl bg-gradient-glow overflow-hidden">
                  <img src={item.image} alt="" className="h-full w-full object-contain p-2" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm line-clamp-1">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                  <div className="text-primary font-black mt-1">
                    R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Remover"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <div className="flex items-center gap-1 rounded-full bg-muted">
                    <button
                      onClick={() => onDecrement(item.id)}
                      className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                      aria-label="Diminuir"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-sm font-bold w-5 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onIncrement(item.id)}
                      className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                      aria-label="Aumentar"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4 bg-card/50 backdrop-blur-md">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Entrega</span>
                <span>R$ {delivery.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="flex justify-between text-lg font-black pt-2 border-t border-border">
                <span>Total</span>
                <span className="text-primary">
                  R$ {(total + delivery).toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>
            <Button variant="hero" size="lg" className="w-full">
              Finalizar pedido
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
