import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div
                className="bg-white-50 pt-2 h-1/2 w-full flex md:flex-row flex-col justify-around items-start py-0"
                style={{ background: "#06786f" }}
            >
                <div className="py-2 pl-3 sm:pl-0">
                    <ul>
                        <Link href="/">
                            <Image
                                src="/logo_branco.png"
                                width={200}
                                height={200}
                                alt="Logo Stixmed"
                            />
                        </Link>
                        <div className="flex flex-col items-center justify-center pt-2 pb-0">
                            <p className="text-center text-sm font-normal text-white md:text-sm">
                                Siga nossas redes sociais
                            </p>
                            <div className="flex flex-row items-center justify-center gap-x-4 mt-2">
                                <Link
                                    href="https://www.instagram.com/stixmedsaude/"
                                    target="_blank"
                                    aria-label="Instagram"
                                >
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        style={{
                                            width: "1.1rem",
                                            color: "white",
                                            cursor: "pointer",
                                            height: "1.1rem",
                                        }}
                                    />
                                </Link>
                                <Link
                                    href="https://www.facebook.com/profile.php?id=61571851062262"
                                    target="_blank"
                                    aria-label="Facebook"
                                >
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        style={{
                                            width: "1.1rem",
                                            color: "white",
                                            cursor: "pointer",
                                            height: "1.1rem",
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className="py-3 pb-1 pl-3 pb-2 sm:pl-0">
                    <ul className='space-y-2 mb-2'>
                        <h5 className='text-white font-bold text-lg pb-1'>Institucional</h5>
                        <li className="text-sm"><Link href='/sobre_nos'>Sobre Nós</Link></li>
                        <li className="text-sm"><Link href='/telemedicina'>Telemedicina</Link></li>
                        <li className="text-sm"><Link href='/cartao_stixmed'>Cartão Stixmed</Link></li>
                        <li className="text-sm"><Link href='/home_care'>Home Care</Link></li>
                    </ul>
                </div>
                <div className="py-3 pb-1 pl-3 pb-0 sm:pl-0">
                    <ul className='space-y-2 mb-2'>
                        <h5 className='text-white font-bold text-lg pb-1'>Stixmed</h5>
                        <li className="text-sm"><Link href='/contato'>Contato</Link></li>
                        <li className="text-sm"><Link href='https://negociacao.stixmed.med.br'>Portal de Negociação</Link></li>
                        <li className="text-sm"><Link href='https://career.groupqueiros.com/'>Trabalhe Conosco</Link></li>
                    </ul>
                </div>
            </div >
            <div
                className="bg-white-50 w-full m-auto flex flex-col justify-center items-start py-2 px-3"
                style={{ background: '#06786f' }}
            >
                <p className="text-white min-w-4xl m-auto text-xs text-justify leading-relaxed pb-2">
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