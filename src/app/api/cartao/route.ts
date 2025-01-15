import { NextResponse } from 'next/server';
import db from '../../../lib/db';

function generateRandomNumber(): string {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return randomNum.toString();
}

export async function POST(req: Request) {
    try {
        const { indicacao, nome, data_nascimento, email, cpf, plano, endereco, whatsapp } = await req.json();

        const prontuario = generateRandomNumber();
        const query = `
            INSERT INTO precadastro (indicacao, servico, prontuario, nome, data_nascimento, email, cpf, plano, endereco, whatsapp, created) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const now = new Date();
        now.setHours(now.getHours() - 3);
        const created = now.toISOString().slice(0, 19).replace('T', ' ');
        const servico = '0';
        const values = [
            indicacao || null,
            servico,
            prontuario,
            nome,
            data_nascimento,
            email,
            cpf,
            plano,
            endereco,
            whatsapp,
            created
        ];

        await db.query(query, values);

        return NextResponse.json({
            success: true,
            message: 'Pré-cadastro realizado com sucesso! Aguarde nosso contato.'
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: 'Erro ao realizar o cadastro. Tente novamente mais tarde.' },
            { status: 500 }
        );
    }
}