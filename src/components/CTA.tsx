import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import beeWave from "@/assets/bee-wave.png";

interface CTAProps {
  onOrder: () => void;
}

export const CTA = ({ onOrder }: CTAProps) => {
  return (
    <section className="relative py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl glass-card p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-glow opacity-50" />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

          <img
            src={beeWave}
            alt=""
            loading="lazy"
            className="hidden md:block absolute right-8 bottom-0 h-64 w-64 animate-float bee-trail"
          />

          <div className="relative max-w-2xl mx-auto md:text-left md:mr-auto md:ml-0 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Pronto para <span className="text-gradient">matar a sede?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Sua bebida favorita está a poucos cliques. A gente leva, você curte.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-start justify-center">
              <Button variant="hero" size="xl" onClick={onOrder}>
                Pedir agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
