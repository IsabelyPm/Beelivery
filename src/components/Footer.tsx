import beeMascot from "@/assets/bee-mascot.png";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12 mt-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src={beeMascot} alt="" className="h-8 w-8 bee-trail" />
              <span className="text-lg font-black text-gradient">Beelivery</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Seu delivery de bebidas, mais rápido que uma abelha.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#categorias" className="hover:text-primary transition-colors">Categorias</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Produtos</a></li>
              <li><a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Devign. Feito com 🍯 e muito buzz.
        </div>
      </div>
    </footer>
  );
};
