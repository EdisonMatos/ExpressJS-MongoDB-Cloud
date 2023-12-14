# 🚀 ExpressJS server com MongoDB e testes unitários

Este repositório contém uma aplicação simples desenvolvida com ExpressJS e MongoDB. O objetivo é demonstrar operações básicas de CRUD (Create, Read, Update, Delete) em uma base de dados MongoDB hospedada na nuvem.

## 🛠️ Tecnologias Utilizadas

- **Express:** Framework web para Node.js.
- **Prisma:** ORM para interação com o banco de dados MongoDB Cloud.
- **Jest:** Framework de teste.
- **Supertest:** Biblioteca de teste de integração HTTP.
- **Nodemon:** Utilitário que monitora alterações no código e reinicia automaticamente o servidor.
- **MongoDB Cloud:** Banco de dados NoSQL hospedado na nuvem.

## 📋 Pré-requisitos  

- **Node.js e npm:** Baixe em [https://nodejs.org/](https://nodejs.org/).
- **Git:** Baixe em [https://git-scm.com/](https://git-scm.com/).
- **Conta no MongoDB Cloud:** Crie uma conta e configure um cluster no [MongoDB Cloud](https://www.mongodb.com/cloud).

## ⚙️ Configuração do Projeto

1. **Clonar o Repositório:**

    ```bash
    git clone https://github.com/EdisonMatos/ExpressJS-MongoDB-Cloud.git
    ```

2. **Instalar Dependências:**

    ```bash
    npm install
    ```

3. **Configuração do MongoDB Cloud**

   Configure a URL de conexão com o MongoDB Cloud no arquivo `db/prismaClient.js`:

   ```javascript
   const prisma = new PrismaClient({
     datasources: {
       db: {
         url: "URL_MONGODB_CLOUD",
       },
     },
   });
   ```

   Substitua `"URL_MONGODB_CLOUD"` pela URL fornecida pelo MongoDB Cloud.

4. **Iniciar o Projeto**

    ```bash
    npm run dev
    ```

    O servidor será iniciado e estará acessível em [http://localhost:3000](http://localhost:3000).

5. **Testes Automatizados**

    ```bash
    npm test
    ```

## 📄 Endpoints

A aplicação possui os seguintes endpoints para manipulação de usuários:

### 1. Criação de Usuário

- **Método:** `POST`
- **Endpoint:** `/`
- **Payload de Exemplo:**
  ```json
  {
    "name": "John Doe"
  }
  ```

### 2. Listagem de Todos os Usuários

- **Método:** `GET`
- **Endpoint:** `/`

### 3. Detalhes de um Usuário

- **Método:** `GET`
- **Endpoint:** `/:id`

### 4. Atualização de um Usuário

- **Método:** `PATCH`
- **Endpoint:** `/:id`
- **Payload de Exemplo:**
  ```json
  {
    "name": "Updated Name"
  }
  ```

### 5. Exclusão de um Usuário

- **Método:** `DELETE`
- **Endpoint:** `/:id`

## 🧑‍💻 Autores

Este projeto foi desenvolvido por Edison Matos.

![Edison Matos](https://avatars.githubusercontent.com/u/17342047?s=200)

Edison Matos é um entusiasta da tecnologia, desenvolvedor backend de software e apaixonado por criar soluções inovadoras.<br>
Saiba mais sobre no [GitHub](https://github.com/EdisonMatos) para descobrir mais projetos e colaborações.

<br>

## 🤝 Contribuição

Se deseja contribuir para o desenvolvimento deste projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para suas alterações: `git checkout -b feature/nome-da-sua-feature`.
3. Faça as alterações desejadas e commit: `git commit -m 'Adiciona nova feature'`.
4. Push para a branch: `git push origin feature/nome-da-sua-feature`.
5. Abra um pull request para revisão.

<br>

## 📄 Licença

Este projeto é licenciado sob a Licença MIT.
