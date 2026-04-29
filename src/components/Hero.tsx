import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import beeMascot from "@/assets/bee-mascot.png";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background ambient glows */}
      <div className="absolute inset-0 hex-pattern" />
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      {/* Floating elements */}
      <div className="absolute top-32 right-[15%] h-3 w-3 rounded-full bg-primary animate-float opacity-70" />
      <div className="absolute top-1/2 left-[10%] h-2 w-2 rounded-full bg-accent animate-float-slow opacity-60" />
      <div className="absolute bottom-32 right-[30%] h-4 w-4 rounded-full bg-primary-glow animate-float opacity-50" />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <Zap className="h-4 w-4 fill-primary" />
            Entrega em até 30 minutos
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
            Seu delivery de bebidas, mais rápido que uma{" "}
            <span className="text-gradient inline-block">abelha.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Peça suas bebidas favoritas com rapidez, estilo e sem complicação.
            Geladinhas na sua porta em minutos.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              variant="hero"
              onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Fazer pedido
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
            >
              Como funciona
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4 text-sm">
            <div>
              <div className="text-2xl font-black text-primary">+50k</div>
              <div className="text-muted-foreground">Pedidos entregues</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-black text-primary">4.9★</div>
              <div className="text-muted-foreground">Avaliação média</div>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-2xl font-black text-primary">30min</div>
              <div className="text-muted-foreground">Tempo médio</div>
            </div>
          </div>
        </div>

        {/* Mascote em destaque */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-glow blur-3xl" />
          <div className="absolute h-80 w-80 md:h-96 md:w-96 rounded-full border border-primary/20 animate-spin-slow" />
          <div className="absolute h-72 w-72 md:h-80 md:w-80 rounded-full border border-accent/10 animate-spin-slow" style={{ animationDirection: "reverse" }} />

          <img
            src={beeMascot}
            alt="Mascote Beelivery - abelha entregadora"
            width={1024}
            height={1024}
            className="relative h-80 w-80 md:h-[28rem] md:w-[28rem] animate-float bee-trail object-contain"
          />

          {/* Floating cards */}
          <div className="absolute top-10 right-0 glass-card rounded-2xl p-3 animate-float-slow">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold">Entregando agora</span>
            </div>
          </div>
          <div className="absolute bottom-16 left-0 glass-card rounded-2xl p-3 animate-float">
            <div className="text-xs text-muted-foreground">Tempo estimado</div>
            <div className="text-lg font-black text-primary">12 min</div>
          </div>
        </div>
      </div>
    </section>
  );
};
