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
    indicacao: '',
    endereco: '',
  });

  const [isNoIndicacao, setIsNoIndicacao] = useState(false);
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'danger' | ''>('');
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [aceitouPolitica, setAceitouPolitica] = useState(false);

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

  const isValidWhatsApp = (whatsapp: string) => {
    const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return regex.test(whatsapp);
  };

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleIndicacaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNoIndicacao(e.target.checked);
    if (e.target.checked) {
      setFormData({ ...formData, indicacao: 'Sem indicação' });
    } else {
      setFormData({ ...formData, indicacao: '' });
    }
  };

  const handlePoliticaChange = () => {
    setAceitouPolitica((prev) => !prev);
  };

  const handleRecaptchaChange = (value: string | null) => {
    setIsRecaptchaVerified(!!value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isRecaptchaVerified) {
      setMessage('Por favor, verifique o ReCAPTCHA.');
      setAlertType('danger');
      return;
    }

    if (!aceitouPolitica) {
      setMessage('Você deve aceitar os termos de uso e a política de privacidade.');
      return;
    }

    if (!isValidCPF(formData.cpf)) {
      setMessage('CPF inválido. Verifique e tente novamente.');
      setAlertType('danger');
      return;
    }

    if (!isValidWhatsApp(formData.whatsapp)) {
      setMessage('Número de WhatsApp inválido. Use o formato (00) 00000-0000.');
      setAlertType('danger');
      return;
    }

    try {
      const response = await fetch('/api/cartao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setMessage(result.message);
      setAlertType(result.success ? 'success' : 'danger');

      if (result.success) {
        setFormData({
          nome: '',
          data_nascimento: '',
          email: '',
          cpf: '',
          whatsapp: '',
          plano: '',
          indicacao: '',
          endereco: '',
        });
        setIsNoIndicacao(false);
      }
    } catch (error) {
      console.error(error);
      setMessage('Erro ao enviar o formulário.');
      setAlertType('danger');
    }
  };

  return (
    <section className="py-4 p-2 max-w-6xl m-auto">
      <h2 className="text-xl font-bold text-left mb-1">Pré-Cadastro do Cartão Stixmed</h2>
      <p className="text-sm text-black mb-2">
        Atenção! Formulário exclusivo para quem tem interesse no <strong>Cartão Stixmed</strong>
      </p>
      <div className="mt-3">
        {message && (
          <div className={`alert rounder-full alert-${alertType}`} role="alert">
            {message}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="mx-auto space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div>
            <label>Nome *</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome completo..."
              className="w-full border rounded-2xl px-4 py-2 capitalize text-sm"
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
              className="w-full border rounded-2xl px-4 py-2 text-sm"
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
              className="w-full border rounded-2xl px-4 py-2 text-sm"
              placeholder="123.456.789-09"
            />
          </div>
          <div>
            <label>WhatsApp *</label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleWhatsappChange}
              placeholder="(00) 00000-0000"
              className="w-full border rounded-2xl px-4 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-2 text-sm"
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
              className="w-full border rounded-2xl px-4 py-2 cursor-pointer text-sm"
              required
            >
              <option value="">Selecione</option>
              <option value="PS DIGITAL">PS DIGITAL (R$ 58,99)</option>
              <option value="PS DIGITAL MASTER">PS DIGITAL MASTER (R$ 86,99)</option>
              <option value="PS PREMIUM">PS PREMIUM (R$ 105,99)</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div>
            <label>Indicação *</label>
            <input
              type="text"
              name="indicacao"
              value={isNoIndicacao ? '' : formData.indicacao}
              onChange={handleChange}
              placeholder="Indicado por..."
              className="w-full border rounded-2xl px-4 py-2 capitalize text-sm"
              disabled={isNoIndicacao}
              required={!isNoIndicacao}
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="indicacao"
                checked={isNoIndicacao}
                onChange={handleIndicacaoChange}
                className="mr-2 cursor-pointer"
              />
              <label htmlFor="indicacao" className="text-sm cursor-pointer mt-2">
                Não tem indicação
              </label>
            </div>
          </div>
          <div>
            <label>Endereço Atendimento *</label>
            <input
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-2 text-sm"
              placeholder="Rua Cel Jose Eusebio, N° 95, CS 13, Higienópolis, São Paulo - SP"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <ReCAPTCHA
            sitekey='6LeOxZwqAAAAABqDVmyHKfo-uaIeQY1YGntVRbCb'
            onChange={handleRecaptchaChange}
          />
        </div>
        <div className="flex items-center mt-3 space-x-2">
          <input
            type="checkbox"
            id="politicatermo"
            checked={aceitouPolitica}
            onChange={handlePoliticaChange}
            className="cursor-pointer"
            aria-labelledby="politicatermo-label"
          />
          <label htmlFor="politicatermo" id="politicatermo-label" className="text-sm cursor-pointer flex items-center font-normal mt-2">
            Concordo com os <strong className="ml-1 mr-1">termos de uso</strong> e <strong className="ml-1 mr-1">política de privacidade</strong>.
          </label>
        </div>
        <button type="submit" className="text-sm text-white font-semibold rounded-full px-5 py-2 bg-[#25a096]">
          Cadastrar
        </button>
      </form>
    </section>
  );
};

export default CadastroForm;