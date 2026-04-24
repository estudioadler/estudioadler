import { z } from "zod"

export const SERVICOS = [
  { id: "site-institucional", label: "Site institucional" },
  { id: "landing-page", label: "Landing page" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "pagina-de-vendas", label: "Página de vendas" },
  { id: "seo", label: "SEO" },
  { id: "gestao-mensal", label: "Gestão mensal" },
  { id: "outro", label: "Outro" },
] as const

export const VERBAS = [
  { value: "indefinido", label: "Ainda não tenho valor definido" },
  { value: "ate-2k", label: "Pretendo investir até R$2.000" },
  { value: "2k-5k", label: "Pretendo investir entre R$2.000 e R$5.000" },
  { value: "5k-10k", label: "Pretendo investir entre R$5.000 e R$10.000" },
  { value: "acima-10k", label: "Pretendo investir mais de R$10.000" },
] as const

export const CONTATOS = [
  { value: "email", label: "E-mail" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "telefone", label: "Telefone" },
  { value: "call", label: "Desejo marcar uma call" },
] as const

export const orcamentoSchema = z.object({
  servicos: z
    .array(z.string())
    .min(1, "Selecione pelo menos um serviço"),
  verba: z
    .string()
    .min(1, "Selecione uma opção de investimento"),
  empresa: z
    .string()
    .min(2, "Nome da empresa deve ter pelo menos 2 caracteres")
    .max(100, "Nome da empresa muito longo"),
  projeto: z
    .string()
    .min(20, "Descreva seu projeto com pelo menos 20 caracteres")
    .max(2000, "Descrição muito longa"),
  contato: z
    .string()
    .min(1, "Selecione uma forma de contato"),
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  email: z
    .string()
    .email("E-mail inválido"),
  telefone: z
    .string()
    .min(10, "Telefone inválido")
    .max(20, "Telefone inválido")
    .regex(/^[\d\s()+-]+$/, "Formato de telefone inválido"),
})

export type OrcamentoFormData = z.infer<typeof orcamentoSchema>
