'use client';
import Image from "next/image";
import Link from "next/link";

export default function CartaoStixmed() {
    const plans = [
        {
            title: "Ps Digital",
            price: 58,
            features: [
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
        {
            title: "PS Premium",
            price: 105,
            features: [
                "Cartão Stixmed",
                "Vídeo consulta com clínico geral 24hrs por dia",
                "Sem limite de uso e sem carência",
                "Atendimento em todo território Nacional",
                "Atendimento com ambulância em caso de emergência e urgência",
                "Remoção em caso de home care",
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
                    <div className="flex flex-col items-start justify-start md:ml-20 mx-10 mt-10 md:mt-0">
                        <p className="text-black font-semibold pb-2">Cartão Stixmed</p>
                        <h4 className="font-bold md:text-2xl text-2xl text-black">Cuide da sua saúde e da sua família com consultas ilimitadas e acessíveis, pensadas para o seu bem-estar.</h4>
                        <p className="md:text-sm teat-sm font-normal text-back mt-3 text-justify">Telemedicina 24 horas: consultas ilimitadas com médicos especializados, sempre à disposição para atender você, diretamente no seu celular!</p>
                        <div className="mt-3 flex justify-center items-center gap-5">
                            <a href="#planos" className="text-white font-semibold rounded-full px-5 py-2.5 bg-[#10c4b5]">Contratar Agora</a>
                        </div>
                    </div>
                    <div className="mr-20 md:block hidden">
                        <Image
                            src="/familia.jpg"
                            width={1200}
                            height={1200}
                            objectFit="cover"
                            className='rounded-xl img-thumbnail'
                            alt="Médicos"
                        />
                    </div>
                </div>
            </section>
            <section className="py-4">
                <div className="flex md:flex-row flex-col justify-around items-center max-w-7xl m-auto bg-slate-200 rounded-2xl py-1">
                    <div className="mr-20 p-4 md:block hidden">
                        <Image
                            src="/ambulancia.jpg"
                            width={1600}
                            height={1600}
                            objectFit="cover"
                            className='rounded-xl img-thumbnail'
                            alt="Ambûlancia"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-10 mx-10 mt-10 md:mt-0">
                        <h4 className="font-bold md:text-2xl text-2xl text-black text-justify leading-6">Mais de 70% dos casos são atendidos e resolvidos diretamente no local, sem necessidade de encaminhamento ao hospital.</h4>
                        <p className="md:text-sm teat-sm font-normal text-back mt-3 text-justify leading-6">Não é apenas uma remoção, é um serviço de salvamento de vidas em situações de emergência, com atendimento imediato no local em que você se encontra. Nossa equipe altamente treinada e qualificada presta cuidados especializados com ambulância, proporcionando um atendimento equivalente ao de um hospital móvel.</p>
                    </div>
                </div>
            </section>
            <section id='planos' className="pt-2 pb-3">
                <h2 className="text-center text-xl md:text-xl lg:text-3xl font-semibold leading-relaxed">
                    Conheça Nossos Planos
                </h2>
                <p className="text-center mt-2">Confira cada serviço em cada plano</p>
                <div className="flex flex-wrap justify-center gap-6 p-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="w-full max-w-sm p-0 bg-white border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col"
                        >
                            <h5 className="uppercase mb-3 text-xl bg-[#10c4b5] text-white font-semibold p-6">
                                {plan.title}
                            </h5>
                            <div className="flex items-baseline text-black font-bold justify-center">
                                <span className="text-sm font-semibold -translate-y-5">R$</span>
                                <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                                <span className="text-sm font-semibold -translate-y-5">,99</span>
                                <span className="ml-1 text-sm font-normal text-black">/mês</span>
                            </div>
                            <ul role="list" className="my-7 space-y-4 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center pl-6 pr-6 text-center justify-center">
                                        <svg
                                            className="w-4 h-4 text-[#10c4b5]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="ml-3 text-base font-normal text-black border-t-2 py-1">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                                {plan.unavailableFeatures.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center line-through decoration-gray-500"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="ml-3 text-base font-normal text-gray-500 pl-6 pr-6">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <Link href={`/precadastro_cartaostixmed`}
                                type="button"
                                className="mt-auto text-center w-full px-5 py-3 text-sm font-medium text-white bg-[#10c4b5]"
                            >
                                Contratar Plano
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}