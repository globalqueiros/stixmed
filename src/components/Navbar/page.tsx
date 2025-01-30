'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import style from './styles.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${style.navbar} ${isScrolled ? style.fixed : ''}`}>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <Image
                                    src="/logo.png"
                                    width={185}
                                    height={185}
                                    alt="Logo Stixmed"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-2 flex items-center space-x-2">
                            <Link href="/sobre_nos" className="text-white p-2">Sobre Nós</Link>
                            <Link href="/telemedicina" className="text-white p-2">Telemedicina</Link>
                            <Link href="/cartao_stixmed" className="text-white p-2">Cartão Stixmed</Link>
                            <Link href="/home_care" className="text-white p-2">Home Care</Link>
                            <Link href="/contato" className="text-white p-2">Contato</Link>
                            <Link href="https://paciente.stixmed.med.br" className="border rounded-full text-white flex btn text-sm"><div className='pl-3 pr-3'><FontAwesomeIcon icon={faUser} className="mr-2 mt-1" /> Acessar</div></Link>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
                            {isClick ? (
                                <svg className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/sobre_nos" className="text-white flex p-2">Sobre Nós</Link>
                        <Link href="/telemedicina" className="text-white flex p-2">Telemedicina</Link>
                        <Link href="/cartao_stixmed" className="text-white flex p-2">Cartão Stixmed</Link>
                        <Link href="/home_care" className="text-white flex p-2">Home Care</Link>
                        <Link href="/contato" className="text-white flex p-2">Contato</Link>
                        <Link href="https://paciente.stixmed.med.br" className="border rounded-full text-white flex btn text-base pl-4 pr-4"><FontAwesomeIcon icon={faUser} className="mr-2 mt-1" /> Acessar</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
