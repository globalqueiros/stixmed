import styles from './styles.module.css';
import Image from 'next/image';

interface CardProps {
    title: string;
    description: string;
    image: string;
}

const cardData: CardProps[] = [
    {
        title: "Médico",
        description: "Contamos com equipe médica pronta 24 horas, preparada para atender você.",
        image: "/medicoquem.png",
    },
    {
        title: "Enfermeira",
        description: "Serviços de enfermagem a domicílio pelo cartão Stixmed ou Home Care.",
        image: "/enfermeira.png",
    },
    {
        title: "Fisioterapia",
        description: "Contamos com profissionais fisioterapeutas que atendem em domicílio Home Care.",
        image: "/fisioterapia.png",
    },
    {
        title: "Cuidando",
        description: "Cuidamos de você em todas as etapas da vida, proporcionando dignidade a todos.",
        image: "/apertodemao.png",
    },
    {
        title: "Atendimento Ágil",
        description: "Respeitamos o tempo do paciente, garantindo um atendimento ágil e eficiente.",
        image: "/atendimento.png",
    },
    {
        title: "Pessoas",
        description: "Comprometidos em servir com humanismo, garantindo o melhor atendimento para o paciente.",
        image: "/pessoas.png",
    }
];

export default function SobreNos() {
    return (
        <>
            <section className='bg-[linear-gradient(287.38deg,_#06786f_0%,_#25a096_100%)]'>
                <div className="container flex flex-col md:flex-row justify-between sm:max-w-8xl md:mr-10 lg:mr-0 xl:mr-0 2xl:max-w-6xl py-2 md:py-3 gap-y-10 mx-auto">
                    <h4>A Stixmed foi criada para oferecer suporte no cuidado com a sua saúde de forma ágil, segura e simplificada.</h4>
                </div>
            </section>
            <div className="container flex flex-col md:flex-row justify-between sm:max-w-8xl md:mr-10 lg:mr-0 xl:mr-0 2xl:max-w-6xl py-4 md:py-3 gap-y-10 mx-auto">
                <div className="mx-10 md:mx-0">
                    <Image
                        src="/sobrenos.png"
                        width={1000}
                        height={1000}
                        className="rounded-full shadow-lg"
                        alt="Médico"
                    />
                </div>
                <div className="sm:mx-3 md:mx-5 lg:mx-5 xl:mx-5 2xl:mx-10 mr-10">
                    <h2 className="font-bold text-black pb-2">Sobre Nós</h2>
                    <p className='text-sm text-justify leading-6'>
                        Lançada em 2024 pela Corporação Queirós Brazil, em São Paulo, a Stixmed nasceu com a missão de cuidar das pessoas, garantindo agilidade no atendimento e oferecendo serviços de alta qualidade a preços mais acessíveis.
                    </p>
                    <p className='text-sm text-justify mt-2 leading-6'>
                        Pensando na eficiência no atendimento clínico e no conforto dos pacientes, também disponibilizamos serviços de home care. Nossa atuação é guiada pelos pilares de agilidade, humanização e excelência, com foco no socorro rápido, onde cada minuto conta. Para isso, contamos com uma equipe médica preparada para atuar 24 horas por dia, composta por médicos, enfermeiros(as) e fisioterapeutas, comprometidos em oferecer um atendimento ágil, eficiente e humanizado.
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-full max-w-7xl py-2 gap-y-5 m-auto">
                <h2 className="text-xl text-center font-semibold">
                    Somos uma clínica virtual e home care com médicos disponíveis
                    <span className={styles.breakline}> 24 horas </span>
                    para atender você e sua família online.
                </h2>
                <div className="grid grid-cols-1 gap-7 px-4 pb-4 md:grid-cols-2 lg:grid-cols-3">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 shadow-md rounded-lg"
                            style={{ background: '#10c4b5' }}
                        >
                            <Image
                                src={card.image}
                                width={60}
                                height={60}
                                alt={card.title}
                                className="rounded-lg pb-2"
                            />
                            <h3 className="mt-2 text-lg font-bold text-left text-white">{card.title}</h3>
                            <p className="mt-1 text-sm text-justify text-white">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-4xl mb-4 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto flex flex-col sm:flex-row items-center gap-4">
                <Image
                    src="/contratar.png"
                    width={300}
                    height={300}
                    className="rounded-full"
                    alt="Médico Contratar"
                />
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        Por que a Stixmed?
                    </h5>
                    <p className="mb-3 font-normal text-sm text-justify text-gray-700 leading-6">
                        A Stixmed, a melhor opção para cuidados médicos 24 horas. Nossa equipe está pronta para oferecer atendimento ágil e especializado, lidando com qualquer emergência. Contamos com serviços de home care e a conveniência do cartão Stixmed, garantindo sempre o melhor atendimento para o paciente.
                    </p>
                </div>
            </div>
        </>
    );
}