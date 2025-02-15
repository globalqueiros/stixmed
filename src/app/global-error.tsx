'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center my-5 text-center">
            <div className="py-3">
                <Image
                    src="/error_server.svg"
                    width={500}
                    height={500}
                    alt="Erro de Servidor"
                />
            </div>
            <div className="my-4 text-center">
                <h1 className="text-2xl font-bold">Erro Interno do Servidor</h1>
                <p className="text-gray-600">Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</p>
                <button
                    onClick={() => router.push('/')}
                    className="text-white mt-4 bg-[#10c4b5] font-semibold hover:bg-[#0ea89e] px-4 py-2 text-sm rounded-full transition-colors"
                >
                    Voltar Ao Início
                </button>
            </div>
        </div>
    );
}
