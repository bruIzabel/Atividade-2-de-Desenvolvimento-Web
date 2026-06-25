# Atividade 02 - Sistema Web

## Descrição

Este projeto consiste em uma aplicação web desenvolvida com:

* **Frontend:** React + Vite
* **Backend:** Node.js + Express
* **Banco de Dados:** SQLite
* **ORM:** Sequelize

O sistema permite a comunicação entre frontend e backend através de uma API REST.

---

# Pré-requisitos

Antes de executar o projeto, instale:

* Node.js 20 LTS
* npm
* Git

Recomenda-se utilizar o NVM para gerenciamento de versões do Node.

Verifique as versões instaladas:

```bash
node -v
npm -v
```

A versão do Node deve ser:

```bash
v20.x.x
```

---

# Estrutura do Projeto

```text
atividade02/
├── atividade02frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── atividade02backend/
    ├── models/
    ├── routes/
    ├── controllers/
    ├── database/
    ├── server.js
    └── package.json
```

---

# Instalação

## 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd atividade02
```

---

## 2. Configurar o Node 20

Caso utilize NVM:

```bash
nvm install 20
nvm use 20
nvm alias default 20
```

Verifique:

```bash
node -v
```

---

# Executando o Backend

Acesse a pasta do backend:

```bash
cd atividade02backend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

Caso esteja utilizando desenvolvimento com atualização automática:

```bash
npm run dev
```

O backend ficará disponível em:

```text
http://localhost:3001
```

---

# Executando o Frontend

Abra outro terminal e acesse:

```bash
cd atividade02frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O Vite exibirá um endereço semelhante a:

```text
http://localhost:5173
```

Abra esse endereço no navegador.

---

# Banco de Dados

O projeto utiliza SQLite.

O arquivo do banco será criado automaticamente quando o backend for iniciado pela primeira vez.

Caso seja necessário recriar o banco:

```bash
rm database.sqlite
npm start
```

---
# Manual de Uso do Sistema Merigold's Elixir

## Navegação da Loja

Ao acessar o sistema, o usuário é direcionado para a página principal da loja.

### AboutUsPage

A página **AboutUsPage** apresenta informações sobre a loja **Merigold's Elixir**, incluindo:

* A história da loja;
* A origem da marca;
---

## Visualização dos Produtos

Na página principal existe o botão:

```text
Nossos Produtos
```

Ao clicar nesse botão, o usuário é redirecionado para a página **BuyPage**.

A **BuyPage** é responsável por exibir os produtos disponíveis para compra, permitindo que os clientes visualizem os itens cadastrados no sistema.

---

# Área Administrativa

Para acessar a área administrativa:

1. Clique no botão **Login** presente na barra de navegação.
2. Preencha os campos com as seguintes credenciais:

### Email

```text
admin@merigold.com
```

### Senha

```text
admin123
```

3. Clique no botão:

```text
Entrar no Laboratório
```

Após a autenticação, o administrador será redirecionado para o painel de gerenciamento de produtos.

---

# Adicionar Produtos

Para cadastrar um novo produto:

1. Clique no botão:

```text
Adicionar Produto
```

2. Preencha todas as informações solicitadas no formulário.
3. Clique no botão de confirmação para salvar o produto.

Após o cadastro, o novo produto aparecerá automaticamente na lista de produtos disponíveis.

---

# Remover Produtos

Para excluir um produto existente:

1. Localize o produto desejado na lista exibida na tela.
2. Clique sobre o produto.
3. Clique no botão:

```text
Deletar
```

4. Confirme a exclusão quando solicitado pelo sistema.

Após a confirmação, o produto será removido permanentemente do catálogo.

---

# Encerrar Sessão

Para sair da área administrativa:

1. Localize o botão **Logout** na barra de navegação superior.
2. Clique em **Logout**.

O sistema encerrará a sessão atual e retornará o usuário para a área pública da loja.

---

# Resumo das Funcionalidades

### Cliente

* Visualizar a história da loja na AboutUsPage.
* Navegar para a página de produtos através do botão "Nossos Produtos".
* Consultar os produtos disponíveis na BuyPage.

### Administrador

* Realizar login no sistema.
* Adicionar novos produtos.
* Excluir produtos existentes.
* Encerrar a sessão através do botão Logout.

