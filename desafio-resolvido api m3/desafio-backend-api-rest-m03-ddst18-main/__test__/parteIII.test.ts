import { Response } from "supertest";
import app from "../src/app";
import supertest from "supertest";
import { jest } from '@jest/globals';

const request = supertest(app);

jest.mock('../src/bancoDeDados', () => ({
  eventos: [

  ],
}));

describe("GET /eventos", () => {


  it("deve retornar os eventos filtrados por preço caso seja passado o filtro", async () => {
    const mockEventos = jest.requireMock('../src/bancoDeDados');
    mockEventos.eventos = [

    ];

    const resposta = await request.get("/eventos?maxPreco=14000").send();
    expect(resposta.body).toEqual(mockEventos.eventos);
  });
});