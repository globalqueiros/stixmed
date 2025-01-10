'use client';
import { useEffect } from 'react';

const BloquearConteudo = () => {
  useEffect(() => {
    const prevenirSelecao = (e: Event) => e.preventDefault();

    document.body.onselectstart = prevenirSelecao;

    return () => {
      document.body.onselectstart = null;
    };
  }, []);
};

export default BloquearConteudo;
