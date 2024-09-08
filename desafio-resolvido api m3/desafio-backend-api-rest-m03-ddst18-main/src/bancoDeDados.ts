import { z } from 'zod';

type TEvento = {
  id: string;
  nome: string;
  endereco: string;
  data: Date;
  preco: number;
};

type TUsuario = {
  id: string;
  nome: string;
  email: string;
  senha: string;
};

type TCompra = {
  id: string;
  usuario: TUsuario;
  evento: TEvento;
  dataCompra: Date;
};

/
const schemaCompra = z.object({
  id: z.string().uuid(),
  usuario: z.instanceof(TUsuario),
  evento: z.instanceof(TEvento),
  dataCompra: z.date(),
});

const bancoDeDados: TBancoDeDados = {
  eventos: [
    // ...
  ],
  usuarios: [
    // ...
  ],
  compras: [
    // ...
  ],
};


function adicionarCompra(novaCompra: TCompra) {
  const resultadoValidacao = schemaCompra.safeParse(novaCompra);
  if (resultadoValidacao.success) {
    bancoDeDados.compras.push(novaCompra);
    console.log('Compra adicionada com sucesso!');
  } else {
    console.error('Erro de validação:', resultadoValidacao.error);
  }
}

const novaCompra: TCompra = {
  id: 'new-compra-id',
  usuario: bancoDeDados.usuarios[0],
  evento: bancoDeDados.eventos[1],
  dataCompra: new Date(),
};

adicionarCompra(novaCompra);