import { z } from "zod";

export type TCompra = {
  id: string;
  id_usuario: string;
  id_evento: string;
  data: Date;
  valor: number;
  status: "pendente" | "confirmada" | "cancelada";
};

export const schemaCompra = z.object({
  id: z.string().uuid(),
  id_usuario: z.string().uuid(),
  id_evento: z.string().uuid(),
  data: z.date(),
  valor: z.number().positive(),
  status: z.enum(["pendente", "confirmada", "cancelada"]),
});