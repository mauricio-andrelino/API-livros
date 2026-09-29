# API-livros

API REST simples desenvolvida utilizando **Node.js** e **Express.js** para cadastro e consulta de livros.

Este projeto foi desenvolvido com o objetivo de praticar a criação de uma API utilizando **Express.js, rotas, métodos HTTP e parâmetros**.

## Tecnologias utilizadas

* Node.js
* Express.js
* JavaScript

## Requisitos

* Node.js instalado
* Git instalado

## Instalação

### 1. Clone o repositório

Abra o terminal e execute:

```bash
git clone https://github.com/mauricio-andrelino/API-livros.git
```

### 2. Entre na pasta do projeto

```bash
cd API-livros
```

### 3. Abra o projeto no VS Code

```bash
code .
```

### 4. Instale as dependências

```bash
npm install
```

## Executando a API

Execute:

```bash
node server.js
```

A API ficará disponível em:

```text
http://localhost:3000
```

## Rotas da API

### Listar todos os livros

**GET**

```text
GET /livros
```

Exemplo:

```text
http://localhost:3000/livros
```

Retorna todos os livros cadastrados.

---

### Consultar um livro pelo ID

**GET**

```text
GET /livros/:id
```

Exemplo:

```text
http://localhost:3000/livros/1
```

O `:id` representa o ID do livro que será consultado.

---

### Cadastrar um novo livro

**POST**

```text
POST /livros
```

No Postman, envie os dados no formato JSON:

```json
{
  "titulo": "O Hobbit",
  "autor": "J.R.R. Tolkien",
  "ano": 1937
}
```

O ID é gerado pela API.

---

### Atualizar um livro

**PUT**

```text
PUT /livros/:id
```

Exemplo:

```text
http://localhost:3000/livros/1
```

No Postman, envie os novos dados:

```json
{
  "titulo": "O Hobbit - Edição Atualizada",
  "autor": "J.R.R. Tolkien",
  "ano": 1937
}
```

---

### Excluir um livro

**DELETE**

```text
DELETE /livros/:id
```

Exemplo:

```text
http://localhost:3000/livros/1
```

O livro com o ID informado será excluído.

## Estrutura dos livros

Cada livro possui:

```json
{
  "id": 1,
  "titulo": "O Hobbit",
  "autor": "J.R.R. Tolkien",
  "ano": 1937
}
```

## Resumo das rotas

| Método | Rota          | Descrição                  |
| ------ | ------------- | -------------------------- |
| GET    | `/livros`     | Listar todos os livros     |
| GET    | `/livros/:id` | Consultar um livro pelo ID |
| POST   | `/livros`     | Cadastrar um novo livro    |
| PUT    | `/livros/:id` | Atualizar um livro         |
| DELETE | `/livros/:id` | Excluir um livro           |

## Armazenamento

Os dados dos livros são armazenados **em memória utilizando um array**.

Não é utilizado banco de dados neste projeto.

## Objetivo da atividade

Praticar:

* Criação de uma API REST;
* Utilização do Express.js;
* Criação de rotas;
* Métodos HTTP (`GET`, `POST`, `PUT` e `DELETE`);
* Utilização de parâmetros de rota;
* Manipulação de dados em memória;
* Testes de requisições utilizando ferramentas como Postman.
