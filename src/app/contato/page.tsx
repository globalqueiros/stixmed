'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Script from 'next/script';
import React from 'react';

export default function Contato() {
    const [nome, setNome] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cpf, setCpf] = useState('');
    const [selectedOption, setSelectedOption] = useState('Informação');
    const [mensagem, setMensagem] = useState('');
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

    const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const capitalizedValue = value.replace(/\b\w/g, (char) => char.toUpperCase());
        setNome(capitalizedValue);
    };

    const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 2) value = `(${value}`;
        else if (value.length <= 7) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        else value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
        setWhatsapp(value);
    };

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 3) value = value;
        else if (value.length <= 6) value = `${value.slice(0, 3)}.${value.slice(3)}`;
        else if (value.length <= 9) value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
        else value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9, 11)}`;
        setCpf(value);
    };

    const handleMotivoChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedOption(e.target.value);

    const handleMensagemChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMensagem(e.target.value);

    const handleRecaptchaChange = (value: string | null) => setCaptchaValue(value);

    const [message, setMessage] = React.useState('');
    const [messageType, setMessageType] = React.useState<'success' | 'error' | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!captchaValue) {
            setMessage('Por favor, complete o reCAPTCHA.');
            setMessageType('error');
            return;
        }
        try {
            const response = await fetch('/api/contato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, whatsapp, cpf, motivo: selectedOption, mensagem }),
            });

            if (response.ok) {
                setMessage('Email enviado com sucesso!');
                setMessageType('success');
            } else {
                setMessage('Erro ao enviar o email. Tente novamente.');
                setMessageType('error');
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            setMessage('Erro ao enviar o formulário. Verifique sua conexão e tente novamente.');
            setMessageType('error');
        }
    };

    return (
        <>
            <Script id="huggy-widget">
                {`var $_Huggy = { defaultCountry: '+55', uuid: '797a4ed5-1e52-4b01-9443-0608498b15fa', company: '358300' };
                (function(i,s,o,g,r,a,m){ 
                    i[r]={context:{id:'ccc628a02aacf49a508e28a63e2c191d'}};a=o;o=s.createElement(o); 
                    o.async=1;o.src=g;m=s.getElementsByTagName(a)[0];m.parentNode.insertBefore(o,m); 
                })(window,document,'script','https://js.huggy.chat/widget.min.js','pwz');`}
            </Script>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl m-auto pt-4 pb-4 px-4">
                <div>
                    <h3 className="text-xl font-semibold text-center">Entre em contato com a gente!</h3>
                    <p className="text-sm text-justify mb-4 mt-2">
                        Preencha o formulário abaixo e envie sua mensagem para nossa equipe. Entraremos em contato com você o mais breve possível!
                    </p>
                    <Image
                        src="/mulheratendimento.avif"
                        width={500}
                        height={500}
                        alt="Mulher de Call Center"
                        className="rounded-2xl"
                    />
                    <div className="py-3 space-y-3">
                        <h3 className='text-lg font-semibold'>Telefones de Urgência e Emergência</h3>
                        <h5 className='text-base'>
                            <Link href="tel:+08000000000" className='text-black text-base'>
                                <FontAwesomeIcon icon={faPhone} /> 0800 000 0000
                            </Link>
                        </h5>
                        <h5 className='text-base'>
                            <Link href="https://wa.me/5511000000000" target='_blank' className='text-black text-base'>
                                <FontAwesomeIcon icon={faWhatsapp} /> (11) 00000-0000
                            </Link>
                        </h5>
                    </div>
                </div>
                <div>
                    {message && (
                        <div
                            className={`alert text-sm ${messageType === 'success' ? 'alert-success' : 'alert-danger'
                                }`}
                            role="alert"
                        >
                            {message}
                        </div>
                    )}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="nome">Nome Completo *</label>
                                <input
                                    type="text"
                                    id="nome"
                                    value={nome}
                                    onChange={handleNomeChange}
                                    placeholder="Digite seu nome..."
                                    className="text-sm w-full border rounded-xl p-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="whatsapp">Whatsapp *</label>
                                <input
                                    type="text"
                                    id="whatsapp"
                                    value={whatsapp}
                                    onChange={handleWhatsappChange}
                                    placeholder="(00) 00000-0000"
                                    className="text-sm w-full border rounded-xl p-2"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Digite seu email"
                                    className="text-sm w-full border rounded-xl p-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="cpf">CPF *</label>
                                <input
                                    type="text"
                                    id="cpf"
                                    value={cpf}
                                    onChange={handleCpfChange}
                                    placeholder="000.000.000-00"
                                    className="text-sm w-full border rounded-xl p-2"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="motivo">Qual é o motivo do contato? *</label>
                            <select
                                id="motivo"
                                value={selectedOption}
                                onChange={handleMotivoChange}
                                className="text-sm w-full border rounded-xl p-2 cursor-pointer"
                            >
                                <option value="Informação">Informação</option>
                                <option value="Adesão">Adesão</option>
                                <option value="Elogios">Elogios</option>
                                <option value="Reclamação">Reclamação</option>
                                <option value="Sugestão">Sugestão</option>
                                <option value="Atualizar Dados Cadastrais">Atualizar Dados Cadastrais</option>
                                <option value="Cancelamento">Cancelamento</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="mensagem">Mensagem *</label>
                            <textarea
                                id="mensagem"
                                value={mensagem}
                                onChange={handleMensagemChange}
                                placeholder="Digite sua mensagem..."
                                rows={5}
                                className="text-sm w-full border rounded-xl p-2 resize-none"
                            ></textarea>
                            <p className='text-xs mt-1'>
                                A <strong>Stixmed</strong> assegura a privacidade e segurança de seus dados. Consulte nossa{' '}
                                <a href='/politica_privacidade' className='text-black text-xs font-semibold'>Política de Privacidade</a> e com o envio de comunicações.
                            </p>
                        </div>
                        <div className="mb-4">
                            <ReCAPTCHA
                                sitekey='6LeOxZwqAAAAABqDVmyHKfo-uaIeQY1YGntVRbCb'
                                onChange={handleRecaptchaChange}
                            />
                        </div>
                        <div className="flex space-x-4">
                            <input
                                type="submit"
                                value="Enviar"
                                className="bg-[#10c4b5] text-white font-semibold rounded-full px-5 py-2"
                            />
                            <input
                                type="reset"
                                value="Limpar"
                                className="bg-red-500 text-white font-semibold rounded-full px-5 py-2"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <section className='py-3 max-w-7xl m-auto flex flex-col border-t-2'>
                <h2 className='text-xl font-semibold mb-1'>Ouvidoria</h2>
                <div className='flex justify-between items-center mb-2'>
                    <p className='text-justify text-sm'>
                        Já entrou em contato conosco e não obteve a solução desejada? Nossa Ouvidoria está disponível para avaliar o seu caso.
                    </p>
                    <a href='https://groupqueiros.com/brazil/contato' target='_blank' className='bg-[#10c4b5] text-white px-5 py-2 rounded-2xl text-sm'>
                        Abrir Reclamação
                    </a>
                </div>
            </section>
            <section className='py-3 max-w-7xl m-auto flex flex-col border-t-2'>
                <h2 className='text-xl font-semibold mb-1'>Responsáveis Técnicos:</h2>
                <div className='flex flex-col mb-2'>
                    <p className='text-justify text-sm py-2'>
                        Médico Geral: <strong>Humberto</strong>
                    </p>
                    <p className='text-justify text-sm'>
                        Enfermeiro: <strong>André</strong>
                    </p>
                </div>
            </section>
        </>
    );
}