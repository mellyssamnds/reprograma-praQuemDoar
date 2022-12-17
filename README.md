# Pra Quem Doar - Projeto Final {reprograma}

O Projeto Final tem como objetivo colocar em prática os conhecimentos obtidos durante as 18 semanas de imersão em Back-end da [{reprograma}](https://reprograma.com.br/).

O Todas em Tech é uma iniciativa da **{reprograma}** e do **BID Lab (Laboratório de Inovação do Grupo Banco Interamericano de Desenvolvimento)**, desenvolvida para mulheres que querem usar a tecnologia para mudar vidas e criar um impacto positivo no mundo. O objetivo do projeto é ensinar programação e dar a oportunidade de um futuro melhor por meio da tecnologia para mulheres em situações de vulnerabilidade social, econômica e de gênero, priorizando negras e/ou trans e travestis.

Além da capacitação em programação front-end e back-end, o Todas em Tech auxilia no aprimoramento de competências comportamentais (soft skills) e no desenvolvimento do portfólio das alunas, visando conectá-las ao mercado de trabalho.

## Sobre o Projeto

Este projeto tem por objetivo trazer visibilidade às ONGs e Projetos Sociais do Estado do Espírito Santo. Como o final de ano dá início a uma onda de solidariedade, é comum que as pessoas procurem Instituições para ajudar, e neste momento é até difícil escolher quem ajudar. A ideia aqui é listar projetos com causas sociais diferentes, para você se sentir motivado a participar ou apoiar de alguma forma um projeto social e facilitar a busca entre quem precisa de ajuda e quem quer ajudar.

A existência de bons projetos sociais traz esperança para as pessoas beneficiadas e também para quem já anda descrente em relação ao ser humano. Eles mostram que, com boa vontade e organização, é possível promover importantes avanços.

É claro que o viés filantrópico não é tudo. Além de dar a mão a quem precisa, os projetos são responsáveis por gerar empregos e movimentar o mercado. Segundo o **[Mapa das Organizações da Sociedade Civil](https://mapaosc.ipea.gov.br/indicadores)**, do IPEA, são mais de 820 mil Organizações da Sociedade Civil no Brasil, gerando 2,9 milhões de empregos formais. Essa é mais uma evidência da força de um setor que vem conduzindo nos últimos anos uma revolução silenciosa, amparando, dando oportunidades e abraçando os mais carentes.

## 🛠️Tecnologias utilizadas:

| Ferramenta       | Descrição                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| `javascript`     | Linguagem de programação                                                                                |
| `nodejs`         | Ambiente de execução do JavaScript                                                                      |
| `express`        | Framework NodeJS                                                                                        |
| `dotenv`         | Dependência para proteger dados sensíveis do projeto                                                    |
| `mongoose`       | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections   |
| `nodemon`        | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente |
| `npm`            | Gerenciador de pacotes                                                                                  |
| `MongoDB`        | Banco de dado não relacional orietado a documentos                                                      |
| `Mongo Atlas`    | Interface gráfica para verificar se os dados foram persistidos                                          |
| `Thunder Client` | Interface gráfica para realizar os testes                                                               |

<br>

## 🗂️ Arquitetura

```
  📁 reprograma-praQuemDoar
  |
  |-  📁 src
  |    |- 📁 database
  |         |- 📄 mongooseConnect.js
  |    |- 📁 controllers
  |         |- 📄 donnorController.js
  |         |- 📄 institutionController.js
  |    |- 📁 models
  |         |- 📄 donorModel.js
  |         |- 📄 institutionModel.js
  |    |- 📁 routes
  |         |- 📄 donorRoutes.js
  |         |- 📄 institutionRoutes.js
  |    |- 📄 app.js
  |
  |- 📄 .env
  |- 📄 .env.example
  |- 📄 .gitignore
  |- 📄 package-lock.json
  |- 📄 pakage.json
  |- 📄 README.md
  |- 📄 server.js
```

<br>

## 🌐Dados para Collection Institutions

- **\_id**: autogerado e obrigatório
- **institutionName**: texto e obrigatório (_único_)
- **address**: texto e obrigatório
- **description**: texto e obrigatório
- **socialCause**: texto e obrigatório
- **pix**: number e obrigatório
- **phoneNumber**: number e obrigatório
- **email**: texto e obrigatório
- **instagramOrSite**: texto e obrigatório

 <br>

## 🌐 Dados para Collection Donors

- **\_id**: autogerado e obrigatório
- **donorName**: texto e obrigatório (_único_)
- **email**: texto e obrigatório
- **phoneNumber**: number e obrigatório
- **cpf**: number e obrigatório
- **donationAmount**: number e obrigatório

## Rotas

## Documentação
