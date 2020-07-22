# Semana omnistack 10

Esse projeto é resultado da semana omnistack 10 da equipe RocketSeat. Nele foram aplicadas as tecnologias NodeJs, Reactjs, React Native e MongoDB para construção de uma aplicação que visa oferecer formas de encontrara e compartilhar conhecimento entre desenvoldores através de tecnologias que conheçam.

## Requisitos

* [NodeJs] - Nodejs 10 ou superior;
* [Expo] - Aplicativo Expo instalado em seu smartphone;

## Instalação

### API
Dentro do diretório */api*, execute os comandos **npm install** para instalar as dependências necessárias ao projeto. Este projeto utiliza [MongoDB], então cria um arquivo nomeado .env na raiz deste projeto e inclua a url de conexão com seu banco local (observer o arquivo .env.example). Por fim, execute **npm start** para que o servidor fique em execução na porta 3333 (pode ser alterada através do arquivo /src/server.js).

### WEB
Dentro do diretório */web*, execute os comandos **npm install** para instalar as dependências necessárias ao projeto e **npm start** para que o projeto seja executado. Aguarde até que uma nova janela/aba seja aberta em seu navegador padrão.

### MOBILE
Dentro do diretório */mobile*, execute os comandos **npm install** para instalar as dependências necessárias ao projeto. Caso o [Expo] requisite sua permissão para instalar a dependência de maneira "global" em seu sistema operacional, é recomendado que aceite e permita esta instalação para um funcionamento melhor da ferramenta. Dentro do diretório /src/sercices/api.js altere o endereço IP para o endereço de seu computador. Em seguida, use **npm start** para que o projeto seja executado e uma nova aba/janela de seu navegador padrão exiba um QRCode. Considerando que você possua o aplicativo [Expo] instalado em seu smartphone, escaneie este QRCode para que o aplicativo seja instalado em seu aparelho.

## Utilização
Através do front-end web, você pode cadastrar usuários utilizando seu username do github, incluindo as tecnologias que ele conhece e a latitude e longitude de sua posição. Ao salvar, será criado um perfil para este usuário que será listado logo ao lado do cadastro.
Pelo aplicativo, é possível buscar usuários através de tecnologias digitadas na barra de busca, e em seguida serão mostradas as localizações destes usuários no mapa.

## Contato
welingtonfidelis@gmail.com

Sugestões e pull requests são sempre bem vindos 🤓

License
----

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[Expo]: <https://expo.io/>
[NodeJs]: <https://nodejs.org/en/>
[knex]: <http://knexjs.org/>
[Sequelize]: <https://sequelize.org/>
[Postman]: <https://www.postman.com/downloads/>
[este arquivo]: <https://drive.google.com/file/d/1VT0OlosTLE5QMyiBnwiQ87d-85DJ4VxJ/view?usp=sharing>
;
