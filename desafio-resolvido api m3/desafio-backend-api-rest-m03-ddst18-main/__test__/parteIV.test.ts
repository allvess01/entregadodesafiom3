// ... imports ...

async function postUsuario(dados) {
  return await request
    .post("/usuarios")
    .set("Content-type", "application/json")
    .send(dados);
}

describe("POST /usuarios", () => {
  it("deve retornar status 400 se algum campo obrigatório não for passado", async () => {
    const casosDeTeste = [
      { dados: { nome: "Lucas", email: "lucas@cubos.academy" }, campoFaltante: "senha" },
      // ... outros casos de teste ...
    ];

    for (const { dados, campoFaltante } of casosDeTeste) {
      const resposta = await postUsuario(dados);
      expect(resposta.statusCode).toEqual(400);
      expect(resposta.body.mensagem).toBe(`O campo ${campoFaltante} é obrigatório`);
    }
  });

  // ... outros testes ...
});