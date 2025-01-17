import Image from "next/image";
import Link from "next/link";

export default function HomeCare() {
    const plans = [
        {
            title: "Home Básico",
            price: 329,
            features: [
                "Remoção do Paciente",
                "Equipe Multidisciplinar",
                "Atendimento em todo território Nacional",
            ],
        },
        {
            title: "Home Master",
            price: 578,
            features: [
                "Remoção do Paciente",
                "Equipe Multidisciplinar",
                "Atendimento com ambulância em caso de emergência e urgência",
                "Seguro de vida (Porto Seguro)",
                "Atendimento em todo território Nacional",
            ],
        },
        {
            title: "HOME PREMIUM",
            price: 859,
            features: [
                "Remoção do Paciente",
                "Equipe Multidisciplinar",
                "Administração de medicamentos",
                "Atendimento com ambulância em caso de emergência e urgência",
                "Seguro de vida (Porto Seguro)",
                "Atendimento em todo território Nacional",
            ],
        },
    ];

    return (
        <>
            <section className="py-8">
                <div className="flex flex-col md:flex-row justify-around items-center max-w-7xl mx-auto px-0 sm-px-0 md:px-0 lg:px-8">
                    <div className="flex flex-col items-start justify-start md:ml-20 mx-4 md:mx-0 mt-0 md:mt-0">
                        <h3 className="m-auto text-center min-w-3xl font-bold text-xl md:text-lg lg:text-2xl xl:text-2xl text-black leading-snug text-justify">
                            Cuidados Que Transformam Vida<br></br> Home Care Personalizado para Você
                        </h3>
                        <p className="text-base sm:text-xs md:text-sm xl:text-sm font-normal text-black mt-3 text-justify leading-7">
                            Oferecemos cuidados personalizados no conforto do seu lar, com uma equipe multidisciplinar especializada.
                            Garantimos segurança, qualidade de vida e atenção humanizada, promovendo o bem-estar que você e sua família merecem.
                        </p>
                        <div className="mt-3 flex justify-start items-center gap-5">
                            <a
                                href="#planos"
                                className="text-white font-semibold rounded-full px-5 py-2.5 bg-[#10c4b5] hover:bg-[#0ea598] transition duration-300"
                            >
                                Contratar Agora
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0 hidden md:block">
                        <Image
                            src="/enfermeirahomecare.webp"
                            width={1500}
                            height={1500}
                            className="rounded-2xl object-cover img-thumbnail"
                            alt="Enfermeira"
                            priority
                        />
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto py-4 sm:py-4 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#25a197] rounded-lg">
                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-white mb-3 text-center md:text-left">
                    Por que escolher nosso Home Care?
                </h4>
                <p className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white mb-4 text-justify md:text-left leading-7">
                    Escolha nosso home care para receber cuidados especializados no conforto do seu lar. Nossa equipe dedicada
                    prioriza seu bem-estar, oferecendo segurança, atenção humanizada e qualidade de vida para você e sua família.
                </p>
                <ul className="text-sm sm:text-sm list-disc list-inside text-white space-y-3 sm:space-y-3 lg:space-y-3">
                    <li>Equipe multidisciplinar</li>
                    <li>Administração de medicamentos</li>
                    <li>Seguro de vida (Porto Seguro)</li>
                    <li>Atendimento com ambulância</li>
                    <li>Atendimento em todo território Nacional</li>
                </ul>
            </section>

            {/* Planos */}
            <section id="planos" className="pt-4 pb-8">
                <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed">
                    Conheça Nossos Planos
                </h2>
                <p className="text-center mt-2 text-sm sm:text-base">Confira cada serviço em cada plano</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col"
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
                            <ul role="list" className="my-7 space-y-4 flex-grow px-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-center justify-center">
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
                            </ul>
                            <Link
                                href={`/precadastro_homecare`}
                                className="mt-auto text-center w-full px-5 py-3 text-sm font-medium text-white bg-[#10c4b5]"
                            >
                                Contratar Plano
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}