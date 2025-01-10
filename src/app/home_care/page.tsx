import style from './styles.module.css';
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
            unavailableFeatures: [
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
                "Atendimento em todo território Nacional"

            ],
            unavailableFeatures: [
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
                "Atendimento em todo território Nacional"
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
                        <p className="text-black font-semibold pb-2">Home Care</p>
                        <h3 className="font-bold md:text-3xl text-3xl text-black">Cuidados Que Transformam Vidas: Home Care Personalizado para Você</h3>
                        <p className="md:text-sm teat-sm font-normal text-back mt-3 text-justify">Oferecemos cuidados personalizados no conforto do seu lar, com uma equipe multidisciplinar especializada. Garantimos segurança, qualidade de vida e atenção humanizada, promovendo o bem-estar que você e sua família merecem.</p>
                        <div className="mt-3 flex justify-center items-center gap-5">
                            <a href="#planos" className="text-white font-semibold rounded-full px-5 py-2.5 bg-[#10c4b5]">Contratar Agora</a>
                        </div>
                    </div>
                    <div className="mr-20 md:block hidden">
                        <Image
                            src="/enfermeirahomecare.webp"
                            width={1500}
                            height={1500}
                            objectFit="cover"
                            className='rounded-2xl img-thumbnail'
                            alt="Enfermeira"
                        />
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 bg-[#25a197] lg:px-8 rounded-lg">
                <h4 className="text-2xl font-bold text-white mb-1 text-center md:text-left">
                    Por que escolher nosso Home Care?
                </h4>
                <p className="text-sm text-white mb-6 text-left md:text-left">
                    Escolha nosso home care para receber cuidados especializados no conforto do seu lar. Nossa equipe dedicada prioriza seu bem-estar, oferecendo segurança, atenção humanizada e qualidade de vida para você e sua família.
                </p>
                <ul className="text-sm list-disc list-inside text-white space-y-1 sm:space-y-2 lg:space-y-2">
                    <li>Equipe multidisciplinar</li>
                    <li>Administração de medicamentos</li>
                    <li>Seguro de vida (Porto Seguro)</li>
                    <li>Atendimento com ambulância</li>
                    <li>Atendimento em todo território Nacional</li>
                </ul>
            </section>
            <section id='planos' className="pt-3 pb-3">
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
                            <Link href={`/precadastro_homecare`}
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