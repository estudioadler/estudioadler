"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
} from "@/components/ui/field"
import { cn } from "@/lib/utils"
import { Spinner } from "@/components/ui/spinner"
import {
  orcamentoSchema,
  SERVICOS,
  VERBAS,
  CONTATOS,
  type OrcamentoFormData,
} from "@/lib/validations/orcamento"

export function OrcamentoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<OrcamentoFormData>({
    resolver: zodResolver(orcamentoSchema),
    defaultValues: {
      servicos: [],
      verba: "",
      empresa: "",
      projeto: "",
      contato: "",
      nome: "",
      email: "",
      telefone: "",
    },
  })

  const onSubmit = async (data: OrcamentoFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar")
      }

      setSubmitted(true)

      if (result.whatsappUrl) {
        setTimeout(() => {
          window.open(result.whatsappUrl, "_blank")
        }, 1500)
      }
    } catch (error) {
      console.error("Erro ao enviar:", error)
      setError("root", {
        message: "Ocorreu um erro ao enviar. Tente novamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-medium">Mensagem enviada!</h3>
        <p className="text-neutral-500 max-w-sm">
          Recebemos seu projeto. Em breve, iremos entrar em contato.
          Você será redirecionado para o WhatsApp caso queira conversar diretamente.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      {/* Serviços */}
      <Controller
        control={control}
        name="servicos"
        render={({ field }) => (
          <Field data-invalid={!!errors.servicos}>
            <FieldLabel className="text-sm font-medium text-neutral-900">
              Como podemos ajudá-lo?{" "}
              <span className="text-rose-500">*</span>
            </FieldLabel>
            <div className="flex flex-wrap gap-3">
              {SERVICOS.map((s) => {
                const checked = field.value.includes(s.id)
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
                      checked={checked}
                      onCheckedChange={(isChecked) => {
                        const newValue = isChecked
                          ? [...field.value, s.id]
                          : field.value.filter((v) => v !== s.id)
                        field.onChange(newValue)
                      }}
                      className={cn(
                        "border-neutral-400",
                        checked &&
                          "border-white data-[state=checked]:bg-white data-[state=checked]:text-neutral-900"
                      )}
                    />
                    <span className="text-sm font-medium">{s.label}</span>
                  </label>
                )
              })}
            </div>
            <FieldError errors={[errors.servicos]} />
          </Field>
        )}
      />

      {/* Verba */}
      <Controller
        control={control}
        name="verba"
        render={({ field }) => (
          <Field data-invalid={!!errors.verba}>
            <FieldLabel>
              Você já possui uma verba disponível para o projeto?{" "}
              <span className="text-rose-500">*</span>
            </FieldLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="h-11 rounded-xl border-neutral-200">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {VERBAS.map((v) => (
                  <SelectItem key={v.value} value={v.value}>
                    {v.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError errors={[errors.verba]} />
          </Field>
        )}
      />

      {/* Empresa */}
      <Controller
        control={control}
        name="empresa"
        render={({ field }) => (
          <Field data-invalid={!!errors.empresa}>
            <FieldLabel>
              Nome da sua empresa <span className="text-rose-500">*</span>
            </FieldLabel>
            <Input
              placeholder="Ex: Loja da Maria"
              className="h-11 rounded-xl border-neutral-200"
              aria-invalid={!!errors.empresa}
              {...field}
            />
            <FieldError errors={[errors.empresa]} />
          </Field>
        )}
      />

      {/* Detalhes do projeto */}
      <Controller
        control={control}
        name="projeto"
        render={({ field }) => (
          <Field data-invalid={!!errors.projeto}>
            <FieldLabel>
              Compartilhe informações relevantes sobre o seu projeto{" "}
              <span className="text-rose-500">*</span>
            </FieldLabel>
            <Textarea
              rows={5}
              placeholder="Conte um pouco sobre seu negócio, objetivos e o que espera do projeto..."
              className="rounded-xl border-neutral-200 resize-none"
              aria-invalid={!!errors.projeto}
              {...field}
            />
            <FieldError errors={[errors.projeto]} />
          </Field>
        )}
      />

      {/* Contato preferido */}
      <Controller
        control={control}
        name="contato"
        render={({ field }) => (
          <Field data-invalid={!!errors.contato}>
            <FieldLabel>
              Como deseja manter o contato?{" "}
              <span className="text-rose-500">*</span>
            </FieldLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="h-12 rounded-xl border-neutral-200">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {CONTATOS.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError errors={[errors.contato]} />
          </Field>
        )}
      />

      {/* Dados pessoais */}
      <FieldSet>
        <FieldLegend variant="label" className="sr-only">
          Dados pessoais
        </FieldLegend>
        <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Controller
            control={control}
            name="nome"
            render={({ field }) => (
              <Field data-invalid={!!errors.nome}>
                <FieldLabel>
                  Nome <span className="text-rose-500">*</span>
                </FieldLabel>
                <Input
                  placeholder="Seu nome completo"
                  className="h-11 rounded-xl border-neutral-200"
                  aria-invalid={!!errors.nome}
                  {...field}
                />
                <FieldError errors={[errors.nome]} />
              </Field>
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Field data-invalid={!!errors.email}>
                <FieldLabel>
                  E-mail <span className="text-rose-500">*</span>
                </FieldLabel>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className="h-11 rounded-xl border-neutral-200"
                  aria-invalid={!!errors.email}
                  {...field}
                />
                <FieldError errors={[errors.email]} />
              </Field>
            )}
          />

          <Controller
            control={control}
            name="telefone"
            render={({ field }) => (
              <Field data-invalid={!!errors.telefone} className="sm:col-span-2">
                <FieldLabel>
                  Telefone / WhatsApp <span className="text-rose-500">*</span>
                </FieldLabel>
                <Input
                  type="tel"
                  placeholder="(31) 98765-4321"
                  className="h-11 rounded-xl border-neutral-200"
                  aria-invalid={!!errors.telefone}
                  {...field}
                />
                <FieldError errors={[errors.telefone]} />
              </Field>
            )}
          />
        </FieldGroup>
      </FieldSet>

      {/* LGPD */}
      <p className="text-xs text-neutral-400 leading-relaxed">
        Seus dados estão seguros. Ao enviar o formulário, você declara que
        está de acordo com a{" "}
        <a
          href="/politica-de-privacidade"
          className="underline underline-offset-2 hover:text-neutral-700 transition-colors"
        >
          Política de Privacidade
        </a>{" "}
        do Estúdio Adler.
      </p>

      {/* Erro geral */}
      {errors.root && (
        <p className="text-sm text-rose-500">{errors.root.message}</p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-none"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Spinner className="w-4 h-4" />
            Enviando...
          </span>
        ) : (
          "Enviar mensagem"
        )}
      </Button>
    </form>
  )
}