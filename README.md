# Data Lovers

## Índice

* [1. Introdução](#1-introdução)
* [2. O Dataset](#2-o-dataset)
* [3. Histórias do Usuário](#3-historias-do-usuario)
* [4. Considerações gerais](#4-consideracoes-gerais)
* [5. Critérios mínimos de aceitação do projeto](#5-criterios-minimos-de-aceitacao-do-projeto)
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

Utilizamos a ferramenta disponibilizada pelo site [draw.io](https://draw.io) para construir o nosso protótipo.

### Protótipo de baixa fidelidade

![](Diagram.pdf)

### Os testes

Foram realizados testes de usabilidade com usuários diferentes. 
Onde foi identificada a necessidade de exibir todos os cards dos personagens contendo informações sobre as suas características principais, portanto os inserimos de forma centralizada.
Para que a pesquisa pudesse ser feita pelo nome, inserimos campo para a digitação.
De acordo com a relevância, obtida através da análise no interesse do usuário, disponibilizamos pesquisa por gênero, status  e também por espécie, em uma barra seletora com as opções.
Exibimos o dashboard abaixo dos cards para facilitar o amostragem de quantitativo baseado nas opções de pesquisa que o usuário possui. 

 - Após os testes com usuários, observou-se a necessidade de validar os inputs de texto para aceitar qualquer tamanho de caracter. 
- Ao notar que o usuário não sabia o nome completo do personagem(Rick Sanhez), ao pesquisar - nos deparamos com outro desafio: fornecer ao usuário opção para que o mesmo pudesse localizar seu personagem somente por um nome(Rick).
- O usuário também possuia interesse em saber o quantitativo de gênero por espécie: foi necessária busca por um gráfico que pudesse exibir as informações correlacionadas.  


## 6. Resultados

* Aprendemos a desenhar e construir uma interface web onde se possa visualizar e manipular dados, entendendo o que o usuário necessita.

* Criamos histórias do usuário com base nas **necessidades** de suspostos fãs de Rick and Morty. 
* As **definitions of done** e os critérios de aceitação estavam relacionados, para todas as histórias, em manipular o dataset, extrair dele as informações necessárias para a realização da tarefa, construção de funções para manipular estas informações, o retorno dos dados trabalhados para o usuário e por fim os testes unitários para as funções do arquivo data.js;
* Definimos quais dados utilizar como base no **entendimento do usuário**;
* Manipulamos **arrays** e **objetos**;
* Manipulamos o **DOM**;
* Manejamos os eventos **DOM** para permitir interação com o usuário (filtros e busca);

