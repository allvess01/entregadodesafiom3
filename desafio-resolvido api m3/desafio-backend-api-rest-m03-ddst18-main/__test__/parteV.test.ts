import supertest from "supertest";
import app from "../src/app";
import { dadosDeTeste } from "./dadosTeste";

const request = supertest(app);

async function postCompra(comprovante, dados) {
  return await request
    .post(`/compras?comprovante=${comprovante}`)
    .set("content-type", "application/json")
    .send(dados);
}

describe("POST /compras", () => {
  it("deve retornar status 401 caso o comprovante não seja passado", async () => {
    const resposta = await postCompra(null, { idEvento: dadosDeTeste.eventos[0].id });
    expect(resposta.statusCode).toBe(401);
  });

  // ... outros testes ...
});