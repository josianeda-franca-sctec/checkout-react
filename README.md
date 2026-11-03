# TechStore — Loja Virtual em React

> Aplicação web de comércio eletrônico desenvolvida em React, com catálogo de produtos, busca, carrinho de compras, checkout e simulação de pagamento.

## 📌 Sobre o projeto

A **TechStore** é uma aplicação desenvolvida como projeto avaliativo do **Módulo II** do curso **Carreira Tech — Trilha Desenvolvimento de Software**, pela aluna **Josiane da França**.

O projeto representa a evolução de uma aplicação de checkout para uma loja virtual, aplicando conceitos de React, componentização, gerenciamento de estado, consumo de API, navegação, validação de formulários, testes automatizados e publicação web.

**Acesse a aplicação:** https://techstorejosi.netlify.app

O pagamento é inteiramente simulado. Não existe integração com gateway de pagamento real.

---

## 🛒 Funcionalidades

### Catálogo de produtos

- Listagem de 12 produtos de tecnologia.
- Consumo de dados de uma API simulada com `json-server`.
- Exibição de nome, imagem, categoria, preço e disponibilidade.
- Busca e filtragem de produtos.
- Tratamento dos estados de carregamento e erro.
- Página de detalhes com rota dinâmica `/produtos/:id`.
- Tratamento de produtos inexistentes.

### Carrinho de compras

- Adição de produtos ao carrinho.
- Gerenciamento global do carrinho com Context API.
- Hook personalizado `useCarrinho`.
- Alteração da quantidade de produtos, respeitando o estoque.
- Remoção de produtos.
- Cálculo automático de subtotais e valor total.
- Indicador da quantidade de itens no cabeçalho.
- Persistência dos itens no `localStorage`.
- Exibição de mensagem quando o carrinho está vazio.

### Checkout e pagamento

- Rota de pagamento protegida contra acesso com carrinho vazio.
- Resumo dos produtos e valores da compra.
- Formulário utilizando React Hook Form.
- Validação utilizando Zod.
- Máscaras para número e validade do cartão.
- Validação de titular, número do cartão, validade e CVV.
- Processamento assíncrono simulado.
- Bloqueio do botão durante o processamento.
- Página de sucesso e página de falha.
- Limpeza do carrinho após pagamento aprovado.

### Interface e navegação

- React Router para navegação entre páginas.
- Layout compartilhado com cabeçalho e rodapé.
- Página personalizada para rotas inexistentes.
- Componentes reutilizáveis.
- Interface responsiva.
- Recursos de acessibilidade.

---

## 💳 Regra de pagamento

O pagamento é uma simulação destinada ao aprendizado.

Após a validação dos campos, a aplicação verifica o número do cartão:

- Cartões que atendem às validações e não possuem todos os dígitos iguais podem ser aprovados.
- Cartões com todos os 16 dígitos iguais são rejeitados.
- Em caso de rejeição por essa regra, a aplicação apresenta a mensagem `tentativa de golpe`.

Nenhuma transação financeira real é realizada.

---

## 🛠️ Tecnologias utilizadas

- React
- JavaScript e JSX
- Vite
- React Router
- Context API
- React Hooks
- React Hook Form
- Zod
- PropTypes
- Material UI
- CSS e CSS Modules
- JSON Server
- LocalStorage
- Vitest
- ESLint
- Git e GitHub
- Netlify

---

## 🧠 Conceitos aplicados

O desenvolvimento permitiu praticar:

- Componentização e reutilização de interfaces.
- Props e validação de propriedades.
- Estados com `useState`.
- Efeitos colaterais com `useEffect`.
- Otimização com `useMemo`.
- Gerenciamento de estado com Context API.
- Hooks personalizados.
- Renderização condicional e listas.
- Consumo de dados com `fetch`.
- Promises e `async/await`.
- Tratamento de erros e carregamento.
- Rotas dinâmicas e protegidas.
- Validação de formulários.
- Persistência de dados no navegador.
- Testes automatizados.
- Responsividade e acessibilidade.
- Organização modular e princípios de Clean Code.
- Versionamento com GitFlow.

---

## ▶️ Como executar o projeto

É necessário ter Node.js e npm instalados.

### 1. Clonar o repositório

```bash
git clone https://github.com/josianeda-franca-sctec/checkout-react.git
```

### 2. Entrar na pasta

