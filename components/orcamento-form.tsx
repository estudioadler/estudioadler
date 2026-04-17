"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { BaseButton } from "./base-button";

const SERVICOS = [
  { id: "site-institucional", label: "Site institucional" },
  { id: "landing-page", label: "Landing page" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "identidade-visual", label: "Identidade visual" },
  { id: "social-media", label: "Social media" },
  { id: "seo", label: "Otimização SEO" },
  { id: "outro", label: "Outro" },
];

export function OrcamentoForm() {
  const [servicos, setServicos] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleServico = (id: string) => {
    setServicos((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integra com seu backend ou serviço de e-mail
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl">
          ✓
        </div>
        <h3 className="text-2xl font-medium">
          Mensagem enviada!
        </h3>
        <p className="text-neutral-500 max-w-sm">
          Recebemos seu projeto. Nossa equipe entrará em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Serviços */}
      <fieldset className="space-y-4">
        <legend className="text-sm font-medium text-neutral-900">
          Como podemos ajudá-lo?{" "}
          <span className="text-rose-500">*</span>
        </legend>
        <div className="flex flex-wrap gap-3">
          {SERVICOS.map((s) => {
            const checked = servicos.includes(s.id);
            return (
              <label
                key={s.id}
                className={cn(
                  "flex items-center gap-3 w-fit border px-4 py-3 cursor-pointer transition-all duration-150",
                  checked
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                )}
              >
                <Checkbox
                  id={s.id}
                  checked={checked}
                  onCheckedChange={() => toggleServico(s.id)}
                  className={cn(
                    "border-neutral-400",
                    checked && "border-white data-[state=checked]:bg-white data-[state=checked]:text-neutral-900"
                  )}
                />
                <span className="text-sm font-medium">{s.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Verba */}
      <div className="space-y-2">
        <Label htmlFor="verba">
          Você já possui uma verba disponível para o projeto?{" "}
          <span className="text-rose-500">*</span>
        </Label>
        <Select required>
          <SelectTrigger id="verba">
            <SelectValue placeholder="Selecione"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="indefinido">Ainda não tenho valor definido</SelectItem>
            <SelectItem value="ate-5k">Pretendo investir até R$5.000</SelectItem>
            <SelectItem value="5k-10k">Pretendo investir entre R$5.000 e R$10.000</SelectItem>
            <SelectItem value="10k-20k">Pretendo investir entre R$10.000 e R$20.000</SelectItem>
            <SelectItem value="acima-20k">Pretendo investir mais de R$20.000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Empresa */}
      <div className="space-y-2">
        <Label htmlFor="empresa">
          Nome da sua empresa <span className="text-rose-500">*</span>
        </Label>
        <Input
          id="empresa"
          required
          placeholder="Ex: Loja da Maria"
          className="h-11 rounded-xl border-neutral-200"
        />
      </div>

      {/* Detalhes do projeto */}
      <div className="space-y-2">
        <Label htmlFor="projeto">
          Compartilhe informações relevantes sobre o seu projeto{" "}
          <span className="text-rose-500">*</span>
        </Label>
        <Textarea
          id="projeto"
          required
          rows={5}
          placeholder="Conte um pouco sobre seu negócio, objetivos e o que espera do projeto..."
          className="rounded-xl border-neutral-200 resize-none"
        />
      </div>

      {/* Contato preferido */}
      <div className="space-y-2">
        <Label htmlFor="contato">
          Como deseja manter o contato?{" "}
          <span className="text-rose-500">*</span>
        </Label>
        <Select required>
          <SelectTrigger id="contato" className="h-12 rounded-xl border-neutral-200">
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">E-mail</SelectItem>
            <SelectItem value="whatsapp">WhatsApp</SelectItem>
            <SelectItem value="telefone">Telefone</SelectItem>
            <SelectItem value="call">Desejo marcar uma call</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Dados pessoais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nome">
            Nome <span className="text-rose-500">*</span>
          </Label>
          <Input
            id="nome"
            required
            placeholder="Seu nome completo"
            className="h-11 rounded-xl border-neutral-200"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            E-mail <span className="text-rose-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="seu@email.com"
            className="h-11 rounded-xl border-neutral-200"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="telefone">
            Telefone / WhatsApp <span className="text-rose-500">*</span>
          </Label>
          <Input
            id="telefone"
            type="tel"
            required
            placeholder="(31) 98765-4321"
            className="h-11 rounded-xl border-neutral-200"
          />
        </div>
      </div>

      {/* LGPD */}
      <p className="text-xs text-neutral-400 leading-relaxed">
        Seus dados estão seguros. Ao enviar o formulário, você declara que está
        de acordo com a{" "}
        <a
          href="/politica-de-privacidade"
          className="underline underline-offset-2 hover:text-neutral-700 transition-colors"
        >
          Política de Privacidade
        </a>{" "}
        do Estúdio Adler.
      </p>

      <BaseButton text="Enviar mensagem" variant="dark" />
    </form>
  );
}