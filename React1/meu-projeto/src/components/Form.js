import React from 'react';
function Form() {
  
  function cadastrarUsuario(e) {
      e.preventDefault()
      console.log("usuario cadastrado");
  }

    return (
    <>
      <h1>Meu Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
          <div>
              <input type="text" placeholder='Digite o seu nome'/>
          </div>
          <div>
              <input type={"submit"} value="Cadastrar"/>
          </div>
      </form>
    </>
  );
}

export default Form;