```bash
cd checkout-react
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar a API simulada

Em um terminal:

```bash
npm run api
```

A API estará disponível em:

```text
http://localhost:3001/produtos
```

### 5. Iniciar o React

Em outro terminal:

```bash
npm run dev
```

Acesse o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173/
```

**Importante:** no ambiente de desenvolvimento, a API simulada e o Vite precisam estar em execução simultaneamente.

---

## 🌐 API e publicação na Netlify

Durante o desenvolvimento, os produtos são consultados por meio do `json-server`, utilizando os dados do arquivo `db.json`.

Na versão de produção, o catálogo é disponibilizado pelo arquivo estático `public/produtos.json`, permitindo o funcionamento da aplicação na Netlify sem a necessidade de hospedar um servidor `json-server`.

O projeto também utiliza o arquivo `public/_redirects` para permitir o acesso direto às rotas da aplicação React.

**Aplicação publicada:** https://techstorejosi.netlify.app

---

## 🧪 Testes e qualidade do código

O projeto utiliza Vitest para testar funções utilitárias relacionadas a:

- Cálculo do valor total do carrinho.
- Busca e filtragem de produtos.
- Identificação de cartões com dígitos repetidos.

Foram implementados **11 testes automatizados**, distribuídos em três arquivos de testes.

Para executar:

```bash
npx vitest run
```

Para verificar o código com ESLint:

```bash
npm run lint
```

Para gerar a versão de produção:

```bash
npm run build
```

Na validação final, os 11 testes passaram, assim como o ESLint e o build de produção.

---

## 🔄 Fluxo da aplicação

```text
Catálogo de produtos
        |
        +---- Busca e filtragem
        |
        +---- Detalhes do produto
        |
        v
Adicionar ao carrinho
        |
        v
Carrinho de compras
        |
        +---- Alterar quantidades
        +---- Remover produtos
        +---- Conferir total
        |
        v
Pagamento
        |
        v
Validação e processamento
        |
        +----------+
        |          |
        v          v
     Sucesso      Falha
```

---

## ♿ Acessibilidade

A aplicação incorpora recursos como:

- Campos associados aos respectivos labels.
- Textos alternativos em imagens.
- Identificação de campos inválidos.
- Mensagens de erro acessíveis.
- Foco visível para navegação por teclado.
- Atributos ARIA em componentes relevantes.
- Botões com descrições de suas ações.

---

## 📱 Responsividade

A interface foi desenvolvida para diferentes tamanhos de tela, incluindo smartphones, tablets e computadores.

O projeto utiliza CSS, CSS Modules e media queries para adaptar os componentes às dimensões disponíveis.

---

## 📋 Organização do desenvolvimento

O projeto foi organizado com apoio do **Trello** e versionado no **GitHub**, utilizando branches de funcionalidades, Pull Requests e integração de alterações.

**Quadro do Trello:**  
https://trello.com/b/6nSJi5lU/projeto-semana-12-evolucao-checkout-react

---

## 🤖 Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio para:

- Esclarecimento de dúvidas sobre React e JavaScript.
- Identificação e correção de erros.
- Sugestões de organização e componentização.
- Revisão de validações.
- Apoio na implementação de testes.
- Melhorias de acessibilidade e responsividade.
- Orientações sobre Git, GitHub e publicação.

As sugestões foram revisadas, testadas e adaptadas aos conteúdos estudados durante o curso.

---

## 🚀 Possíveis melhorias futuras

- Integração com uma API real de produtos.
- Autenticação de usuários.
- Histórico de pedidos.
- Integração com um gateway de pagamento real.
- Testes de integração e ponta a ponta.
- Otimizações adicionais de desempenho e carregamento.

---

## 🔗 Links

**Aplicação publicada:**  
https://techstorejosi.netlify.app

**Repositório GitHub:**  
https://github.com/josianeda-franca-sctec/checkout-react.git

**Vídeo de apresentação do projeto inicial:**  
https://drive.google.com/file/d/15Xw-uLkMD1rxhtRMzTnA_hlky2_O2QXd/view?usp=drive_link

**Vídeo de apresentação do projeto final:** 
https://drive.google.com/file/d/1DOPY17ce-JCKyNKNJb3gUxRwhI9rL-OP/view?usp=drive_link

---

## 👩‍💻 Autoria

**Josiane da França**

Projeto desenvolvido como atividade avaliativa do **Módulo II do curso Carreira Tech — Trilha Desenvolvimento de Software**.