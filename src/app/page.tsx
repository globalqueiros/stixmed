"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <section className="py-3">
        <div className="flex md:flex-row flex-col justify-around items-center max-w-7xl m-auto">
          <div className="flex flex-col items-start justify-start md:ml-20 mx-10 mt-10 md:mt-0">
            <p className="text-black font-semibold pb-2">Clinica Online e Home Care</p>
            <h3 className="font-bold md:text-3xl text-3xl text-black">
              Cuide da sua saúde com consultas ilimitadas e acessíveis para você e sua família.
            </h3>
            <p className="md:text-sm text-sm font-normal text-back mt-3 text-justify">
              Telemedicina 24 horas: consultas ilimitadas com os melhores médicos, sempre prontos para atender você, direto na palma da sua mão!
            </p>
            <div className="pt-3 space-y-1">
              <h3 className="text-lg">
                <strong>Telefones de Urgência e Emergência</strong> 
                <Link className="ml-3 text-black text-base" href="tel:+08000000000">
                  <FontAwesomeIcon icon={faPhone} /> 0800 000 0000
                </Link>
              </h3>
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
          <h4 className="pb-1 leading-7">
            Garanta seu Cartão Stixmed com planos a partir de <strong style={{ color: 'white' }}>R$ 58,99/mês</strong>.
            <br /> Cuide da sua saúde com qualidade e economia!
          </h4>
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
            <p className="md:text-sm text-base font-normal text-back mt-3 text-justify leading-6">
              A Stixmed é uma clínica online que une praticidade e qualidade em cuidados com a saúde. 
              Oferecemos consultas rápidas e acessíveis, além de um serviço especializado de home care, 
              levando atendimento diretamente à sua casa. Com uma equipe multidisciplinar altamente 
              capacitada, priorizamos um cuidado ágil, eficiente e humanizado, garantindo o bem-estar 
              e a tranquilidade de nossos pacientes em todas as etapas do atendimento.
            </p>
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
          </div>
        </div>
      </section>
    </>
  );
}