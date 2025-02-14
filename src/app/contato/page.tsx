'use client';
import { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contato() {
    const [nome, setNome] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cpf, setCpf] = useState('');
    const [selectedOption, setSelectedOption] = useState('Informação');
    const [mensagem, setMensagem] = useState('');
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
    const [protocolo, setProtocolo] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const currentTime = Date.now();
        const protocoloData = localStorage.getItem('protocolo');
        const protocoloTimestamp = localStorage.getItem('protocoloTimestamp');

        if (protocoloData && protocoloTimestamp) {
            const elapsedTime = currentTime - parseInt(protocoloTimestamp);
            if (elapsedTime < 90 * 60 * 1000) {
                setProtocolo(protocoloData);
                setLoading(false);
                return;
            }
        }

        const newProtocolo = generateProtocolo();
        localStorage.setItem('protocolo', newProtocolo);
        localStorage.setItem('protocoloTimestamp', currentTime.toString());

        setProtocolo(newProtocolo);
        setLoading(false);

    }, []);

    const generateProtocolo = () => {
        const currentYear = new Date().getFullYear();
        return `${Date.now()} / ${currentYear}`;
    };

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!nome) {
            setMessage('Digite seu nome completo.');
            setMessageType('error');
            return;
        }

        if (!whatsapp || !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(whatsapp)) {
            setMessage('Digite um número de WhatsApp válido.');
            setMessageType('error');
            return;
        }

        if (!cpf || !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
            setMessage('Digite um CPF válido.');
            setMessageType('error');
            return;
        }

        if (!mensagem) {
            setMessage('Digite sua mensagem.');
            setMessageType('error');
            return;
        }

        if (!captchaValue) {
            setMessage('Por favor, complete o reCAPTCHA.');
            setMessageType('error');
            return;
        }

        try {
            const response = await fetch('/api/contato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, whatsapp, cpf, motivo: selectedOption, mensagem, protocolo }),
            });

            if (response.ok) {
                setMessage(`Email enviado com sucesso!`);
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

    const faqs = [
        {
            question: "Alteração de Dados Cadastrais",
            answer: `<p>Pacientes da Stixmed podem realizar a alteração ou atualização de seus dados cadastrais por meio das seguintes opções:</p>
            <h5 class="py-3"><strong>• Portal do Paciente</strong></h5>
            <p>O titular do plano ou responsável pelo pagamento deve acessar o site <u>paciente.stixmed.med.br</u> e efetuar o login utilizando seu e-mail e senha. Na aba "Meus Dados", será possível modificar apenas os campos disponibilizados para edição. Após selecionar a informação a ser atualizada, clique em "Alterar" para concluir o procedimento.</p>
            <h5 class="py-3"><strong>• Whatsapp</strong></h5>
            <p>Por meio do Serviço de Orientação ao Paciente, disponível via WhatsApp pelo número (11) 91107-5279, no horário comercial, de segunda a sexta-feira, das 8h às 18h. A alteração poderá ser realizada exclusivamente pelo titular do plano, mediante confirmação dos dados pessoais.</p>
            `
        },
        {
            question: "2ª Via de Boleto Bancário",
            answer: `<p>As faturas são disponibilizadas e enviadas automaticamente por e-mail. Para garantir o recebimento, mantenha seu endereço de e-mail sempre atualizado.</p>
            <p>O boleto Stixmed possui validade de 90 dias e pode ser pago em qualquer instituição bancária ou via internet banking, sem a necessidade de atualização da data de vencimento.</p>
            <p>Caso não tenha o boleto, a segunda via poderá ser solicitada pelo titular do plano ou pelo responsável pela cobrança por meio de uma das opções abaixo:</p>
            <h5 class="py-3"><strong>• Portal do Paciente</strong></h5>
            <p>Acesse o site <u>paciente.stixmed.med.br</u>, faça login utilizando seu e-mail e senha. Em seguida, na aba “Faturas”, selecione as informações que deseja consultar.</p>`
        },
        {
            question: "Aplicativo Stixmed",
            answer: `Nosso aplicativo está em desenvolvimento e, em breve, estará disponível nas lojas de aplicativos.`
        },
        {
            question: "Cancelamento do Plano Stixmed",
            answer: `<p>Para solicitar o cancelamento do plano, o titular deve respeitar o período de carência estabelecido. O pedido pode ser feito por meio do Serviço de Orientação ao Paciente, entrando em contato via WhatsApp pelo número (11) 91107-5279 ou pelo e-mail atendimento@stixmed.med.br.</p>`
        },
        {
            question: "Portal do Paciente Stixmed",
            answer: `<p>Com o Portal do Paciente, você tem acesso a diversos serviços e recursos, garantindo mais praticidade no cuidado com sua saúde.</p>
            <ul class='pl-3 pt-2' style='list-style:disc'>    
                <li>Telemedicina</li>
                <li>Histórico de Atendimento</li>
                <li>Receitas</li>
                <li>Faturas</li>
                <li>Fale Conosco</li>
            </ul>
            <p class="my-2">Caso tenha esquecido sua senha de acesso, selecione a opção "Esqueci a Senha", localizada abaixo do campo de senha. Em seguida, informe seu e-mail cadastrado e escolha a opção de segurança. Um link para redefinição de senha será enviado para o seu e-mail de cadastro.</p>
            <p>Caso esteja acessando pela primeira vez, clique em "Cadastrar-se Agora!" e preencha todos os campos obrigatórios. Para concluir o cadastro, informe um endereço de e-mail válido que não esteja vinculado a outro usuário maior de 18 anos. A senha criada deve conter, no mínimo, 8 caracteres, seguindo os critérios estabelecidos no portal.</p>
            `
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
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
                    <h3 className="text-xl md:text-xl font-semibold text-center">Entre em contato com a gente!</h3>
                    <p className="text-sm md:text-sm text-justify mb-4 mt-2 leading-6 lg:leading-5 xl:leading-6 2xl:leading-6">
                        A Stixmed oferece canais de atendimento para proporcionar suporte, esclarecendo dúvidas, solicitações de informações, envios de sugestões e registros de reclamações ou elogios. <strong>Preencha o formulário.</strong>
                    </p>
                    <Image
                        src="/mulheratendimento.avif"
                        width={500}
                        height={500}
                        alt="Mulher de Call Center"
                        className="rounded-2xl img-thumbnail m-auto"
                    />
                    <div className="py-3 space-y-2">
                        <h3 className='text-base font-semibold'>Telefones de Urgência e Emergência</h3>
                        <Link href="tel:+08000000000" className="flex items-center text-black gap-2">
                            <FontAwesomeIcon icon={faPhone} className="text-lg" />
                            <h5 className="text-sm">0800 000 0000</h5>
                        </Link>
                        <Link href="https://wa.me/5511911075279" target="_blank" className="flex items-center text-black gap-2">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-green-500" />
                            <h5 className="text-sm">(11) 91107-5279</h5>
                        </Link>
                    </div>
                </div>
                <div>
                    {message && (
                        <div
                            className={`alert rounded-full text-sm ${messageType === 'success' ? 'alert-success' : 'alert-danger'
                                }`}
                            role="alert"
                        >
                            {message}
                        </div>
                    )}
                    <form className="space-y-3" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-1">
                            <div>
                                <label htmlFor="protocolo">Protocolo *</label>
                                <input
                                    type="text"
                                    id="nome"
                                    value={loading ? "Carregando..." : protocolo || ""}
                                    onChange={handleNomeChange}
                                    placeholder="00000000 / 0000"
                                    className="text-sm w-full border rounded-xl p-2"
                                    readOnly
                                />
                                <small className='text-danger'>Anote o número do protocolo.</small>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            <p className='text-xs text-justify mt-1 leading-5'>
                                A <strong>Stixmed</strong> assegura a privacidade e segurança de seus dados. Consulte nossa{' '}
                                <a href='/politica_privacidade' className='text-black text-xs font-semibold'>Política de Privacidade</a> e <a href='/politica_privacidade' className='text-black text-xs font-semibold'>Termo de Uso</a> com o envio de comunicações.
                            </p>
                        </div>
                        <div className="my-4">
                            <ReCAPTCHA
                                sitekey='6LeOxZwqAAAAABqDVmyHKfo-uaIeQY1YGntVRbCb'
                                onChange={handleRecaptchaChange}
                            />
                        </div>
                        <div className="flex space-x-4">
                            <input
                                type="submit"
                                value="Enviar"
                                className="bg-[#10c4b5] text-white font-semibold rounded-full px-5 py-1.5 text-sm"
                            />
                            <input
                                type="reset"
                                value="Limpar"
                                className="bg-red-500 text-white font-semibold rounded-full px-5 py-1.5 text-sm"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <section className="py-3 max-w-7xl m-auto flex flex-col border-t-2 max-w-7xl m-auto pt-3 pb-3 px-4">
                <h2 className="text-xl font-semibold mb-1">Ouvidoria</h2>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <p className="text-justify text-sm leading-6">
                        Já entrou em contato conosco e não obteve a solução desejada? Nossa Ouvidoria está disponível para avaliar o seu caso.
                    </p>
                    <a
                        href="https://groupqueiros.com/brazil/contato"
                        target="_blank"
                        className="bg-[#10c4b5] text-white px-5 py-2 rounded-2xl text-sm text-center w-full sm:w-auto relative lg:top-[-19px] lg:text-sm xl:text-sm 2xl:text-sm"
                    >
                        Abrir Reclamação
                    </a>
                </div>
            </section>
            <section className='py-3 max-w-7xl m-auto flex flex-col border-t-2 max-w-7xl m-auto pt-3 pb-3 px-4'>
                <h2 className='text-xl font-semibold mb-1'>Responsáveis Técnicos:</h2>
                <div className='flex flex-col mb-2'>
                    <p className='text-justify text-sm py-2'>
                        Médico(a) Geral: <strong>Humberto</strong>
                    </p>
                    <p className='text-justify text-sm'>
                        Enfermeiro(a): <strong>André</strong>
                    </p>
                </div>
            </section>
            <section className='py-3 max-w-7xl m-auto flex flex-col border-t-2 max-w-7xl m-auto pt-3 pb-3 px-4'>
                <div className="w-full pl-5 flex flex-col mx-auto my-3 mt-0 p-0">
                    <h2 className="text-xl text-center font-semibold mb-3">Perguntas Frequentes (FAQ)</h2>
                    <div className="space-y-4 w-full">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-300 w-full rounded-lg p-3">
                                <button
                                    className="flex justify-between items-center w-full text-left font-semibold text-black"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h4 className='text-base border-none text-base'>{faq.question}</h4>
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        className={`transition-transform duration-300 ${openIndex === index ? "rotate-90" : "rotate-0"
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div
                                        className="mt-3 text-sm text-black text-justify leading-7 border-t-2 pt-2"
                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}