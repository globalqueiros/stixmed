import Image from 'next/image';

export default function Telemedicina() {
    return (
        <>
            <div className="container flex flex-col md:flex-row justify-between max-w-6xl py-4 md:py-3 gap-y-10 mx-auto">
                <div className="mx-auto md:mx-0">
                    <Image
                        src="/telemedicina.jpg"
                        width={1300}
                        height={1300}
                        className="shadow-lg img-thumbnail"
                        style={{ borderRadius: '3vh' }}
                        alt="Médico"
                    />
                </div>
                <div className="mx-5 md:mr-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-black-900 mb-3">Conheça telemedicina</h2>
                    <p className="text-xl md:text-sm text-justify leading-7">
                        A telemedicina é uma solução inovadora que conecta pacientes e profissionais de saúde através da tecnologia. Com ela, é possível realizar consultas, diagnósticos e acompanhamento médico à distância, proporcionando praticidade, agilidade e acessibilidade.
                    </p>
                    <p className="text-xl md:text-sm text-justify leading-7 mt-2">
                        Descubra como a telemedicina está transformando o cuidado com a saúde e levando atendimento de qualidade onde você estiver.
                    </p>
                </div>
            </div>
            <section className="mb-6 pb-2 px-0">
                <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl lg:text-3xl font-bold text-black-900 mb-3">
                            Como funciona ?
                        </h2>
                        <p className="text-black-700 text-sm text-justify lg:text-sm leading-7">
                            A Telemedicina, disponível no cartão exclusivo <strong>Stixmed</strong>, oferece consultas médicas online com agilidade e praticidade. Sem necessidade de deslocamento, o paciente é atendido e, se necessário, uma ambulância é acionada para garantir atendimento presencial ágil. Essa solução alia comodidade, segurança e eficiência no cuidado à saúde.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                            <h3 className="text-lg font-semibold text-black-900 mb-2">Consultas Online</h3>
                            <p className="text-sm text-black-700">
                                Tenha acesso a médicos qualificados sem sair de casa.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                            <h3 className="text-lg font-semibold text-black-900 mb-2">Atendimento Rápido</h3>
                            <p className="text-sm text-black-700">
                                Equipes prontas para garantir sua saúde em qualquer momento.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                            <h3 className="text-lg font-semibold text-black-900 mb-2">Serviços Home Care</h3>
                            <p className="text-sm text-black-700">
                                Atendimento médico no conforto do seu lar.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                            <h3 className="text-lg font-semibold text-black-900 mb-2">Preços Acessíveis</h3>
                            <p className="text-sm text-black-700">
                                Cuidado de qualidade por um preço que cabe no seu bolso.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="max-w-5xl mb-3 pb-3 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto flex flex-col sm:flex-row items-center gap-4">
                <Image
                    src="/aplicativo.avif"
                    width={250}
                    height={250}
                    className="rounded-full"
                    alt="Médico Contratar"
                />
                <div className="text-left sm:text-left">
                    <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-black-900">
                        Praticidade no atendimento
                    </h5>
                    <p className="mb-3 font-normal text-sm sm:text-sm text-black-500 leading-6 text-justify">
                        Todos os atendimentos são registrados no portal do paciente e pela equipe médica que realizou a consulta. Estamos inovando constantemente para trazer o melhor da área da saúde, garantindo um atendimento ágil e eficiente.
                    </p>
                </div>
            </div>
            <section className="bg-[#10c4b5]">
                <div className="flex justify-center items-center flex-col py-4 text-center font-bold lg:text-8xl text-6xl space-y-1 text-white">
                    <h4 className="pb-1 leading-6">Garanta seu Cartão Stixmed com planos a partir de <strong style={{ color: 'white' }}>R$ 58,99/mês</strong>.<br></br> Cuide da sua saúde com qualidade e economia!</h4>
                </div>
            </section>
        </>
    )
}