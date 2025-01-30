"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Planos() {
    const plans = [
        {
            title: "Home Básico",
            price: 329,
            features: [
                "15 Consulta por mês",
                "Remoção do Paciente",
                "Equipe Multidisciplinar",
                "Atendimento em todo território Nacional",
            ],
        },
        {
            title: "Home Master",
            price: 578,
            features: [
                "20 Consulta por mês",
                "Remoção do Paciente",
                "Equipe Multidisciplinar",
                "Atendimento com ambulância em emergências e urgências",
                "Seguro de vida (Porto Seguro)",
                "Atendimento em todo território Nacional",
            ],
        },
        {
            title: "Home Premium",
            price: 859,
            features: [
                "Consulta ilimitada",
                "Remoção do Paciente",
                "Equipe Multidisciplinar",
                "Administração de medicamentos",
                "Atendimento com ambulância em emergências e urgências",
                "Seguro de vida (Porto Seguro)",
                "Atendimento em todo território Nacional",
            ],
        },
    ];

    return (
        <>
            <section className="py-8">
                <div className="flex flex-col md:flex-row justify-around items-center max-w-7xl mx-auto px-4">
                    <div className="flex flex-col items-start justify-start md:ml-20 mx-4">
                        <h3 className="m-auto text-center font-bold text-xl md:text-lg lg:text-2xl text-black leading-snug">
                            Cuidados Que Transformam Vida Home Care Personalizado para Você
                        </h3>
                        <p className="text-base font-normal text-black mt-3 leading-6 text-justify">
                            Oferecemos cuidados personalizados no conforto do seu lar, com uma equipe multidisciplinar
                            especializada. Garantimos segurança, qualidade de vida e atenção humanizada, promovendo o
                            bem-estar que você e sua família merecem.
                        </p>
                    </div>
                    <div className="mt-10 md:mt-0 hidden lg:block">
                        <Image
                            src="/equipe_medica.jpeg"
                            width={1500}
                            height={1500}
                            className="rounded-2xl object-cover img-thumbnail"
                            alt="Enfermeira"
                            priority
                        />
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto py-4 mb-2 px-4 bg-[#25a197] rounded-lg">
                <h4 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-white mb-2 text-center">
                    Por que escolher nosso Home Care?
                </h4>
                <p className="text-sm sm:text-sm md:text-sm lg:text-sm text-white mb-3 text-justify leading-5 md:leading-6 lg:leading-6">
                Optar pelos nossos serviços é assegurar um cuidado personalizado e de alta qualidade no conforto de sua residência. Nossa equipe, composta por profissionais altamente qualificados, oferece atendimento especializado com foco na saúde e bem-estar do paciente. Utilizamos tecnologias avançadas para monitoramento contínuo, garantindo assim segurança e eficiência. Com flexibilidade e atenção, proporcionamos um atendimento humanizado e confiável. Ao escolher nossos serviços, você assegura um atendimento que prioriza seu bem-estar e qualidade de vida. Contamos com uma equipe de profissionais qualificados, que oferecem cuidados de saúde de excelência, sempre priorizando a segurança e o bem-estar do paciente no ambiente familiar, com um atendimento acolhedor e de total confiança.
                </p>
                <ul className="list-disc list-inside text-sm text-white space-y-2 font-semibold">
                    <li>Equipe multidisciplinar</li>
                    <li>Administração de medicamentos</li>
                    <li>Seguro de vida (Porto Seguro)</li>
                    <li>Atendimento com ambulância</li>
                    <li>Atendimento em todo território Nacional</li>
                </ul>
            </section>
            <section id="planos" className="mt-4 pb-4 bg-white">
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
                                        href={`/precadastro_homecare`}
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
    );
}