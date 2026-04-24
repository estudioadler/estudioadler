import { NextResponse } from "next/server"
import { Resend } from "resend"
import {
  orcamentoSchema,
  SERVICOS,
  VERBAS,
  CONTATOS,
} from "@/lib/validations/orcamento"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validação com Zod
    const result = orcamentoSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: result.error.flatten() },
        { status: 400 }
      )
    }

    const data = result.data

    // Mapear IDs para labels
    const servicosLabels = data.servicos
      .map((id) => SERVICOS.find((s) => s.id === id)?.label || id)
      .join(", ")

    const verbaLabel =
      VERBAS.find((v) => v.value === data.verba)?.label || data.verba

    const contatoLabel =
      CONTATOS.find((c) => c.value === data.contato)?.label || data.contato

    // Enviar email via Resend
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #171717; color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; background: #fafafa; }
            .section { margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #e5e5e5; }
            .section:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
            .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #737373; margin-bottom: 4px; }
            .value { font-size: 16px; color: #171717; }
            .services { display: flex; flex-wrap: wrap; gap: 8px; }
            .service-tag { background: #171717; color: white; padding: 6px 12px; font-size: 13px; }
            .project-text { background: white; padding: 16px; border: 1px solid #e5e5e5; white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px; font-weight: 500;">Nova Solicitação de Orçamento</h1>
            </div>
            <div class="content">
              <div class="section">
                <div class="label">Empresa</div>
                <div class="value">${data.empresa}</div>
              </div>
              
              <div class="section">
                <div class="label">Contato</div>
                <div class="value"><strong>${data.nome}</strong></div>
                <div class="value">${data.email}</div>
                <div class="value">${data.telefone}</div>
                <div style="margin-top: 8px;">
                  <span style="background: #f5f5f5; padding: 4px 8px; font-size: 13px;">Prefere: ${contatoLabel}</span>
                </div>
              </div>
              
              <div class="section">
                <div class="label">Serviços Solicitados</div>
                <div class="services" style="margin-top: 8px;">
                  ${data.servicos
                    .map(
                      (id) =>
                        `<span class="service-tag">${SERVICOS.find((s) => s.id === id)?.label || id}</span>`
                    )
                    .join("")}
                </div>
              </div>
              
              <div class="section">
                <div class="label">Investimento Previsto</div>
                <div class="value">${verbaLabel}</div>
              </div>
              
              <div class="section">
                <div class="label">Detalhes do Projeto</div>
                <div class="project-text">${data.projeto}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    await resend.emails.send({
      from: "Estúdio Adler <contato@estudioadler.com.br>",
      to: process.env.NOTIFICATION_EMAIL || "contato@estudioadler.com.br",
      subject: `Nova solicitação de orçamento - ${data.empresa}`,
      html: emailHtml,
      replyTo: data.email,
    })

    // Gerar link do WhatsApp
    const whatsappPhone = process.env.WHATSAPP_PHONE_NUMBER || "5531982382666"
    const whatsappMessage = encodeURIComponent(`
Olá! Acabei de enviar um briefing pelo site do Estúdio Adler.

📌 Empresa: ${data.empresa}
👤 Nome: ${data.nome}
📞 Contato: ${data.telefone}
📧 Email: ${data.email}

💼 Serviços: ${servicosLabels}
💰 Investimento: ${verbaLabel}

📝 Projeto:
${data.projeto}

Preferência de contato: ${contatoLabel}
`)

    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`

    return NextResponse.json({
      success: true,
      message: "Orçamento enviado com sucesso",
      whatsappUrl,
    })
  } catch (error) {
    console.error("Erro ao processar orçamento:", error)
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    )
  }
}
