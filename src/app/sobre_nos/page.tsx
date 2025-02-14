"use client";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart, faHeart, faStethoscope, faUser, faFilePdf, faUsers, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from 'react';
import CountUp from "react-countup";

interface CardProps {
    title: string;
    description: string;
    icone: ReactElement;
}
interface NumbData {
    title: string;
    number: string;
    icone: ReactElement;
}

const cardData: CardProps[] = [
    {
        title: "Propósito",
        description: "Proporcionar às pessoas um cuidado com a saúde de forma acessível, ágil, segura e simplificada, por meio de home care e telemedicina.",
        icone: <FontAwesomeIcon icon={faHandHoldingHeart} />,
    },
    {
        title: "Missão",
        description: "Ser um sistema de saúde humanizado, proporcionando facilidade e acessibilidade para que as pessoas possam cuidar da sua saúde em qualquer lugar do Brasil.",
        icone: <FontAwesomeIcon icon={faHeart} />,
    },
    {
        title: "Valor",
        description: "Comprometimento com a ética profissional, uma equipe médica altamente qualificada, transparência, acessibilidade e eficiência no atendimento.",
        icone: < FontAwesomeIcon icon={faStethoscope} />,
    },
    {
        title: "Visão",
        description: "Ser reconhecido como um serviço de excelência, proporcionando acesso facilitado à saúde de qualidade por meio de home care e telemedicina, com valores acessíveis.",
        icone: <FontAwesomeIcon icon={faUsersViewfinder} />,
    }
];

const numbData: NumbData[] = [
    {
        title: "Colaborador",
        number: "0",
        icone: <FontAwesomeIcon icon={faStethoscope} />,
    },
    {
        title: "Pacientes",
        number: "0",
        icone: <FontAwesomeIcon icon={faUsers} />,
    },
    {
        title: "Exames",
        number: "0",
        icone: <FontAwesomeIcon icon={faFilePdf} />,
    }
];

