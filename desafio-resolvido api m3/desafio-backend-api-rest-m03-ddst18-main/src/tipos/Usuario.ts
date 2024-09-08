import { z } from 'zod';

type TUsuario = {
  id: string;
  nome: string;
  email: string;
  senhaHash: string;
  ativo: boolean;
  perfil: 'admin' | 'usuario';
};


const schemaUsuario = z.object({
  id: z.string().uuid(),
  nome: z.string().min(3),
  email: z.string().email(),
  senhaHash: z.string().min(60),
  dataCriacao: z.date(),
  ativo: z.boolean(),
  perfil: z.enum(['admin', 'usuario']),
});