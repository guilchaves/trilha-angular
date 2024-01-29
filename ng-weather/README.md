# ng-weather-app

Esse projeto foi construído no lab Criando projeto para consultar a previsão do tempo via API da plataforma [Digital Innovation One](https://web.digitalinnovation.one/), ministrado pelo [João Ghignatti](https://github.com/JGhignatti).

Esse aplicativo foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 9.1.7.

## Stories

☑ - Conectar com API<br>
☑ - Setup NgRX<br>
☑ - Criar Home State<br>
☑ - Renderizar o clima de uma cidade<br>
☑ - Constumir a store pelo Home <br>
☐ - Adicionar component Bookmarks e funcionalidades<br>
☐ - Adicionar component favoritos e funcionalidades<br>
☐ - Adicionar router store<br>
☐ - Adicionar typeahead de cidades para Home e Bookmarks<br>
☐ - Adicionar Angular cdkm<br>

## Instalação

**Requerimentos**:<br>
Gerar uma API Key (gratuita) da [OpenWeatherMap](https://openweathermap.org/).

**Passo-a-passo**

1. clone o repositório `git@github.com:guilchaves/ng-weather-app.git`
2. Entre na pasta do projeto e instale as dependencias com `npm install`
3. Criar um arquivo `.env` na raíz do projeto, adicionando a API Key obtida na [OpenWeatherMap](https://openweathermap.org/) numa variável `API_KEY` dentro desse arquivo.

## Ambiente local

Execute `npm start` para que o projeto suba localmente. Acesse a url `http://localhost:4200/`. O projeto já possui reload automático, acompanhando alterações realizadas no código.
