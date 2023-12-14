# 🚀 ExpressJS API com MongoDB e Testes Unitários

Este repositório contém uma API CRUD simples desenvolvida com Node.js, Express e MongoDB. O objetivo desta API é realizar operações básicas de CRUD (Create, Read, Update, Delete) em uma entidade de usuário.

## 🛠️ Tecnologias Utilizadas

- **Node.js e npm:** Ambiente de execução e gerenciador de pacotes para JavaScript.
- **Express:** Framework web para Node.js.
- **MongoDB:** Banco de dados NoSQL utilizado para armazenamento dos dados.
- **Prisma:** ORM (Object-Relational Mapping) para interação com o MongoDB.
- **Jest:** Framework de teste para JavaScript.

## 📋 Pré-requisitos  

- **Node.js e npm:** Baixe em [https://nodejs.org/](https://nodejs.org/).
- **Git:** Baixe em [https://git-scm.com/](https://git-scm.com/).
- **MongoDB:** Instale e configure o MongoDB de acordo com suas necessidades.

## ⚙️ Configuração do Projeto

1. **Clonar o Repositório:**

    ```bash
    git clone https://github.com/EdisonMatos/ExpressJS-MongoDB-Cloud.git
    ```

2. **Instalar Dependências:**

    ```bash
    npm install
    ```

3. **Configuração do Ambiente**

   Certifique-se de ter o MongoDB instalado e configurado em sua máquina ou utilize um serviço de MongoDB em nuvem.

4. **Iniciar o Projeto em Ambiente de Desenvolvimento**

    ```bash
    npm run dev
    ```

5. **Executar Testes**

    ```bash
    npm test
    ```

    Isso iniciará o Jest no modo de observação para execução dos testes automaticamente.

## 🧑‍💻 Testes Automatizados

O projeto utiliza o Jest para testes automatizados. Os testes abrangem as principais operações da API, garantindo que as funcionalidades estão corretas e seguras.

## 🔍 Usando a Aplicação

Para testar a aplicação, você pode utilizar ferramentas como [Postman](https://www.postman.com/downloads/), [Insomnia](https://insomnia.rest/download/), ou simplesmente realizar requisições HTTP utilizando cURL ou ferramentas semelhantes.

Aqui estão alguns exemplos de como usar as rotas:

### Criar Usuário

- **Método:** `POST`
- **Endpoint:** `http://localhost:3000/`
- **Payload de Exemplo:**
  ```json
  {
    "name": "John Doe"
  }
  ```

### Buscar Todos os Usuários

- **Método:** `GET`
- **Endpoint:** `http://localhost:3000/`

### Buscar Usuário por ID

- **Método:** `GET`
- **Endpoint:** `http://localhost:3000/:id`
- Substitua `:id` pelo ID do usuário desejado.

### Atualizar Usuário por ID

- **Método:** `PATCH`
- **Endpoint:** `http://localhost:3000/:id`
- Substitua `:id` pelo ID do usuário desejado.
- **Payload de Exemplo:**
  ```json
  {
    "name": "New Name"
  }
  ```

### Deletar Usuário por ID

- **Método:** `DELETE`
- **Endpoint:** `http://localhost:3000/:id`
- Substitua `:id` pelo ID do usuário desejado.

Lembre-se de substituir `http://localhost:3000` pelo endereço correto da sua aplicação se estiver rodando em um ambiente diferente.

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
