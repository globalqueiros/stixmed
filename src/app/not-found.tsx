import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center justify-center my-5 text-center">
                <div className="py-3">
                    <Image
                        src="/not-found.svg"
                        width={500}
                        height={500}
                        alt="Página Não Encontrada"
                    />
                </div>
                <div className='my-4'>
                    <h2 className="text-xl font-bold my-4">Página Não Encontrada</h2>
                    <Link className="text-white mt-0 bg-[#10c4b5] font-semibold hover:bg-[#0ea89e] px-4 py-2 text-sm rounded-full transition-colors" href="/">
                        Voltar Ao Início
                    </Link>
                </div>
            </div>
        </>
    )
}