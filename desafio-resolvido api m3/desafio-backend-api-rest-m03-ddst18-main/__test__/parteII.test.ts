import { Response } from "supertest";
import app from "../src/app";
import supertest from "supertest";

const request = supertest(app);

describe("GET /", function () {
  it("deve retornar status 200", async () => {
    const resposta = await request.get("/").send();
    expect(resposta.statusCode).toEqual(200);
  });

  it("deve retornar um json", async () => {
    const resposta = await request.get("/").send();
    expect(resposta.headers["content-type"]).toMatch(/json/);
  });

  it("deve retornar mensagem pedida", async () => {
    const resposta = await request.get("/").send();
    expect(resposta.body.mensagem).toEqual("API de vendas de ingressos");
  });
});