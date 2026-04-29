import { ClipboardList, Rocket, Smartphone } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Escolha suas bebidas",
    desc: "Navegue pelo nosso catálogo cheio de opções geladinhas.",
  },
  {
    icon: ClipboardList,
    title: "Faça o pedido",
    desc: "Adicione ao carrinho e confirme em poucos cliques.",
  },
  {
    icon: Rocket,
    title: "Receba em minutos",
    desc: "Nossa abelha voa até você com sua bebida favorita.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="relative py-24">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Como <span className="text-gradient">funciona</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Três passos para matar sua sede com estilo.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative glass-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full group-hover:bg-primary/50 transition-colors" />
                <div className="relative h-24 w-24 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow-primary">
                  <step.icon className="h-10 w-10" />
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-background border-2 border-primary flex items-center justify-center font-black text-primary text-sm">
                  {i + 1}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-black">{step.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
