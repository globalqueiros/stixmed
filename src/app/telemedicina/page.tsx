import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faClock, faFileLines, faHeadset, faMobileScreen, faShirt, faSignature, faStar, faTv, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const vantagens = [
    {
        icon: <FontAwesomeIcon icon={faCalendarDay} />,
        description: "Agendamento simplificado e ágil por meio do site, dispositivo móvel ou telefone.",
    },
    {
        icon: <FontAwesomeIcon icon={faMobileScreen} />,
        description: "Consulta acessível de qualquer lugar, com total conveniência.",
    },
    {
        icon: <FontAwesomeIcon icon={faStar} />,
        description: "Médicos especializados e diversas áreas de atendimento ao seu alcance!",
    },
    {
        icon: <FontAwesomeIcon icon={faFileLines} />,
        description: "Prescrições médicas disponíveis diretamente no aplicativo ou site, em sua Área do Paciente.",
    }
];
export default function Telemedicina() {
    return (
        <>
            <section className="relative bg-cover bg-center w-full bg-center bg-no-repeat bg-[url('/telemedicina_paciente.jpg')] bg-[rgba(0, 0, 0, 0.65)]">
                <div className="absolute inset-0 bg-black opacity-65"></div>
                <div className='relative z-10 flex flex-col justify-center items-center py-5 sm:py-5 md:py-4 lg:py-4 xl:py-6 2xl:py-5 gap-y-5 mx-auto max-w-full sm:max-w-5xl lg:max-w-full xl:max-w-full 2xl:max-w-full'>
                    <h3 className="text-white text-2xl max-w-2xl leading-8 font-semibold mt-0 text-center sm:text-center sm:mt-0 md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl">Conheça a telemedicina, que cuida da sua saúde de qualquer lugar da Stixmed<span style={{ color: '#25a096' }} >!</span></h3>
                    <p className="text-white text-sm p-3 pt-0 pb-0 max-w-xl leading-6 text-justify sm:text-justify sm:mt-0 md:text-base lg:text-base xl:text-sm 2xl:text-base">Realize suas consultas por vídeo ou pelo aplicativo da Stixmed, garantindo maior comodidade no cuidado com sua saúde.</p>
                </div>
            </section>
            <section className='my-1'>
                <div className="container flex flex-col md:flex-row justify-between max-w-6xl py-4 md:py-3 gap-y-5 mx-auto">
                    <div className="md:mx-5 flex flex-col justify-center items-center mx-1 sm:p-4 md:mr-10 md:p-4 lg:p-4 xl:p-4 2xl:p-4">
                        <h2 className="text-2xl sm:text-center sm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold text-black-900 leading-8">Faça consultas online na Stixmed</h2>
                        <p className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-justify leading-7 my-2">Com nosso serviço de telemedicina, você tem a comodidade de consultar médicos de diversas especialidades de forma rápida e prática, através de videochamadas. Essa solução permite que você receba atendimento de qualidade sem sair de casa, proporcionando um cuidado médico eficiente e seguro, com a flexibilidade de ser atendido no seu tempo e no seu lugar.</p>
                    </div>
                    <div className="sm:ml-5 mx-auto md:mx-0">
                        <Image
                            src="/chamada_telemedicina.png"
                            width={1300}
                            height={1300}
                            className="shadow-lg img-thumbnail"
                            style={{ borderRadius: '3vh' }}
                            alt="Médico"
                        />
                    </div>
                </div>
                <div className="container flex flex-col md:flex-row justify-between max-w-6xl py-4 md:py-3 gap-y-5 mx-auto">
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
                    <div className="md:mx-5 md:mr-10">
                        <h2 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-bold text-black-900 mb-2 mt-2">Cuidar da sua saúde nunca foi tão fácil!</h2>
                        <p className="text-sm sm:text-sm md:text-sm xl:text-sm 2xl:text-sm text-justify leading-7">
                            Com a telemedicina da Stixmed, você tem acesso a consultas de qualidade com especialistas, sem sair de casa. Nossa plataforma oferece um atendimento rápido e seguro, disponível 24h por dia, todos os dias, garantindo comodidade e cuidado quando você precisar.
                        </p>
                        <p className="text-sm sm:text-sm md:text-sm xl:text-sm 2xl:text-sm text-justify leading-7 mt-2">
                            Sua consulta será realizada por um clínico geral ou pediatra, caso precise de atendimento imediato, garantindo que você receba a atenção necessária sempre que necessário. Nossa missão é proporcionar saúde com praticidade, confiança e excelência, para que você se sinta seguro e amparado em qualquer momento.
                        </p>
                    </div>
                </div>
            </section>
            <section className="mb-0 pb-3 px-0 bg-[#25a096]">
                <div className='container flex flex-col md:flex-row justify-between max-w-2xl py-4 md:py-3 gap-y-5 mx-auto'>
                    <h2 className='text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-white m-auto mb-0'>Benefícios das consultas na Stixmed</h2>
                </div>
                <div className="container flex flex-wrap justify-center py-1 md:py-2 gap-y-2 gap-x-5 mx-auto">
                    {vantagens.map((item, index) => (
                        <div key={index} className="card my-1 p-2 w-full sm:w-[200px] md:w-[180px] lg:w-[220px] shadow-sm bg-transparent border-white border-2 rounded-3xl">
                            <div className="card-body flex flex-col items-start gap-1 text-white">
                                <div className="flex items-start w-full">
                                    <span className="text-xl">{item.icon}</span>
                                </div>
                                <p className='text-sm mt-2 text-justify text-white leading-5'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-gray-200 mb-4">
                <div className="container flex grid grid-cols-1 md:grid-cols-2 gap-4 py-4 text-center font-bold text-black">
                    <div className="flex text-left flex-col space-y-1 text-6xl lg:text-8xl my-3">
                        <h5 className='text-2xl mb-1'><strong>Fique atento às nossas</strong> dicas de utilização</h5>
                        <p className='text-sm leading-5'>Selecionamos 6 dicas de boas práticas para que você possa se preparar para a consulta on-line com tranquilidade e utilizar a nossa Teleconsulta com segurança:</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <div className="flex text-left flex-col space-y-1 text-4xl lg:text-6xl">
                            <div>
                                <FontAwesomeIcon icon={faTv} className="text-lg text-[#25a096] mb-1" />
                                <p className='text-base'>Teste a conexão do seu dispositivo.</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faVolumeHigh} className="text-lg text-[#25a096] mb-1" />
                                <p className='text-base'>Escolha um lugar silencioso, tranquilo e sem ruídos.</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faSignature} className="text-lg text-[#25a096] mb-1" />
                                <p className='text-base'>Anote todas as perguntas que deseja fazer ao médico.</p>
                            </div>
                        </div>
                        <div className="flex text-left flex-col space-y-1 text-4xl lg:text-6xl">
                            <div>
                                <FontAwesomeIcon icon={faHeadset} className="text-lg text-[#25a096] mb-1" />
                                <p className='text-base'>Dê preferência ao uso de fones de ouvido.</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faClock} className="text-lg text-[#25a096] mb-1" />
                                <p className='text-base'>Caso não possa comparecer à consulta, reagende ou cancele.</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faShirt} className="text-lg text-[#25a096] mb-1" />
                                <p className='text-base'>Vista-se adequadamente.</p>
                            </div>
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
                    <h5 className="mb-2 text-xl sm:text-xl font-bold tracking-tight text-black-900">
                        Atendimento prático na palma da sua mão!
                    </h5>
                    <p className="my-2 font-normal text-sm sm:text-sm text-black-500 leading-6 text-justify">
                        Com a Conectivate, você tem acesso a um atendimento médico rápido e eficiente, podendo agendar consultas, receber prescrições e cuidar da sua saúde diretamente pelo aplicativo ou site. Oferecemos diversas especialidades, garantindo um atendimento seguro, personalizado e prático, para que você possa focar no que realmente importa. <strong>Baixe nosso app agora mesmo!</strong>
                    </p>
                    <div className="flex mt-0 items-center justify-start">
                        <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="mr-4">
                            <img src="/google_play.png" alt="Baixar na Google Play" className="w-40 h-auto" />
                        </a>
                        <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer">
                            <img src="/apple_store.png" alt="Baixar na App Store" className="w-40 h-auto" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}