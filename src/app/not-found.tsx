import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center justify-center my-4 text-center">
                <div className="py-3">
                    <Image
                        src="/not-found.svg"
                        width={250}
                        height={250}
                        alt="Página Não Encontrada"
                    />
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2">Página Não Encontrada</h2>
                    <Link className="text-black font-semibold hover:text-black" href="/">
                        Voltar Ao Início
                    </Link>
                </div>
            </div>
        </>
    )
}