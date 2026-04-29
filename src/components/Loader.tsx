import { useEffect, useState } from "react";
import beeMascot from "@/assets/bee-mascot.png";

export const Loader = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background animate-fade-in">
      <div className="hex-pattern absolute inset-0" />
      <div className="relative flex flex-col items-center gap-6">
        <img
          src={beeMascot}
          alt="Beelivery carregando"
          className="h-32 w-32 animate-buzz bee-trail"
        />
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-gradient">Beelivery</span>
        </div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 animate-[slide-in-right_1.4s_ease-out] bg-gradient-primary" />
        </div>
      </div>
    </div>
  );
};
