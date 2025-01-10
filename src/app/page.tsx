"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const plans = [
    {
      title: "Ps Digital",
      price: 35,
      features: [
        "Vídeo consulta com clínico geral 24hrs por dia",
        "Sem limite de uso e sem carência",
        "Atendimento em todo território Nascional",
      ],
      unavailableFeatures: [
      ],
    },
    {
      title: "Ps Digital Master",
      price: 75,
      features: [
        "Cartão Stixmed",
        "Vídeo consulta com clínico geral 24hrs por dia",
        "Sem limite de uso e sem carência",
        "Atendimento em todo território Nascional",
        "Atendimento com ambulância em caso de emergência e urgência"
      ],
      unavailableFeatures: [
      ],
    },
    {
      title: "PS Premium",
      price: 95,
      features: [
        "Cartão Stixmed",
        "Vídeo consulta com clínico geral 24hrs por dia",
        "Sem limite de uso e sem carência",
        "Atendimento em todo território Nascional",
        "Atendimento com ambulância em caso de emergência e urgência",
        "Remoção em caso de home care"
      ],
      unavailableFeatures: [
      ],
    },
  ];
  return (
    <>
      <section className="py-3">
        <div className="flex md:flex-row flex-col justify-around items-center max-w-7xl m-auto">
          <div className="flex flex-col items-start justify-start md:ml-20 mx-10 mt-10 md:mt-0">
            <p className="text-black font-semibold pb-2">Clinica Online e Home Care</p>
            <h3 className="font-bold md:text-3xl text-3xl text-black">Cuide da sua saúde com consultas ilimitadas e acessíveis para você e sua família.</h3>
            <p className="md:text-sm teat-sm font-normal text-back mt-3 text-justify">Telemedicina 24 horas: consultas ilimitadas com os melhores médicos, sempre prontos para atender você, direto na palma da sua mão!</p>
            <div className="pt-3 space-y-1">
              <h3 className='text-lg'><strong>Telefones de Urgência e Emergência</strong> <Link className='ml-3 text-black text-base' href="tel:+08000000000"><FontAwesomeIcon icon={faPhone} /> 0800 000 0000</Link></h3>
            </div>
          </div>
          <div className="mr-20 md:block hidden">
            <Image
              src="/medicos.png"
              width={600}
              height={600}
              objectFit="cover"
              style={{ borderRadius: '100%' }}
              alt="Médicos"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#10c4b5]">
        <div className="flex justify-center items-center flex-col py-4 text-center font-bold lg:text-8xl text-6xl space-y-1 text-white">
          <h4 className="pb-1 leading-7">Garanta seu Cartão Stixmed com planos a partir de <strong style={{ color: 'white' }}>R$ 58,99/mês</strong>.<br></br> Cuide da sua saúde com qualidade e economia!</h4>
        </div>
      </section>
      <section className="py-4">
        <div className="flex md:flex-row flex-col justify-around items-center max-w-6xl m-auto">
          <div className="mr-20 md:block hidden">
            <Image
              src="/medicosobre.avif"
              width={2000}
              height={2000}
              objectFit="cover"
              className="rounded-2xl img-thumbnail"
              alt="Médico"
            />
          </div>
          <div className="flex flex-col items-start justify-start md:ml-10 mx-10 mt-10 md:mt-0">
            <h3 className="font-bold md:text-3xl text-3xl text-black">Sobre Nós</h3>
            <p className="md:text-sm teat-base font-normal text-back mt-3 text-justify leading-6">A Stixmed é uma clínica online que une praticidade e qualidade em cuidados com a saúde. Oferecemos consultas rápidas e acessíveis, além de um serviço especializado de home care, levando atendimento diretamente à sua casa. Com uma equipe multidisciplinar altamente capacitada, priorizamos um cuidado ágil, eficiente e humanizado, garantindo o bem-estar e a tranquilidade de nossos pacientes em todas as etapas do atendimento.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#10c4b5] text-white py-0 m-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-6">
            <h2 className="text-base text-white-300 mb-2">Home Care</h2>
            <h1 className="text-2xl md:text-2xl font-bold text-justify leading-tight mb-6">
              Nossa equipe multidisciplinar está pronta para atender você com cuidado e excelência no conforto da sua casa.
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 my-2">
                <div className="bg-[#06786f] text-[#fff] p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24">
                    <path fill="#fff" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Equipe Multidisciplinar</h3>
                  <p className="text-sm text-blue-100 mt-1">
                    Equipe preparada para atender qualquer necessidade com eficiência.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 my-2">
                <div className="bg-[#06786f] text-[#fff] p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                    <path fill="#ffffff" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4l87 0c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31l104.5 0c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240l-132 0c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9L16 240c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9l0-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1l0 5.8c0 16.9-2.8 33.5-8.3 49.1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Planos do Home Care</h3>
                  <p className="text-sm text-blue-100 mt-1">
                    Oferecemos planos exclusivos para serviços de home care.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#06786f] text-[#fff] p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                    <path fill="#ffffff" d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Atendimento 24/7</h3>
                  <p className="text-sm text-blue-100 mt-1">
                    Nossa equipe médicos está disponíveis 24 horas por dia em todos os dias da semana.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#06786f] text-[#fff] p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24">
                    <path fill="#ffffff" d="M0 96l576 0c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm0 32L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-288L0 128zM64 405.3c0-29.5 23.9-53.3 53.3-53.3l117.3 0c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7L74.7 416c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">100% Seguro</h3>
                  <p className="text-sm text-blue-100 mt-1">
                    Informações criptografadas, totalmente em conformidade com a LGPD.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <Link
                href='/home_care'
                className="m-auto text-sm text-white font-semibold rounded-full px-5 py-2.5 bg-[#06786f]"
              >
                Veja os Planos
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 px-6 mt-10 md:mt-0">
            <Image
              src="/homecare.webp"
              alt="Doutora online"
              className="rounded-2xl img-thumbnail shadow-lg"
              width={1500}
              height={1500}
            />
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="flex md:flex-row flex-col justify-around items-center max-w-6xl m-auto">
          <div className="flex flex-col items-start justify-start md:ml-10 mx-10 mt-10 md:mt-0">
            <h3 className="font-bold md:text-3xl text-3xl text-black">Cartão Stixmed</h3>
            <p className="md:text-sm teat-sm font-normal text-back mt-3 text-justify leading-7">O cartão Stixmed oferece consultas 24 horas, com um custo mais acessível do que os planos convencionais. Além disso, você tem acesso à telemedicina ilimitada, garantindo praticidade e cuidado sempre que precisar. Pensado para atender a você e sua família, nosso plano proporciona um atendimento contínuo e de qualidade, sem a necessidade de sair de casa.</p>
            <div className="mt-4 flex justify-center">
              <Link
                href='/precadastro_cartaostixmed'
                className="m-auto text-sm text-white font-semibold rounded-full px-5 py-2.5 bg-[#10c4b5]"
              >
                Contrate Agora
              </Link>
            </div>
          </div>
          <div className="mr-20 md:block hidden">
            <Image
              src="/card.png"
              width={1500}
              height={1500}
              objectFit="cover"
              className="rounded-2xl"
              alt="Médico"
            />
          </div>
        </div>
      </section>
    </>
  );
}
