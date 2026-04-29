import { Menu, ShoppingCart, X } from "lucide-react";
import beeMascot from "@/assets/bee-mascot.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar = ({ cartCount, onOpenCart }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-30 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <img
            src={beeMascot}
            alt="Beelivery"
            className="h-9 w-9 transition-transform group-hover:scale-110 group-hover:rotate-12 bee-trail"
          />
          <span className="text-xl font-black tracking-tight text-gradient">Beelivery</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#categorias" className="text-muted-foreground hover:text-primary transition-colors">Categorias</a>
          <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">Produtos</a>
          <a href="#frete" className="text-muted-foreground hover:text-primary transition-colors">Frete</a>
          <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors">Como Funciona</a>
          <a href="#diferenciais" className="text-muted-foreground hover:text-primary transition-colors">Diferenciais</a>

        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={onOpenCart}
            variant="ghost"
            size="icon"
            className="relative hover:bg-primary/10 hover:text-primary"
            aria-label="Abrir carrinho"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground animate-scale-in glow-primary">
                {cartCount}
              </span>
            )}
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-72">
              <SheetHeader className="p-6 border-b border-border/40">
                <SheetTitle className="flex items-center gap-2">
                  <img src={beeMascot} alt="" className="h-8 w-8" />
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-6 gap-4 text-base">
                <a href="#categorias" className="text-muted-foreground hover:text-primary transition-colors py-2">Categorias</a>
                <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors py-2">Produtos</a>
                <a href="#frete" className="text-muted-foreground hover:text-primary transition-colors py-2">Frete</a>
                <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors py-2">Como Funciona</a>
                <a href="#diferenciais" className="text-muted-foreground hover:text-primary transition-colors py-2">Diferenciais</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
