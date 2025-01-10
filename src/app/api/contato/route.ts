import nodemailer from 'nodemailer';

interface EmailData {
  nome: string;
  whatsapp: string;
  email: string;
  cpf: string;
  motivo: string;
  mensagem: string;
}

async function enviarEmail({ nome, whatsapp, cpf, motivo, mensagem, email }: EmailData) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const host = process.env.SMTP_HOST;

  if (!user || !pass || !host) {
    console.error('As variáveis de ambiente não estão configuradas corretamente.');
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: user, 
    to: email,
    subject: `Novo contato de ${nome}`,
    text: `
      Nome: ${nome}
      WhatsApp: ${whatsapp}
      CPF: ${cpf}
      Motivo: ${motivo}
      Mensagem: ${mensagem}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso:', info.messageId);
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
  }
}