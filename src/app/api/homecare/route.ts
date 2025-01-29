import { NextResponse } from 'next/server';
import db from '../../../lib/db';

function isValidCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += Number(cpf[i]) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== Number(cpf[9])) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += Number(cpf[i]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === Number(cpf[10]);
}

function isValidWhatsApp(whatsapp: string): boolean {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regex.test(whatsapp);
}

function generateRandomNumber(): string {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return randomNum.toString();
}

export async function POST(req: Request) {
    try {
        const {
            nome,
            data_nascimento,
            email,
            cpf,
            plano,
            endereco,
            whatsapp,
            indicacao,
        } = await req.json();

        if (!nome || !data_nascimento || !email || !cpf || !plano || !endereco || !whatsapp) {
            return NextResponse.json(
                { success: false, message: 'Todos os campos obrigatórios devem ser preenchidos.' },
                { status: 400 }
            );
        }

        if (!isValidCPF(cpf)) {
            return NextResponse.json(
                { success: false, message: 'CPF inválido.' },
                { status: 400 }
            );
        }

        if (!isValidWhatsApp(whatsapp)) {
            return NextResponse.json(
                { success: false, message: 'Número de WhatsApp inválido. Use o formato (XX) XXXXX-XXXX.' },
                { status: 400 }
            );
        }

        const prontuario = generateRandomNumber();
        const query = `
            INSERT INTO precadastro (indicacao, servico, prontuario, nome, data_nascimento, email, cpf, plano, endereco, whatsapp, created
            ) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const now = new Date();
        now.setHours(now.getHours() - 3);
        const created = now.toISOString().slice(0, 19).replace('T', ' ');

        const servico = '1';
        const values = [indicacao, servico, prontuario, nome, data_nascimento, email, cpf, plano, endereco, whatsapp || null, created,
        ];

        await db.query(query, values);

        return NextResponse.json({
            success: true,
            message: 'Pré-cadastro realizado com sucesso! Nosso atendente entrará em contato em até 4 dias.',
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: 'Erro ao realizar o cadastro. Tente novamente mais tarde.' },
            { status: 500 }
        );
    }
}
