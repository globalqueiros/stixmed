import nodemailer from 'nodemailer';

interface EmailData {
  nome: string;
  whatsapp: string;
  email: string;
  cpf: string;
  motivo: string;
  mensagem: string;
}

export async function enviarEmail({ nome, whatsapp, cpf, motivo, mensagem, email }: EmailData) {
  const user = 'contato@stixmed.med.br';
  const pass = 'xl6H@uO6vubb';
  const host = 'sg2plzcpnl503747.prod.sin2.secureserver.net';

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