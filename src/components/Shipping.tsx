import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Truck } from "lucide-react";

const shippingOptions = [
  {
    id: "rapido",
    title: "🚀 Rápido",
    time: "10m - 20m",
    price: "12,99",
  },
  {
    id: "comum",
    title: "🚚 Comum",
    time: "35m - 55m",
    price: "6,99",
  },
] as const;

export const Shipping = () => {
  const [cep, setCep] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    setCep(value.slice(0, 9));
  };

  const calculateFrete = () => {
    if (cep.replace(/\D/g, "").length === 8) {
      setShowResults(true);
    } else {
      alert("CEP inválido. Digite 8 dígitos.");
    }
  };

  return (
<section id="frete" className="relative py-24">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Calcule seu <span className="text-gradient">frete</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Digite seu CEP e veja as opções de entrega mais rápidas da cidade! 🐝
          </p>
        </div>

        {!showResults ? (
          <div className="max-w-md mx-auto">
            <div className="space-y-4">
              <div>
                <Label htmlFor="cep">CEP</Label>
                <Input
                  id="cep"
                  placeholder="00000-000"
                  value={cep}
                  onChange={handleCepChange}
                  className="text-center text-2xl tracking-wider font-mono"
                />
              </div>
              <Button onClick={calculateFrete} className="w-full">
                <MapPin className="mr-2 h-4 w-4" />
                Calcular Frete
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {shippingOptions.map((option) => (
              <Card key={option.id} className="glass-card hover:shadow-glow-soft transition-all group">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-2xl font-black group-hover:text-primary transition-colors">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <div className="text-3xl font-black text-primary">{option.time}</div>
                  <div className="text-2xl font-black text-gradient">
                    R$ {option.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Entrega estimada a partir do seu CEP
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

