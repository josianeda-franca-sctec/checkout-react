# TechStore Checkout

> Aplicação de checkout desenvolvida em React para simular o fluxo de finalização de uma compra em uma loja virtual.

---

## 📌 Sobre o projeto

O **TechStore Checkout** é uma aplicação web desenvolvida como projeto avaliativo do **Módulo II** do curso **Carreira Tech - Trilha Desenvolvimento de Software**.

**Projeto desenvolvido pela aluna Josiane da França.**

A aplicação simula o checkout de uma loja virtual, permitindo ao usuário visualizar os produtos do carrinho, conferir subtotais e o valor total da compra, preencher dados fictícios de pagamento e receber uma resposta de aprovação ou falha.

Todo o processamento ocorre no navegador, sem utilização de backend ou gateway de pagamento real.

---

## 🛒 Funcionalidades

A aplicação possui:

- carrinho fixo com três produtos;
- exibição de nome, preço unitário, quantidade e subtotal;
- cálculo automático do valor total da compra;
- formatação dos valores em Real brasileiro;
- navegação entre páginas utilizando React Router;
- formulário de pagamento utilizando React Hook Form;
- validação dos campos utilizando Zod;
- máscara para número do cartão e validade;
- validação do nome do titular;
- validação de cartão com 16 dígitos;
- validação da validade no formato MM/AA;
- validação de CVV com três dígitos;
- processamento assíncrono simulado;
- bloqueio do botão durante o processamento;
- regra de identificação de cartões com todos os dígitos iguais;
- página de compra aprovada;
- página de falha com a mensagem `tentativa de golpe`;
- interface responsiva para celular e desktop;
- recursos de acessibilidade, como labels, foco visível e mensagens de erro acessíveis.

---

## 💳 Regra de pagamento

O pagamento é apenas uma simulação.

Após a validação do formulário:

- cartões válidos com 16 dígitos que não sejam todos iguais são aprovados;
- cartões em que todos os 16 dígitos são iguais são rejeitados;
- nesse caso, o usuário é direcionado para a página de falha com a mensagem:

```text
tentativa de golpe
```

Nenhum dado de pagamento é enviado ou armazenado.

---

## 🛠️ Tecnologias utilizadas

- React
- JavaScript
- JSX
- Vite
- React Router
- React Hook Form
- Zod
- CSS
- Git
- GitHub

---

## 🧠 Conceitos aplicados

Durante o desenvolvimento foram utilizados:

- componentes funcionais;
- props;
- renderização de listas com `map`;
- uso de `key`;
- arrays e objetos;
- métodos de array;
- `useState`;
- eventos em React;
- renderização condicional;
- custom hooks;
- Promises;
- `async/await`;
- validação de formulários;
- rotas e navegação;
- responsividade;
- acessibilidade;
- organização modular do código.

---

## 📁 Estrutura do projeto

```text
checkout-react/
├── src/
│   ├── assets/
│   │   ├── img/
│   │   └── styles/
│   │       └── index.css
│   ├── components/
│   │   ├── Cabecalho.jsx
│   │   ├── ItemCarrinho.jsx
│   │   └── ResumoCompra.jsx
│   ├── data/
│   │   └── produtos.js
│   ├── hooks/
│   │   └── usePagamento.js
│   ├── pages/
│   │   ├── Carrinho.jsx
│   │   ├── Pagamento.jsx
│   │   ├── Sucesso.jsx
│   │   └── Falha.jsx
│   ├── utils/
│   │   ├── carrinho.js
│   │   └── pagamento.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── README.md
└── vite.config.js
```

---

## ▶️ Como executar o projeto

É necessário possuir o **Node.js** e o **npm** instalados.

### 1. Clone o repositório

```bash
git clone https://github.com/josianeda-franca-sctec/checkout-react.git
```

### 2. Entre na pasta do projeto

```bash
cd checkout-react
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O terminal exibirá um endereço semelhante a:

```text
http://localhost:5173/
```

Abra o endereço apresentado pelo Vite no navegador.

---

## 🔄 Fluxo da aplicação

```text
Carrinho
   │
   ▼
Pagamento
   │
   ▼
Processamento
   │
   ├───────────────┐
   ▼               ▼
Sucesso          Falha
                   │
                   ▼
          "tentativa de golpe"
```

---

## ♿ Acessibilidade

Foram implementados recursos básicos de acessibilidade, como:

- associação entre `label` e campos do formulário;
- foco visível para navegação por teclado;
- indicação visual de campos inválidos;
- mensagens de erro com `role="alert"`;
- atributos `aria-invalid`;
- atributos `aria-describedby`;
- textos alternativos nas imagens.

---

## 📱 Responsividade

A interface foi desenvolvida para funcionar em diferentes tamanhos de tela, incluindo:

- smartphones;
- tablets;
- computadores.

Foram utilizadas **media queries** no CSS para adaptar o layout aos diferentes tamanhos de tela.

---

## 🤖 Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento para:

- esclarecimento de dúvidas;
- auxílio na identificação de erros;
- sugestões de organização do código;
- revisão das validações;
- melhorias de acessibilidade e responsividade.

Todas as sugestões utilizadas foram revisadas, testadas e adaptadas ao conteúdo estudado durante o curso.

---

## 🚀 Melhorias futuras

Algumas melhorias que poderiam ser implementadas futuramente:

- integração com uma API de produtos;
- alteração da quantidade dos itens no carrinho;
- remoção de produtos;
- histórico de compras;
- integração com um gateway de pagamento real.

---

## 📋 Organização do projeto

As atividades e etapas de desenvolvimento foram organizadas utilizando o **Trello**.

**Quadro do projeto:**  
https://trello.com/b/5c0zvtci/projeto-checkout-react

---

## 🔗 Links do projeto

**Repositório no GitHub:**  
https://github.com/josianeda-franca-sctec/checkout-react

**Vídeo de apresentação:**  
https://drive.google.com/file/d/15Xw-uLkMD1rxhtRMzTnA_hlky2_O2QXd/view?usp=drive_link

---

## 👩‍💻 Autoria

**Josiane da França**

Projeto desenvolvido como atividade avaliativa do **Módulo II do curso Carreira Tech - Trilha Desenvolvimento de Software**.
