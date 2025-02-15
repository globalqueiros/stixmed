"use client";
import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faLock, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

export default function Home() {
  interface homeData {
    title: string;
    description: string;
    icon: ReactElement;
  }

  const homeData: homeData[] = [
    {
      title: "Equipe Multidisciplinar",
      description: "Equipe preparada para atender qualquer necessidade com eficiência.",
      icon: <FontAwesomeIcon icon={faUsers} />,
    },
    {
      title: "Planos do Home Care",
      description: "Oferecemos planos exclusivos para serviços de home care.",
      icon: <FontAwesomeIcon icon={faUsers} />,
    },
    {
      title: "Atendimento 24/7",
      description: "Nossa equipe médica está disponível 24 horas por dia, todos os dias da semana.",
      icon: <FontAwesomeIcon icon={faHeadset} />,
    },
    {
      title: "100% Seguro",
      description: "Seus dados são protegidos com criptografia avançada, garantindo total conformidade com a LGPD.",
      icon: <FontAwesomeIcon icon={faLock} />,
    }
  ];

  return (
    <>
      <section className="py-3 sm:mt-3 md:mt-3">
        <div className="flex md:flex-row flex-col justify-around items-center max-w-7xl m-auto">
          <div className="flex flex-col items-start justify-start md:ml-20 mx-10 sm:mt-10 md:mt-0">
            <p className="text-black font-semibold pb-2 mt-2">Clinica Online e Home Care</p>
            <motion.h3
              className="font-bold text-xl sm:text-3xl md:text-3xl text-3xl text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              Cuide da sua saúde com consultas ilimitadas e acessíveis para você e sua família.
            </motion.h3>
            <p className="text-sm sm:text-sm md:text-sm text-sm font-normal text-back my-2 text-justify">
              Atendimento ilimitado de telemedicina e home care com uma equipe médica altamente qualificada, oferecendo assistência especializada a qualquer momento, de forma prática e acessível.
            </p>
            <motion.h3
              className="font-bold md:text-3xl text-3xl text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="pt-2 space-y-1">
                <h3 className="leading-6 text-base sm:text-base md:text-sm font-semibold">Telefones de Urgência e Emergência
                  <Link className="ml-3 text-black text-base md:text-base" href="tel:+08000000000">
                    <FontAwesomeIcon icon={faPhone} /> 0800 000 0000
                  </Link>
                </h3>
              </div>
            </motion.h3>
          </div>
          <div className="mr-20 lg:block hidden">
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
      <section className="bg-[#10c4b5] xl:mt-3">
        <div className="flex justify-center items-center flex-col py-3 text-center font-bold lg:text-8xl text-6xl space-y-1 text-white">
          <h4 className="text-sm sm:text-sm md:text-xl pb-1 leading-6">Garanta seu Cartão Stixmed com planos a partir de <strong className="text-white">R$ 58,99/mês</strong>. Cuide da sua saúde com qualidade e economia!
          </h4>
        </div>
      </section>
      <section className="py-6 flex justify-center">
        <div className="container mx-auto flex flex-col gap-6 px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="mr-20 hidden md:hidden lg:block">
              <Image
                src="/evolucao.png"
                width={1800}
                height={1800}
                className="rounded-2xl w-full h-auto img-thumbnail"
                alt="Médico"
              />
            </div>
            <div className="xl:p-5 2xl:p-5">
              <h2 className="font-bold text-2xl sm:text-2xl md:text-2xl text-black pb-2">
                Inovando Junto com a Medicina
              </h2>
              <p className="text-sm sm:text-sm md:text-sm text-justify leading-6">
                A medicina está em constante evolução, trazendo novas formas de tratamento que melhoram a precisão dos diagnósticos e a eficácia das terapias. Na Stixmed, utilizamos inovações como inteligência artificial e terapias personalizadas para oferecer cuidados mais assertivos e humanizados. A telemedicina amplia o acesso a consultas e acompanhamentos, tornando o atendimento mais ágil e acessível.
              </p>
              <p className="text-sm sm:text-sm md:text-sm text-justify mt-2 leading-6">
                Nosso compromisso é impulsionar essa evolução, desenvolvendo soluções que tornem os tratamentos mais acessíveis, eficazes e centrados no paciente. Acreditamos que, ao inovar constantemente, podemos construir um futuro onde a medicina atenda cada vez melhor às necessidades da sociedade, promovendo saúde, bem-estar e qualidade de vida para todos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#10c4b5] text-white py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="px-4">
            <h2 className="text-base text-white-300 mb-2">Home Care</h2>
            <h1 className="text-xl font-bold text-justify leading-7 mb-4">
              Conte com nossa equipe especializada para oferecer atendimento humanizado e de excelência, levando cuidados até você no conforto do seu lar.
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {homeData.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 my-2">
                  <div className="bg-[#06786f] text-white p-3 rounded-full">
                    <p className="text-white text-base">{item.icon}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-blue-100 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center mt-3">
              <Link
                href="/home_care#planos"
                className="text-sm text-white font-semibold rounded-full px-5 py-2.5 bg-[#06786f]"
              >
                Veja os Planos
              </Link>
            </div>
          </div>
          <div className="mr-20 hidden md:hidden xl:block">
            <Image
              width={1000}
              height={1000}
              src="/homecare.webp"
              alt="Atendimento domiciliar"
              className="rounded-lg shadow-lg max-w-full h-auto img-thumbnail"
            />
          </div>
        </div>
      </section >
      <section className="py-4 flex justify-center">
        <div className="container mx-auto flex flex-col gap-6 px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="mr-20 hidden md:hidden lg:block">
              <Image
                src="/card.png"
                width={1500}
                height={1500}
                objectFit="cover"
                className="rounded-2xl max-w-[400px] max-h-[400px]"
                alt="Cartão Stixmed"
              />
            </div>
            <div className="md:w-full text-star md:text-left">
              <h2 className="font-bold text-2xl sm:text-2xl text-black pb-2">Cartão Stixmed</h2>
              <p className="text-sm sm:text-sm text-justify leading-relaxed max-w-6xl mb-4">
                O cartão Stixmed oferece consultas 24 horas, com um custo mais acessível do que os planos convencionais. Além disso, você tem acesso à telemedicina ilimitada, garantindo praticidade e cuidado sempre que precisar. Pensado para atender a você e sua família, nosso plano proporciona um atendimento contínuo e de qualidade, sem a necessidade de sair de casa.
              </p>
              <Link
                href="/cartao_stixmed#planos"
                className="m-auto text-sm text-white font-semibold rounded-full px-5 py-2.5 bg-[#10c4b5]"
              >
                Veja os Planos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}