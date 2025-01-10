'use client';
import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function Cookie() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieAccepted = localStorage.getItem("cookieAccepted");
        if (!cookieAccepted) {
            setIsVisible(true);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem("cookieAccepted", "true");
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <header>Aviso de Cookie</header>
                <p className="text-xs text-white text-justify my-3 leading-6">
                    Nós armazenamos dados temporariamente para melhorar a sua experiência
                    de navegação e recomendar conteúdo de seu interesse. Ao utilizar
                    nossos serviços, você concorda com tal monitoramento.
                </p>
                <div className={styles.buttons}>
                    <button
                        className="text-sm text-white font-semibold rounded-4xl px-4 py-2.5 bg-[#25a096]"
                        onClick={handleClose}
                    >
                        Compreendo
                    </button>
                    <a
                        href="/politica_privacidade"
                        className="text-sm pl-4"
                    >
                        Saiba Mais
                    </a>
                </div>
            </div>
        </div>
    );
}