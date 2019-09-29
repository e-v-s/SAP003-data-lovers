# Data Lovers

## Índice

* [1. Introdução](#1-introdução)
* [2. O Problema](#2-o-problema)
* [3. O Dataset](#3-o-dataset)
* [4. Histórias do Usuário](#4-historias-do-usuario)
* [5. Desenho](#5-desenho)
* [6. Hacker edition](#6-hacker-edition)
* [7. Considerações técnicas](#7-considerações-técnicas)
* [8. Pistas, dicas e leituras complementares](#8-pistas-dicas-e-leituras-complementares)
* [9. Checklist](#9-checklist)

***

## 1. Introdução

O presente projeto tem como objetivo construir uma *dashboard* a partir de um arquivo de objetos contendo todos os personagens da série **Rick and Morty**, que pode ser acessada [**aqui**](https://e-v-s.github.io/SAP003-data-lovers/src/index.html).

Neste projeto utilizamos HTML 5, CSS 3, ES6 e a biblioteca Google Charts para criar a visualização dos dados em gráficos. Além destas ferramentas, também foi necessária a construção de histórias de usuários para nos guiar em relação ao que deveria ser realizado no projeto.

Com o intuito de conhecer e construir testes unitários, estes também foram codados para algumas funções existente no *data.js*.

## 2. O Problema

A série **Rick and Morty** possui uma grande variedade de personagens, características bem diferentes para cada um, 3 temporadas e um tempo consideravelmente longo entre o lançamento de uma temporada e outra.

Para facilitar a vida dos consumidores dessa série, fizemos o [**Wubba Lubbd Dub Dub** Dashboard](https://e-v-s.github.io/SAP003-data-lovers/src/index.html), que permite a busca pelo nome do personagem e também através de filtros específicos, mas não só isso.

Pensando na visualização dos dados de personagens tão diferentes entre si, também disponibilizamos uma dashboard específica para os diversos *gêneros*, *espécies* e *status* existentes. O usuário pode então ver números e porcentagens relacionadas a essas características em charts e quadros.

## 3. O Dataset

O Dataset utilizado foi o da série **Rick and Morty**, que contém informações diversas (nome, gênero, status, espécie, mundo de origem, localização, dentre outras informações menos relevantes para o objetivo deste projeto específico) sobre todos os 493 personagens da série.

Este conjunto de dados foi obtido a partir de uma [API](https://rickandmortyapi.com/) própria.

## 4. Histórias do Usuário

Foram criadas quatro histórias do usuário:

### História 1

*Como fã da série Rick and Morty, quero visualizar todos os personagens da série com suas características mais importantes em cards ao carregar a página;*

**Definição de pronto:** todos os personagens e suas características devem estar no index.html, no formato de cards.

**Critérios de aceitação:** funções devidamente distribuídas em main.js e data.js, e testes unitários OK.

### História 2

*Como fã da série Rick and Morty, gostaria de poder buscar o personagem pelo nome e visualizar suas características principais (espécie, gênero, status, origem, localização e tipo) em cards;*

**Definição de pronto:** O site deve ter uma caixa de busca para que o usuário possa digitar o nome do personagem. A função que manipule este dado junto ao dataset deveser capaz de buscar pelo personagem independente do usuário ter digitado com ou sem caixa alta. A manipulação do DOM deve ser feita pelo click do botão buscar, resultando na visualização dos personagens que correspondam ao *input* do usuário.

**Critérios de aceitação:** funções devidamente distribuídas em main.js e data.js, testes unitários OK.

### História 3

*Como fã da série Rick and Morty, quero poder filtrar os personagens por gênero, feminino,masculino, agênero ou desconhecido; por espécie; ou por status, se morto, vivo ou desconhecido; e poder visualizar estes conjuntos de personagens em cards.*

**Definição de pronto:** O site deve ter uma tag *select* para que o usuário possa escolher se quer filtrar o personagem pelo gênero, espécie ou status. Ao ser selecionada alguma destas opções, deve ter disponíveis as sub-opções. Quando o usuário selecionar sua opção e clicar no botão de busca, o site deve gerar cards com os personagens que correspondem à busca do usuário.

**Critérios de aceitação:** funções devidamente distribuídas em main.js e data.js, testes unitários OK.

### História 4

*Como fã da série rick and morty, gostaria de ver as estatísticas relacionadas a gênero, espécie e status em charts, e também o quantitativo total das subdivisões desses tipos.*

**Definição de pronto:** O usuário deve ser capaz de visualizar todas as estatísticas em charts na tela ao carregar a página, bem como o quantitativo das opções gênero, espécie e status.

**Critérios de aceitação:** funções devidamente distribuídas em main.js e data.js.

## 5. Desenho 

### Protótipo de baixa fidelidade

Utilizamos a ferramenta disponibilizada pelo site [draw.io](http://draw.io) para construir o nosso protótipo.

### Testes de usabilidade

Durante o desafio você deverá fazer testes de usabilidade com usuários
diferentes, e com base nos resultados desses testes, iterar seus desenhos de
interface. Conte-nos quais problemas de usabilidade você detectou através dos
testes e como os resolveu na proposta final.


## 6. Resultados

* Aprendemos a desenhar e construir uma interface web onde se possa visualizar e manipular dados, entendendo o que o usuário necessita.

* Criamos histórias do usuário com base nas **necessidades** de suspostos fãs de Rick and Morty. 
* As **definitions of done** e os critérios de aceitação estavam relacionados, para todas as histórias, em manipular o dataset, extrair dele as informações necessárias para a realização da tarefa, construção de funções para manipular estas informações, o retorno dos dados trabalhados para o usuário e por fim os testes unitários para as funções do arquivo data.js;
* Definimos quais dados utilizar como base no **entendimento do usuário**;
* Manipulamos **arrays** e **objetos**;
* Manipulamos o **DOM**;
* Manejamos os eventos **DOM** para permitir interação com o usuário (filtros e busca);

## 6. Considerações Finais



## 5. Critérios mínimos de aceitação do projeto

Os critérios considerados para que tenha terminado este projeto são:


### Implementação da interface de usuário (HTML/CSS/JS)

Após desenhar sua interface de usuário, deverá trabalhar na sua implementação.
**Não** é necessário que construa a interface exatamente da mesma forma que
desenhou. Terá um tempo limitado para trabalhar no projeto, então você deve
priorizar as tarefas.

No mínimo, sua implementação deverá:

1. Mostrar os dados em uma interface: pode ser em cards, tabelas, listas, etc.
2. Permitir ao usuário filtrar e ordenar dados;
3. Calcular estatísticas, como média aritmética, máximo ou mínimo de algum
   atributo numérico, ou contar quantas vezes aparece determinada informação,
   por exemplo.
4. Ser _responsivo_, ou seja, deve ser visualizada sem problemas a partir de
   diversos tamanhos de tela: celulares, tablets, notebooks, etc.



### `src/main.js`

Recomendamos que utilize `src/main.js` para todos os códigos que tenham a ver
com a exibição dos dados na tela. Com isto nos referimos basicamente à
interação com o DOM. Operações como criação de nós, registro de manejadores de
eventos (_event listeners_ ou _event handlers_) e etc.

Esta não é a única forma de dividir seu código. Pode utilizar mais arquivos e
pastas, sempre e quando a estrutura estiver clara para suas colegas.

### `src/data.js`

O coração deste projeto é a manipulação de dados através de arrays e objetos.

Recomendamos que este arquivo contenha toda a funcionalidade que corresponda a
obter, processar e manipular dados (suas funções):

* `filterData(data, condition)`: esta função receberia os dados e nos
  retornaria os que cumprem com a condição.

* `sortData(data, sortBy, sortOrder)`: esta função recebe três parâmetros.
  O primeiro, `data`, nos entrega os dados.
  O segundo, `sortBy`, diz respeito a qual das informações quer usar para
  ordenar.
  O terceiro, `sortOrder`, indica se quer ordenar de maneira crescente ou
  decrescente.

* `computeStats(data)`: essa função nos permite fazer cálculos estatísticos
  básicos para serem exibidos de acordo com o que os dados permitem.

Estes nomes de funções e parâmetros são somente referência, o que vocês decidir
utilizar vai depender da sua implementação.

Estas funções devem ser [_puras_](https://imasters.com.br/desenvolvimento/serie-js-e-vida-pure-functions-funcoes-puras)
e independentes do DOM. Estas funções serão depois usadas a partir do arquivo
`src/main.js`, ao carregar a página e a cada vez que o usuário interagir com
a interface (cliques, seleções, filtros, ordenação, etc).

### `src/data`

Nesta pasta estão os dados de diferentes fontes. Você vai encontrar uma pasta
para cada fonte, e dentro de cada pasta estão dois arquivos: um com a extensão
`.js` e outro `.json`. Ambos os arquivos contém os mesmos dados; a diferença é
que podemos usar o `.js` com uma tag `<script>`, enquanto o `.json` servirá
para, opcionalmnente, ser carregado de forma assíncrona com
[`fetch()`](https://developer.mozilla.org/pt-br/docs/Web/API/Fetch_API)
(ver seção da [_Parte Opcional_](#6-hacker-edition)).

### `test/data.spec.js`

Você também deverá fazer os teste unitários das funções implementadas no
arquivo `data.js`.

***

## 8. Pistas, dicas e leituras complementares

### Primeiros passos

Antes de começar a escrever o código, você deve definir seu produto com base no
conhecimento que puder obter a respeito de seus usuários. Estas perguntas podem
ajudar:

* Quem são os usuários principais do produto?
* Quais são os objetivos dos usuários com relação ao produto?
* Quais são os dados mais relevantes que querem ver na interface e por quê?
* Quando utilizam ou utilizariam o produto?
* Toda sua investigação prévia deve ter como resultado as histórias de
  usuário de seu projeto.

Quando estiver pronta para codar, sugerimos começar desta forma:

1. Uma das integrantes da dupla deve fazer um :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório de sua
   turma (a equipe de formação fornecerá o link). A outra integrante da dupla
   deve fazer um fork **a partir do repositório de sua companheira** e
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) um
   `remote` a partir dele.

2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   seu _fork_ para seu computador (cópia local).

3. Instale as dependências do projeto com o comando `npm install`, assumindo
   que já tenha instalado o [Node.js](https://nodejs.org/) (que inclui [npm](https://docs.npmjs.com/)).

4. Se tudo correr bem, deve ser capaz de executar os :traffic_light:
   testes unitários (unit tests) com o comando `npm test`.

5. Para ver a interface de seu programa no navegador, utilize o comando
   `npm start` para subir o servidor web no endereço `http://localhost:5000`.

6. Comece a codar! :rocket:

***

### Conteúdo de referência

#### UX Design (Experiência do usuário)

* Pesquisa com usuarios / entrevistas
* Princípios de design/UI

#### Desenvolvimento Front-End

* Unidade de testes do curso de JavaScript do LMS.
* Unidade de arrays do curso de JavaScript do LMS.
* Unidade de objetos do curso de JavaScript do LMS.
* Unidade de funções do curso de JavaScript do LMS.
* Unidade de DOM do curso de JavaScript do LMS.
* [Array no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Array.sort no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [Array.map no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Array.filter no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro)
* [Array.reduce no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
* [Array.forEach no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [Object.keys no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
* [Object.entries no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
* [Fetch API no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-pt.html)

#### Ferramentas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organização do trabalho

* [Histórias de Usuário](https://www.youtube.com/watch?v=sEtiCJfXTE8)
* [Definição de pronto](https://www.youtube.com/watch?v=Kfss63Q42F8)
* [Critérios de aceitação](https://medium.com/@karladiasn/user-stories-e-crit%C3%A9rios-de-aceita%C3%A7%C3%A3o-317c48403fcd)
* [Guia para Data Lovers](https://docs.google.com/presentation/d/1bOq8ns5wsvXdksdqYL3aQoxzFQsXTVlyvlV-yxI2oBM/present?token=AC4w5VhHBbEEA9u2w8bm3Ey1Cse349frbg%3A1567540902700&includes_info_params=1&eisi=CM_ytPW4teQCFQrJgQodeTcEZg#slide=id.g5282e1a53f_1_106)

***

## 9. Checklist

* [ ] Usar VanillaJS.
* [ ] Não utilizar `this`.
* [ ] Passa pelo linter (`npm run pretest`)
* [ ] Passa pelos testes (`npm test`)
* [ ] Testes unitários cobrem um mínimo de 70% de statements, functions,
  lines e branches.
* [ ] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [ ] Inclui histórias de usuário no `README.md`.
* [ ] Inclui rascunho da solução (protótipo de baixa fidelidade) no
  `README.md`.
* [ ] Inclui uma lista de problemas detectados nos testes de usabilidade no `README.md`.
* [ ] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [ ] UI: Permite ordenar dados por um ou mais campos (asc e desc).
* [ ] UI: Permite filtrar dados com base em uma condição.
* [ ] UI: É _responsivo_.
