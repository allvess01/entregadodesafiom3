import dotenv from 'dotenv';

dotenv.config();

const fraseSecreta = process.env.FRASE_SECRETA;

if (!fraseSecreta) {
    throw new Error('Frase secreta não configurada');
}

export default fraseSecreta;