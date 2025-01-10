import style from './styles.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="bg-white-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start py-0" style={{ background: '#06786f' }}>
                <div className="py-4 pl-3 sm:pl-0">
                    <ul>
                        <a href='/'>
                            <Image
                                src="/logo_branco.png"
                                width={200}
                                height={200}
                                alt="Logo Stixmed"
                            />
                        </a>
                        <div className="flex flex-col items-center justify-center pt-3 pb-0" style={{ paddingBottom: '.5vh' }}>
                            <p className="text-center text-lg font-normal text-white md:text-sm">Siga nossas redes sociais</p>
                            <a href="https://www.instagram.com/stixmed_saude/" target='_blank' className="my-2">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    style={{
                                        width: '1.5rem',
                                        color: 'white',
                                        cursor: 'pointer',
                                    }}
                                />
                            </a>
                        </div>
                    </ul>
                </div>
                <div className="py-4 pb-1 pl-3 sm:pl-0">
                    <ul>
                        <h5 className='text-white font-bold' style={{ paddingBottom: '.5vh', fontSize: '1.2rem' }}>Link Uteis</h5>
                        <li className={style.link}><a href='/sobre_nos'>Sobre Nós</a></li>
                        <li className={style.link}><a href='/telemedicina'>Telemedicina</a></li>
                        <li className={style.link}><a href='/cartao_stixmed'>Cartão Stixmed</a></li>
                        <li className={style.link}><a href='/home_care'>Home Care</a></li>
                    </ul>
                </div>
                <div className="py-4 pb-1 pl-3 sm:pl-0">
                    <ul>
                        <h5 className='text-white font-bold' style={{ paddingBottom: '.5vh', fontSize: '1.2rem' }}>Stixmed</h5>
                        <li className={style.link}><a href='/contato'>Contato</a></li>
                        <li className={style.link}><a href='https://paciente.stixmed.med.br/negociacao'>Portal de Negociação</a></li>
                        <li className={style.link}><a href='https://career.groupqueiros.com/'>Trabalhe Conosco</a></li>
                    </ul>
                </div>
            </div>
            <div
                className="bg-white-50 w-full m-auto flex flex-col justify-center items-start py-1 px-4"
                style={{ background: '#06786f' }}
            >
                <p className="text-white max-w-7xl m-auto text-xs text-justify leading-relaxed pb-1.5">
                    *A Stixmed não comercializa convênios, atuando exclusivamente no campo da medicina, com foco no Cartão Stixmed e nos serviços de Home Care.
                </p>
            </div>
            <div className="w-full bg-white text-white text-center py-2 mt-0 text-center">
                <p className="text-center" style={{ color: 'black', fontSize: '12px !important', fontWeight: '500' }}>
                    &copy; {currentYear} Stixmed Assistencia Domiciliar LTDA. Todos os
                    direitos reservados | Uma empresa{" "}
                    <a
                        href="https://groupqueiros.com/brazil"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/logo_queiros.png"
                            alt="Logo Group Queirós"
                            className="inline-block"
                            width={135}
                            height={50}
                        />
                    </a>
                </p>
            </div>
        </>
    )
}