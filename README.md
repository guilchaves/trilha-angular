# ng-Cursos

Esse projeto foi construído para o curso Introdução ao Angular 8 da plataforma [Digital Innovation One](https://digitalinnovation.one/), ministrado pelo [
Wesllhey Holanda](https://github.com/wesllhey).

O curso consiste em um sistema de cursos, com a possibilidade de busca por filtragem, edição e exclusão dos cursos.

Esse projeto foi gerado via [Angular CLI]((https://github.com/angular/angular-cli) versão 8.3.18.

## Objetivos

Introdução ao Angular e seu fluxo de desenvolvimento. Introdução ao lyfecycle do Angular, componentes, interfaces, módulos, rotas, pipes, requisições HTTP e arquitetura de projeto básico.

## Stories

☑ - Criar componentes e construir o projeto<br>
☑ - Criar componentes com atributos independentes<br>
☑ - Tratar eventos com data binding<br>
☑ - Transformar datas com Pipes<br>
☑ - Trabalhar com formulários e templates<br>
☑ - Proteger Rotas com Guards<br>
☑ - Segregar responsabilidades<br>
☐ - Refatorar rotas (RoutingModule)
☑ - refatorar CSS para _SCSS_<br>
☐ - refatorar HTML para utilizar _html semantics_<br>

## Instalação

1. clone o repositório `git@github.com:guilchaves/ng-cursos.git`
2. Entre no projeto e instale as dependencias `npm install`
3. Entre na pasta `src/assets/server` e instale as dependencias `npm install`

## Ambiente local

Execute `ng serve` para que o projeto suba localmente. Acesse a url `http://localhost:4200/`. O projeto já está com reload automático conforme as alterações que você realizar no código

## Simulando o Backend

Dentro da pasta `src/assets/server` execute o comando `node serve.js`.

## Gerando componente

Execute `ng generate component nome-do-componente` para criar um novo componente. Você também pode usuar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para gerar o compilado do projeto. O projeto vai ser criado dentro do diretório `dist/`. Adicionar `--prod` junto comando de build para gerar minificado e pronto para o ambiente de produção.
