# Blog Legal - Frontend

## Descrição
Sistema de blog feito em ReactJS para o processo seletivo da TGT Digital

## Stack
O sistema possui um mock de dados próprio, não possui API e utiliza NPM como gerenciador de pacotes

## Pré-requisitos para rodar o sistema localmente
Para que o sistema seja rodado na sua máquina você precisa realizar os seguintes passos:

- Clonar o repositório para sua máquina `git clone https://github.com/Matheusroliv/Teste-TGT-Digital.git`

- Acessar a pasta do projeto `cd teste-tgt-digital`

- instalar o npm utilizando o comando `npm install` ou `npm i`

- Após a instalação, para rodar o projeto utilize o comando `npm start`

- - Também é possível testar a mesma versão do projeto aqui: https://blog-legal-tgt.surge.sh/

## Dentro do código
Todo o projeto esta localizado na pasta `src`

- Pasta `Components`
- - Possuí dois componentes utilizados no projeto, são eles: o `Header` do projeto que é renderizado nas páginas Profile e de Criação de Posts e a `Lista de Posts` que é renderizada na página Profile.

- Pasta `Hooks`
- - Possuí um Custom Hook de Formulários.

- Pasta `Pages`
- - Possuí todas as páginas do projeto, são elas: `Home`, `Login`, `NewPost`, `Profile`, `Signup`

- Pasta `Router`
- - Possui todo o sitema de navegação entre páginas do projeto

- Pasta `Services`
- - Possui uma função que protege as páginas `Profile` e `NewPost` de serem acessadas por usuários não cadastrados

- Pasta `Themes`
- - Possui um estilo global para o projeto

## Exemplos de uso:
### Cadastro: O cadastro é obrigatório.
Na página de Cadastro é possível criar um novo usuário com, nome, e-mail e senha; 
<br />
<b>NÃO UTILIZE INFORMAÇÕES VERDADEIRAS. Todas as informações de cadastro são salvas no LocalStorage</b>.
</br>

<strong>Entrada</strong>

Nome:
</br>
<b>Exemplo: Matheus</b>

Email: o conteúdo digitado precisa seguir um padrão de email
</br>
<b>Exemplo: matheusteste@gmail.com</b>

Senha: o conteúdo digitado pode conter todas as letras e números e deve conter no mínimo 6 digitos
</br>
<b>Exemplo: 123456</b>

Confirme sua senha: o conteúdo digitado deve ser exatamente igual a senha digitada no input anterior
</br>
<b>Exemplo: 123456</b>

### Login: O login é obrigatório para acessar as paginas do seu perfil e criação de posts

<strong>Entrada</strong>

Email: o conteúdo digitado precisa ser digitado exatamente igual como foi feito no cadastro
</br>
<b>Exemplo: matheusteste@gmail.com</b>

Senha: o conteúdo digitado precisa ser digitado exatamente igual como foi feito no cadastro
</br>
<b>Exemplo: 123456</b>

### Criação de Posts

<strong>Entrada</strong>

Título:
</br>
<b>Exemplo: Dica para desenvolvedores</b>

Conteúdo:
</br>
<b>Exemplo: Nunca esqueça do ponto e vírgula.</b>

## Tecnologias
- ReactJS
- React Hooks
- Styled Components (CSS)
