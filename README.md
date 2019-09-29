# Data Lovers
## Rick and Morty Dashboard

## Índice

* [1. Introdução](#1-introdução)
* [2. O Problema](#2-o-problema)
* [3. O Dataset](#3-o-dataset)
* [4. Histórias do Usuário](#4-historias-do-usuario)
* [5. Desenho](#5-desenho)
* [6. Resultados](#6-resultados)
* [7. Considerações finais](#7-considerações-finais)

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

*Como fã da série Rick and Morty, quero visualizar todos os personagens da série ao carregar a página;*

**Definição de pronto:** todos os personagens e suas características devem estar no index.html, no formato de cards.

**Critérios de aceitação:** quero visualizar os personagens em cards, e quero que estes contenham informações sobre os personganes, como imagem, nome, espécie, gênero, tipo, mundo de origem, localização atual e status.

### História 2

*Como fã da série Rick and Morty, gostaria de poder buscar o personagem pelo nome*

**Definição de pronto:** O site deve ter uma caixa de busca para que o usuário possa digitar o nome do personagem. A função que manipule este dado junto ao dataset deveser capaz de buscar pelo personagem independente do usuário ter digitado com ou sem caixa alta. A manipulação do DOM deve ser feita pelo click do botão buscar, resultando na visualização dos personagens que correspondam ao *input* do usuário.

**Critérios de aceitação:** quero filtrar o usuário por nome, como eu não sei o nome completo dos personagens quero que a busca me traga resultados mesmo com parte do nome. Quero que a pesquisa me retorne todos os personagens sensíveis à minha busca, em cards, com informações como imagem, nome, espécie, gênero, tipo, mundo de origem, localização atual e status.

### História 3

*Como fã da série Rick and Morty, quero poder filtrar os personagens por gênero, status e espécie.*

**Definição de pronto:** O site deve ter uma tag *select* para que o usuário possa escolher se quer filtrar o personagem pelo gênero, espécie ou status. Ao ser selecionada alguma destas opções, deve ter disponíveis as sub-opções. Quando o usuário selecionar sua opção e clicar no botão de busca, o site deve gerar cards com os personagens que correspondem à busca do usuário.

**Critérios de aceitação:**  Quero poder escolher o filtro, seja ele gênero, status e espécie. Quero que, quando esse filtro for selecionado, me apareçam as opções associadas a ele. Quero que me seja apresentado os personagens que satisfaçam as condições do filtro, em cards, com informações como imagem, nome, espécie, gênero, tipo, mundo de origem, localização atual e status.


### História 4

*Como fã da série rick and morty, gostaria de ver as porcentagens relacionadas a gênero, espécie e status em charts, e também o quantitativo total das subdivisões desses seletores.*

**Definição de pronto:** O usuário deve ser capaz de visualizar todas as estatísticas em charts na tela ao carregar a página, bem como o quantitativo das opções gênero, espécie e status.

**Critérios de aceitação:** Quero que me seja apresentado um chart com as porcentagens de personagens do gênero feminino, masculino, agênero e desconhecido, e junto dele o quantitativo dos personagens. Quero um chart com as porcentagens relacionadas ao status - vivo, morto ou desconhecido -, e junto dele os dados numéricos do quantitativo de personagen de cada opção. Também quero visualizar um chart com a distribuição, em porcentagem, das 12 espécies existentes, bem como o quantitativo. E por fim, quero poder selecionar a espécie e ver a porcentagem de personagens por gênero para esta espécie, e também quero visualizar um chart com o quantitativo numérico da distribuição de gênero por espécie, relacionando todas as espécies.

## 5. Desenho 

### Protótipo de baixa fidelidade

Utilizamos a ferramenta disponibilizada pelo site [draw.io](http://draw.io) para construir o nosso protótipo. Que pode ser visualizado [aqui](https://github.com/e-v-s/SAP003-data-lovers/blob/master/prototipo.pdf).

### Testes de usabilidade

Foram realizados testes de usabilidade com usuários diferentes, onde foi identificada a necessidade de exibir todos os cards dos personagens contendo informações sobre as suas características principais, portanto os inserimos de forma centralizada. Para que a pesquisa pudesse ser feita pelo nome, inserimos campo para a digitação. De acordo com a relevância, obtida através da análise no interesse do usuário, disponibilizamos pesquisa por gênero, status e também por espécie, em uma barra seletora com as opções. Exibimos o dashboard abaixo dos cards para facilitar a amostragem de quantitativo baseado nas opções de pesquisa que o usuário possui.

Após os testes com usuários, observou-se a necessidade de validar os inputs de texto para aceitar qualquer tamanho de caracter.
Ao notar que o usuário não sabia o nome completo do personagem (Rick Sanhez, por exemplo), nos deparamos com outro desafio: fornecer ao usuário opção para que o mesmo pudesse localizar seu personagem por parte do nome.

O usuário também possuía interesse em saber o quantitativo de gênero por espécie: foi necessária busca por um gráfico que pudesse exibir as informações correlacionadas.


## 6. Resultados

* Aprendemos a desenhar e construir uma interface web onde se possa visualizar e manipular dados, entendendo o que o usuário necessita.

* Criamos histórias do usuário com base nas **necessidades** de suspostos fãs de Rick and Morty. 
* As **definitions of done** e os critérios de aceitação estavam relacionados, para todas as histórias, em manipular o dataset, extrair dele as informações necessárias para a realização da tarefa, construção de funções para manipular estas informações, o retorno dos dados trabalhados para o usuário e por fim os testes unitários para as funções do arquivo data.js;
* Definimos quais dados utilizar como base no **entendimento do usuário**;
* Manipulamos **arrays** e **objetos**;
* Manipulamos o **DOM**;
* Manejamos os eventos **DOM** para permitir interação com o usuário (filtros e busca);

## 6. Considerações Finais

Em nossa interface final é possível visualizar os dados em cards, quadros e charts. O usuário é capaz fazer uma busca pelo nome do personagem, e também de filtrar os personagens por status, espécie e gênero. Nosso projeto também calcula porcentagens e o número total de personagens dependendo do objetivo. E por fim, conseguimos fazer um site responsivo utilizando CSS.



