import { useEffect, useState } from "react";
import beeMascot from "@/assets/bee-mascot.png";

/**
 * Mascote abelha que voa pela tela seguindo o cursor com leve atraso
 * e deixando um rastro luminoso suave.
 */
export const FlyingBee = () => {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [target, setTarget] = useState({ x: 100, y: 100 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let raf: number;
    let id = 0;
    const animate = () => {
      setPos((prev) => {
        const dx = target.x - prev.x;
        const dy = target.y - prev.y;
        const next = { x: prev.x + dx * 0.05, y: prev.y + dy * 0.05 };
        setTrail((t) => [...t.slice(-12), { ...next, id: id++ }]);
        return next;
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setTarget({ x: e.clientX + 40, y: e.clientY + 40 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden lg:block">
      {trail.map((t, i) => (
        <div
          key={t.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: t.x,
            top: t.y,
            width: 6 + i * 0.5,
            height: 6 + i * 0.5,
            opacity: (i / trail.length) * 0.4,
            filter: "blur(4px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      <img
        src={beeMascot}
        alt=""
        aria-hidden
        className="absolute h-16 w-16 bee-trail animate-buzz"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
};