export default function SobreNos() {
    return (
        <>
            <section className="py-6 flex justify-center">
                <div className="container mx-auto flex flex-col gap-6 px-6 sm:px-8 lg:px-10 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex justify-center md:w-1/2">
                            <Image
                                src="/filho_andando_bike.webp"
                                width={1000}
                                height={1000}
                                className="rounded-full drop-shadow-md img-thumbnail shadow-lg w-56 h-56 md:w-72 md:h-72"
                                alt="Médico"
                            />
                        </div>
                        <div className="md:w-1/2 md:text-left xl:p-5 2xl:p-5">
                            <h2 className="font-bold text-2xl text-black pb-2">Sobre Nós</h2>
                            <p className="text-sm text-justify leading-relaxed max-w-6xl">
                                Fundada em 2024, a <strong>Stixmed</strong> é uma empresa inovadora no setor de saúde, comprometida em oferecer soluções acessíveis e eficientes. Com um atendimento humanizado e o uso de tecnologia avançada, proporcionamos segurança, agilidade e qualidade de vida aos nossos pacientes. Além disso, nosso Serviço de Orientação ao Paciente está sempre disponível para suporte personalizado, garantindo um atendimento diferenciado, transparente e confiável.
                            </p>
                            <p className="text-sm text-justify mt-2 leading-relaxed max-w-6xl">
                                Nosso compromisso com a inovação nos permite aprimorar a experiência na saúde brasileira, proporcionando um serviço seguro e acessível. Além disso, contamos com um Serviço de Orientação ao Paciente sempre disponível para suporte personalizado, garantindo um atendimento ágil, confiável e de alta qualidade.
                            </p>
                        </div>
                    </div>
                    <section className='bg-[url(/fundo_hospital.webp)] bg-cover bg-center bg-no-repeat relative py-4 rounded-xl'>
                        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                        <div className="relative z-10 text-white flex flex-col w-full max-w-7xl py-2 gap-y-5 m-auto">
                            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-semibold text-left ml-5 mb-3">Confira Nossos Números e Impacto</h2>
                            <div className="grid grid-cols-1 gap-7 px-4 pb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center">
                                {numbData.map((numb, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-start p-4 border-2 shadow-md rounded-lg justify-center items-center place-items-center"
                                    >
                                        <h3 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-bold w-full mb-2 text-center">
                                            <CountUp start={0} end={Number(numb.number)} duration={2.5} separator="," /> <span>{numb.title}</span>
                                        </h3>
                                        <div>
                                            <p className="text-[#25a096] text-3xl mb-2">{numb.icone}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                        <div className="flex justify-center md:w-1/2">
                            <Image
                                src="/correndo.webp"
                                width={1000}
                                height={1000}
                                className="rounded-full drop-shadow-md img-thumbnail shadow-lg w-56 h-56 md:w-72 md:h-72"
                                alt="Serviços"
                            />
                        </div>
                        <div className="md:w-1/2 text-end md:text-left">
                            <h2 className="font-bold text-2xl text-black pb-2">Inovações Tecnológicas</h2>
                            <p className="text-sm text-justify leading-relaxed max-w-6xl">
                                A tecnologia é a nossa aliada para transformar a experiência na área da saúde. Investimos continuamente em soluções inovadoras que garantem mais eficiência, acessibilidade e segurança para nossos pacientes. Buscamos sempre oferecer inovação de ponta aliada à acessibilidade, proporcionando um ambiente digital e presencial intuitivo. Dessa forma, nossos pacientes podem gerenciar seus dados, acessar faturas e realizar consultas online, obtendo informações de maneira prática e segura.
                            </p>
                            <p className="text-sm text-justify mt-2 leading-relaxed max-w-6xl">
                                Nossa equipe está disponível 24 horas por dia, 7 dias por semana, para esclarecer dúvidas e fornecer suporte personalizado, garantindo um atendimento de qualidade, ágil e confiável. Comprometida com a transparência, aprimoramos continuamente nossas soluções para oferecer mais segurança, qualidade e acessibilidade aos pacientes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-gray-200 py-4'>
                <div className="flex flex-col w-full max-w-7xl py-2 gap-y-5 m-auto">
                    <h2 className="text-3xl font-semibold text-left ml-5 mb-3">Nossos pilares</h2>
                    <div className="grid grid-cols-1 gap-7 px-4 pb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start p-4 shadow-md rounded-lg bg-white"
                            >
                                <div>
                                    <p className="text-[#25a096] text-3xl mb-2">{card.icone}</p>
                                </div>
                                <h3 className="text-lg font-bold text-black w-full mb-2">{card.title}</h3>
                                <p className="mt-0 text-sm text-justify text-black leading-6">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-6 flex justify-center">
                <div className="container mx-auto flex flex-col gap-6 px-6 sm:px-8 lg:px-10 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex justify-center md:w-1/2">
                            <Image
                                src="/medico_familia.webp"
                                width={1000}
                                height={1000}
                                className="rounded-full drop-shadow-md img-thumbnail shadow-lg w-56 h-56 md:w-72 md:h-72"
                                alt="Médico"
                            />
                        </div>
                        <div className="md:w-1/2 md:text-left xl:p-5 2xl:p-5">
                            <h2 className="font-bold text-2xl text-black pb-2">Cuidando do Seu Bem-Estar</h2>
                            <p className="text-sm text-justify mt-2 leading-relaxed max-w-6xl">
                                Colocamos o seu bem-estar em primeiro lugar. Nossa missão é proporcionar atendimento humanizado, acessível e eficiente, garantindo que cada paciente receba o suporte necessário com qualidade e segurança. Investimos em tecnologia e inovação para tornar sua experiência na área da saúde mais intuitiva e prática, permitindo o acesso fácil a serviços médicos e informações essenciais. Estamos comprometidos em oferecer um atendimento ágil e personalizado, assegurando que você tenha o cuidado que merece em todos os momentos.
                            </p>
                            <p className="text-sm text-justify mt-2 leading-relaxed max-w-6xl">
                                Cuidamos da sua saúde com inovação, segurança e um atendimento humanizado, garantindo qualidade e acessibilidade.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-6 rounded-lg shadow">
                        <div className="flex justify-center md:w-1/2">
                            <Image
                                src="/contratar.png"
                                width={300}
                                height={300}
                                className="rounded-full"
                                alt="Médico Contratar"
                            />
                        </div>
                        <div className="md:w-1/2 text-end md:text-left p-4">
                            <h2 className="font-bold text-2xl text-black pb-2">Por que a Stixmed?</h2>
                            <p className="text-sm text-justify mt-2 leading-relaxed">
                                Valorizamos a excelência em qualidade, segurança e acessibilidade na área da saúde.
                                Oferecemos um atendimento humanizado, suporte ininterrupto 24 horas por dia, 7 dias por semana,
                                e um ambiente digital intuitivo, proporcionando aos pacientes a facilidade de agendar consultas,
                                acessar informações e receber acompanhamento personalizado. Com transparência e inovação contínua,
                                garantimos um serviço ágil, confiável e comprometido com o bem-estar de cada paciente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}