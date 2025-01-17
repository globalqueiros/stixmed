import style from './styles.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="bg-white-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start py-0" style={{ background: '#06786f' }}>
                <div className="py-4 pl-3 sm:pl-0">
                    <ul>
                        <Link href='/'>
                            <Image
                                src="/logo_branco.png"
                                width={200}
                                height={200}
                                alt="Logo Stixmed"
                            />
                        </Link>
                        <div className="flex flex-col items-center justify-center pt-3 pb-0.3">
                            <p className="text-center text-lg font-normal text-white md:text-sm">Siga nossas redes sociais</p>
                            <Link href="https://www.instagram.com/stixmed_saude/" target='_blank' className="my-2">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    style={{
                                        width: '2.5rem',
                                        color: 'white',
                                        cursor: 'pointer',
                                    }}
                                />
                            </Link>
                        </div>
                    </ul>
                </div>
                <div className="py-3 pb-1 pl-3 pb-2 sm:pl-0">
                    <ul>
                        <h5 className='text-white font-bold text-lg pb-1.5'>Institucional</h5>
                        <li className={style.link}><Link href='/sobre_nos'>Sobre Nós</Link></li>
                        <li className={style.link}><Link href='/telemedicina'>Telemedicina</Link></li>
                        <li className={style.link}><Link href='/cartao_stixmed'>Cartão Stixmed</Link></li>
                        <li className={style.link}><Link href='/home_care'>Home Care</Link></li>
                    </ul>
                </div>
                <div className="py-3 pb-1 pl-3 pb-0 sm:pl-0">
                    <ul>
                        <h5 className='text-white font-bold text-lg pb-1.5'>Stixmed</h5>
                        <li className={style.link}><Link href='/contato'>Contato</Link></li>
                        <li className={style.link}><Link href='https://paciente.stixmed.med.br/negociacao'>Portal de Negociação</Link></li>
                        <li className={style.link}><Link href='https://career.groupqueiros.com/'>Trabalhe Conosco</Link></li>
                    </ul>
                </div>
            </div>
            <div
                className="bg-white-50 w-full m-auto flex flex-col justify-center items-start py-1 px-2 py-2"
                style={{ background: '#06786f' }}
            >
                <p className="text-white min-w-4xl m-auto text-xs text-justify leading-relaxed pb-1">
                    *A Stixmed não comercializa convênios, atuando exclusivamente no campo da medicina, com foco no Cartão Stixmed e nos serviços de Home Care.
                </p>
            </div>
            <div className="w-full bg-white text-white text-center py-2 mt-0 text-center">
                <p className="text-center text-xs text-semibold">
                    &copy; {currentYear} Stixmed Assistencia Domiciliar LTDA. Todos os
                    direitos reservados | Uma empresa{" "}
                    <Link
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
                    </Link>
                </p>
            </div>
        </>
    )
}