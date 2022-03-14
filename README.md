# React-Curse
 Fazendo um curso de react do canal Matheus Battisti - Hora de Codar


## Indice ##
Props
Adicionando Css


# Props
As props são valores passados para componentes;
Podemos deixa-los dinamicos;
Ou seja, mudando a execução por causa do valor da prop;
O Valor é passado como um atributo n chamada do componente;
E Precisa ser resgatado dentro de uma propriedade/argumento;
chamda de props na função de definição do componente
As props são somente de leitura!;


# Adicionando Css
O CSS pode ser adicionado de forma global na aplicação, por meio do arquivo index.css por exemplo;
Porem é possivel estilizar a nivel de componentes;
Utilizando o CSS modules para isso;
Bastante criar um arquivo como: Componente.module.css;
E chamar este CSS no componente;


# Fragmentos
Os React Fragments permite  criação de um componente sem elemento pai;
O propósito é descompilar os nos do DOM;
A sintaxe é <> e </>, não ha um nome para a tag;
Criamos no proprio JSX;


# Avançado em Props
Podemos definir tipos para as props, realizando uma espécie de validação;
Definimos em um objeto chamaddo propTypes no próprio componente;
E ainda há a possibilidade de definir um valor padrão;
Neste caso utilizamos o objeto defultProps;


# Eventos
Os eventos de React são os mesmos eventos do DOM;
Ou seja, temos eventos para responder a um click;
O evento é atrelado a um tah que irá executá-lo;
Geralmente um método é atribuído ao evento;
Este método deve ser criado no componente;


