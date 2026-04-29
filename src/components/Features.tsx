import { Heart, Sparkles, Tag, Zap } from "lucide-react";

const features = [
  { icon: Zap, title: "Entrega rápida", desc: "Em até 30 minutos na sua porta, sempre geladinha." },
  { icon: Sparkles, title: "Interface intuitiva", desc: "Pedir é tão simples quanto abrir uma cerveja." },
  { icon: Tag, title: "Preços acessíveis", desc: "Promoções diárias para encher o carrinho sem peso na conta." },
  { icon: Heart, title: "Experiência divertida", desc: "Mais que delivery: uma vibe que faz parte da festa." },
];

export const Features = () => {
  return (
    <section id="diferenciais" className="relative py-24">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Por que <span className="text-gradient">Beelivery?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Diferenciais que fazem a gente voar mais alto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group glass-card rounded-2xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow-soft transition-all">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
