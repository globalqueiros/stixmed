import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { nome, email, mensagem, whatsapp, cpf, motivo } = await req.json();

    // Configuração do transporte do Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.EMAIL_USER, // Substituir pelo seu e-mail (use variáveis de ambiente)
        pass: process.env.EMAIL_PASS, // Substituir pela sua senha ou token de app
      },
    });

    // Configuração da mensagem
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Substituir pelo seu e-mail
      subject: `Nova mensagem de contato de ${nome}`,
      text: `
        Nome: ${nome}
        E-mail: ${email}
        WhatsApp: ${whatsapp}
        CPF: ${cpf}
        Motivo: ${motivo}
        Mensagem: ${mensagem}
      `,
    };

    // Envio do e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    return NextResponse.json({ success: false, error: "Erro ao enviar o e-mail" });
  }
}