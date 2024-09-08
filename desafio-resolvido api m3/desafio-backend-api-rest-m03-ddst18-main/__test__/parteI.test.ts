const bcrypt = require('bcrypt');

function criptografarSenha(senha) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(senha, salt);
  return hash;
}

describe("Criptografia de senha com bcrypt", () => {
  test("deve criptografar e verificar a senha corretamente", async () => {
    const senha = "minhaSenha123";
    const hash = criptografarSenha(senha);

    const senhaVerificada = await bcrypt.compare(senha, hash);
    expect(senhaVerificada).toBe(true);
  });
});