import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCopy } from "lucide-react";
import logo from "@/assets/PL-LOGO4.png";
import "@/index.css";

export default function CouponGenerator() {
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const generateCouponLink = () => {
    if (!name || !discount) return;
    const utmMedium = `${name}-${discount}OFF`;
    const url = `https://hudlab.com.br/cadastro-amostra-digital?utm_source=Cupom&utm_medium=${utmMedium}&utm_id=Cupom-de-desconto`;
    setGeneratedLink(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
  };

  return (
    <div className="flex flex-col items-center p-6 gap-4 bg-transparent">
      <Card className="w-full max-w-md p-4">
        <CardContent className="flex flex-col gap-4 items-center">
        <img src={logo} alt="Logo" className="w-auto h-28 m-5" />
          <label>@ Rede Social</label>
          <Input
            placeholder="Digite o nome do dono do cupom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Porcentagem do desconto</label>
          <Input
            type="number"
            placeholder="Digite a porcentagem do desconto"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <Button className="mt-5" onClick={generateCouponLink}>Gerar Cupom</Button>
        </CardContent>
      </Card>
      {generatedLink && (
        <Card className="w-full max-w-md p-4 flex flex-col items-center gap-2">
          <CardContent className="flex flex-col items-center gap-2">
            <p className="break-all text-center text-cyan-400">{generatedLink}</p>
            <Button className="mt-5" onClick={copyToClipboard} variant="outline">
              <ClipboardCopy className="w-4 h-4 mr-2" /> Copiar Link
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}