import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { protocolo, nome, email, mensagem, whatsapp, cpf, motivo } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: 'corporationpagamentos@gmail.com',
        pass: 'ukiarxcpmtszlqwd',
      }
    });

    const mailOptions = {
      from: `"${nome}" <${email}>`,
      to: 'corporationpagamentos@gmail.com',
      subject: `Formulario enviado pelo "${nome}"`,
      text: `
        <p>Número do Protocolo: <strong>${protocolo}</strong></p>
        <h4>Detalhes Pessoais:</h4>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>CPF:</strong> ${cpf}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <br>
        <p>Motivo: <strong>${motivo}</strong></p>
        <br>
        <p>Mensagem: <strong>${mensagem}</strong></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    return NextResponse.json({ success: false, error: "Erro ao enviar o email" });
  }
}
