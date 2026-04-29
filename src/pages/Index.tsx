import { useState } from "react";
import { toast } from "sonner";
import { Cart, type CartItem } from "@/components/Cart";
import { Categories } from "@/components/Categories";
import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Shipping } from "@/components/Shipping";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import type { Product } from "@/data/products";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  const cartCount = items.reduce((acc, i) => acc + i.quantity, 0);

  // handleAdd simplificado: removemos a lógica da abelha e o atraso (timeout)
  const handleAdd = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    toast.success(`${product.name} adicionado!`, {
      description: "Item adicionado ao seu carrinho.",
    });
  };

  const increment = (id: string) =>
    setItems((p) => p.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)));
  
  const decrement = (id: string) =>
    setItems((p) =>
      p.flatMap((i) =>
        i.id === id ? (i.quantity > 1 ? [{ ...i, quantity: i.quantity - 1 }] : []) : [i]
      )
    );
    
  const remove = (id: string) => setItems((p) => p.filter((i) => i.id !== id));

  return (
    <div className="relative min-h-screen">
      <Loader />

      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />

      <main>
        <Hero />
        <Categories />
        <Products onAdd={handleAdd} />
        <Shipping />
        <HowItWorks />
        <Features />
        <CTA onOrder={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })} />
      </main>

      <Footer />

      <Cart
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={items}
        onIncrement={increment}
        onDecrement={decrement}
        onRemove={remove}
      />
    </div>
  );
};

export default Index;