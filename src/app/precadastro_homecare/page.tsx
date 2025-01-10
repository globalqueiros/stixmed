'use client';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    data_nascimento: '',
    email: '',
    cpf: '',
    whatsapp: '',
    plano: '',
    endereco: '',
  });

  const [message, setMessage] = useState('');
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const isValidCPF = (cpf: string) => {
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += Number(cpf[i]) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== Number(cpf[9])) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += Number(cpf[i]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === Number(cpf[10]);
  };

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value.replace(/\D/g, '');
    if (input.length > 11) input = input.slice(0, 11);

    const formattedCpf = input
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setFormData({ ...formData, cpf: formattedCpf });
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 2) {
      value = `(${value}`;
    } else if (value.length <= 3) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length <= 8) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }
    setFormData({ ...formData, whatsapp: value });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (value: string | null) => {
    setIsRecaptchaVerified(!!value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRecaptchaVerified) {
      setMessage('Por favor, verifique o ReCAPTCHA.');
      return;
    }

    try {
      const response = await fetch('/api/homecare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setMessage(result.message);

      if (result.success) {
        setFormData({
          nome: '',
          data_nascimento: '',
          email: '',
          cpf: '',
          whatsapp: '',
          plano: '',
          endereco: '',
        });
      }
    } catch (error) {
      console.error(error);
      setMessage('Erro ao enviar o formulário.');
    }
  };

  return (
    <section className="py-4 max-w-6xl m-auto">
      <h2 className="text-xl font-bold text-left mb-1">Pré-Cadastro do Home Care</h2>
      <p className="text-sm text-black mb-2">
        Atenção! Formulário exclusivo para quem tem interesse no <strong>Home Care</strong>
      </p>
      <div className="mt-3">
        {message && (
          <div
            className={`alert text-sm p-3 ${message === 'Por favor, verifique o ReCAPTCHA.' ? 'alert-red' : 'alert-success'}`}
          >
            {message}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="mx-auto space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label>Nome *</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome completo..."
              className="w-full border rounded-2xl px-4 py-2 capitalize text-base"
              required
            />
          </div>
          <div>
            <label>Data de Nascimento *</label>
            <input
              type="date"
              name="data_nascimento"
              value={formData.data_nascimento}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-2 text-base"
              required
            />
          </div>
          <div>
            <label>CPF *</label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleCpfChange}
              required
              className="w-full border rounded-2xl px-4 py-2 text-base"
              placeholder="123.456.789-09"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label>WhatsApp *</label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleWhatsappChange}
              placeholder="(00) 00000-0000"
              className="w-full border rounded-2xl px-4 py-2 text-base"
              required
            />
          </div>
          <div>
            <label>E-mail *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-2 text-base"
              placeholder="seuemail@gmail.com"
              required
            />
          </div>
          <div>
            <label>Plano *</label>
            <select
              name="plano"
              value={formData.plano}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-2 cursor-pointer text-base"
              required
            >
              <option value="">Selecione</option>
              <option value="HOME BÁSICO">HOME BÁSICO (R$ 329,99)</option>
              <option value="HOME MASTER">HOME MASTER (R$ 578,99)</option>
              <option value="HOME PREMIUM">HOME PREMIUM (R$ 859,99)</option>
            </select>
          </div>
        </div>
        <div>
          <label>Endereço Atendimento *</label>
          <input
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 text-base"
            placeholder="Rua Cel Jose Eusebio, N° 95, CS 13, Higienópolis, São Paulo - SP"
            required
          />
        </div>
        <div className="mt-4">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            onChange={handleRecaptchaChange}
          />
        </div>
        <button type="submit" className="text-sm text-white font-semibold rounded-full px-5 py-2 bg-[#25a096]">
          Cadastrar
        </button>
      </form>
    </section>
  );
};

export default CadastroForm;