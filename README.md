<div align="center">
  <img src="https://placehold.co/150x150/6366f1/ffffff?text=AF" alt="AutoFlow Logo" width="100">
  <h1>Landing Page AutoFlow</h1>
  <p>
    <strong>Uma landing page moderna, responsiva e interativa para apresentar serviços de automação de IA.</strong>
  </p>
  <p>
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  </p>
</div>

## 📄 Descrição

Bem-vindo ao repositório da landing page da **AutoFlow**. Este projeto foi desenvolvido para apresentar os serviços de automação de IA da empresa de forma moderna, responsiva e interativa, com foco em uma experiência de usuário rica e conversão de leads.

![Prévia da Landing Page](./images/autoflow-preview.png)

## ✨ Funcionalidades

-   🎨 **Design Responsivo:** Totalmente adaptável a desktops, tablets e celulares.
-   🎬 **Animações Dinâmicas:** Animações de entrada para as seções e interações de hover nos cards.
-   🧩 **Componentes Interativos:**
    -   Seção "Automação em Ação" com um fluxo animado.
    -   Linha do tempo vertical para explicar o processo "Como Funciona".
-   📈 **Otimização para SEO:** Estrutura de SEO com JSON-LD para melhor indexação nos motores de busca.
-   🔗 **Integrações Prontas:**
    -   Formulário de contato preparado para integração com **Formspree**.
    -   Configuração para **Google Analytics 4**.

## 🚀 Tecnologias Utilizadas

-   **Vite:** Ferramenta de build e servidor de desenvolvimento.
-   **Tailwind CSS:** Framework CSS utility-first.
-   **JavaScript (ES6+):** Para interatividade e manipulação do DOM.
-   **HTML5 & CSS3:** Estrutura e estilização base.

## 📂 Estrutura do Projeto

```
autoflow-vite/
├── public/
│   └── seo.json           # Dados estruturados para SEO
├── src/
│   ├── google-analytics.js  # Script de configuração do Google Analytics
│   ├── input.css          # Arquivo de estilos customizados e diretivas do Tailwind
│   └── main.js            # Ponto de entrada principal do JavaScript
├── .gitignore
├── index.html             # Arquivo HTML principal
├── package.json           # Dependências e scripts do projeto
├── postcss.config.js      # Configuração do PostCSS
├── tailwind.config.js     # Configuração do Tailwind CSS
└── README.md              # Este arquivo
```

## ⚙️ Configuração e Instalação

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

-   [Node.js](https://nodejs.org/) (versão 18 ou superior)
-   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/autoflow-vite.git](https://github.com/seu-usuario/autoflow-vite.git)
    cd autoflow-vite
    ```

2.  **Instale as dependências:**
    Execute o comando abaixo na raiz do projeto.
    ```bash
    npm install
    ```

3.  **Configure as integrações:**

    -   **Formulário de Contato (Formspree):**
        -   Abra o arquivo `index.html`.
        -   Encontre a linha do formulário (`<form action="...">`).
        -   Substitua `SEU_EMAIL_AQUI` pelo seu e-mail cadastrado no [Formspree](https://formspree.io/).

    -   **Google Analytics:**
        -   Abra o arquivo `src/google-analytics.js`.
        -   Substitua `G-SEUCODIGO` pelo seu ID de Métrica do Google Analytics 4.

    -   **SEO:**
        -   Abra o arquivo `public/seo.json`.
        -   Atualize os campos `url`, `logo`, `telephone` e `sameAs` com as informações reais da sua empresa.

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O projeto estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

## 📦 Build para Produção

Para gerar a versão final e otimizada do site para publicação:

1.  **Execute o comando de build:**
    ```bash
    npm run build
    ```

2.  **Publique a pasta `dist`:**
    O comando acima criará uma pasta `dist` na raiz do projeto. Faça o upload do conteúdo desta pasta para o seu servidor de hospedagem.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  Feito com ❤️
</div>