const categories = [
  { name: "Cervejas", emoji: "🍺", color: "from-amber-500/20 to-yellow-500/10" },
  { name: "Refrigerantes", emoji: "🥤", color: "from-red-500/20 to-orange-500/10" },
  { name: "Energéticos", emoji: "⚡", color: "from-blue-500/20 to-cyan-500/10" },
  { name: "Sucos", emoji: "🍹", color: "from-orange-500/20 to-yellow-500/10" },
  { name: "Água", emoji: "💧", color: "from-sky-500/20 to-blue-500/10" },
  { name: "Drinks Prontos", emoji: "🍷", color: "from-purple-500/20 to-pink-500/10" },
];

export const Categories = () => {
  return (
    <section id="categorias" className="relative py-24">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Escolha sua <span className="text-gradient">categoria</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tudo que você precisa para refrescar o dia, em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              className="group relative overflow-hidden rounded-2xl glass-card p-6 text-center transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-glow-soft"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6 inline-block">
                  {cat.emoji}
                </div>
                <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {cat.name}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
