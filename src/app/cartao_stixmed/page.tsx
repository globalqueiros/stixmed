'use client';
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function CartaoStixmed() {
    const plans = [
        {
            title: "Ps Digital",
            price: 58,
            features: [
                "5 Consulta por mês",
                "Vídeo consulta com clínico geral 24hrs por dia",
                "Sem limite de uso e sem carência",
                "Atendimento em todo território Nacional",
            ],
            unavailableFeatures: [
            ],
        },
        {
            title: "Ps Digital Master",
            price: 86,
            features: [
                "20 Consulta por mês",
                "Cartão Stixmed",
                "Vídeo consulta com clínico geral 24hrs por dia",
                "Sem limite de uso e sem carência",
                "Atendimento em todo território Nacional",
                "Seguro de vida (Porto Seguro)"
            ],
            unavailableFeatures: [
            ],
        },
        {
            title: "PS Premium",
            price: 105,
            features: [
                "Consulta ilimitada",
                "Cartão Stixmed",
                "Vídeo consulta com clínico geral 24hrs por dia",
                "Sem limite de uso e sem carência",
                "Atendimento em todo território Nacional",
                "Atendimento com ambulância em caso de emergência e urgência",
                "Seguro de vida (Porto Seguro)"
            ],
            unavailableFeatures: [
            ],
        },
    ];
    return (
        <>
            <section className="py-3">
                <div className="flex md:flex-row flex-col justify-around items-center max-w-7xl m-auto">
                    <div className="flex flex-col items-start justify-start md:ml-20 mx-10 mt-3 md:mt-0">
                        <h4 className="font-bold text-xl text-black text-center sm:text-xl md:text-xl lg:text-xl xl:text-4xl 2xl:text-3xl 2xl:m-auto">Saúde sem limites: consultas acessíveis para você e sua família!</h4>
                        <p className="mt-3 text-sm font-normal text-black text-justify sm:leading-7 sm:text-base md:text-sm md:leading-6 lg:text-sm lg:leading-6 xl:text-sm xl:leading-6 2xl:text-sm 2xl:leading-6">Telemedicina 24h tenha acesso ilimitado a consultas com médicos especializados, prontos para atendê-lo a qualquer hora, diretamente pelo seu celular. Com praticidade, segurança e conforto, você garante a saúde de sua família sem sair de casa. Não perca tempo em filas ou deslocamentos—o atendimento médico que você precisa está ao seu alcance, sempre que precisar.</p>
                    </div>
                    <div className="mr-20 lg:block hidden">
                        <Image
                            src="/familia.jpg"
                            width={1500}
                            height={1500}
                            objectFit="cover"
                            className='rounded-xl img-thumbnail'
                            alt="Médicos"
                        />
                    </div>
                </div>
            </section>
            <section className="py-4">
                <div className="flex md:flex-row flex-col justify-around items-center max-w-7xl m-auto bg-slate-200 rounded-2xl py-1">
                    <div className="mr-10 p-4 lg:block hidden">
                        <Image
                            src="/ambulancia.jpg"
                            width={1600}
                            height={1600}
                            objectFit="cover"
                            className='rounded-xl img-thumbnail'
                            alt="Ambûlancia"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-10 mx-10 my-4 md:mt-0">
                        <h4 className="text-black text-justify font-bold text-lg md:text-xl leading-7 sm:text-lg lg:text-xl xl:text-2xl 2xl:text-xl">Mais de 70% dos casos são atendidos e resolvidos diretamente no local, sem necessidade de encaminhamento ao hospital.</h4>
                        <p className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-normal text-back mt-3 text-justify leading-8">Não é apenas uma remoção, é um serviço de salvamento de vidas em situações de emergência, com atendimento imediato no local em que você se encontra. Nossa equipe altamente treinada e qualificada presta cuidados especializados com ambulância, proporcionando um atendimento equivalente ao de um hospital móvel.</p>
                    </div>
                </div>
            </section>
            <section id="planos" className="mt-1 pb-4 bg-white">
                <h2 className="text-center text-3xl font-semibold leading-relaxed">
                    Conheça Nossos Planos
                </h2>
                <p className="text-center mt-0 text-sm">
                    Confira cada serviço em cada plano
                </p>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                        1025: { slidesPerView: 3 },
                    }}
                    className="max-w-7xl mx-auto p-4 relative"
                >
                    {plans.map((plan, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col min-h-[500px]">
                                <h5 className="uppercase text-left mb-3 text-xl bg-[#10c4b5] text-white font-semibold p-4 sm:mb-4 md:text-base lg:p-8 xl:text-xl 2xl:mb-3 2xl:text-lg">
                                    {plan.title}
                                </h5>
                                <div className="flex items-baseline text-black font-bold justify-center my-2">
                                    <span className="text-sm font-semibold -translate-y-5">R$</span>
                                    <span className="text-5xl font-extrabold tracking-tight">
                                        {plan.price}
                                    </span>
                                    <span className="text-sm font-semibold -translate-y-5">,99</span>
                                    <span className="ml-1 text-sm font-normal text-black">/mês</span>
                                </div>
                                <ul className="flex-grow flex flex-col justify-center my-0 space-y-5 mb-0 px-6">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <svg
                                                className="w-4 h-4 text-[#10c4b5]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            <span className="ml-3 text-sm font-normal text-black">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <Link
                                        href={`/precadastro_cartaostixmed`}
                                        className="block text-center w-full px-5 py-3 text-sm font-medium text-white bg-[#10c4b5] rounded-b-2xl"
                                    >
                                        Contratar Plano
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}