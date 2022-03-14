import {React, useState} from "react";


function Form() {
  
  const [name, setName] = useState()
  const [password, setPassword] = useState()

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name)
    console.log(password)
    console.log(`Usuário ${name} foi cadastrado com a senha ${password}`);
  }

  return (
    <>
      <h1>Meu Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type={"submit"} value="Cadastrar" />
        </div>
      </form>
    </>
  );
}

export default Form;
