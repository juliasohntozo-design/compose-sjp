# COMPOSE — Loja de Roupas 🩷

**Moda acessível, estilo e praticidade.**

A COMPOSE é um projeto acadêmico desenvolvido para a disciplina de Programação Front-End do curso de Análise e Desenvolvimento de Sistemas do Senac.

O projeto consiste em uma vitrine digital de uma loja de roupas, permitindo que os clientes visualizem produtos, consultem preços e entrem em contato com a loja de maneira simples e organizada.

## Sobre o projeto

A proposta da COMPOSE é facilitar a divulgação de produtos de uma loja de roupas por meio de um site intuitivo e acessível.

O site apresenta uma identidade visual delicada e minimalista, buscando transmitir praticidade e estilo.

## Funcionalidades

- Página inicial com apresentação da loja.
- Vitrine com produtos em destaque.
- Exibição de imagens, nomes e preços dos produtos.
- Navegação entre as páginas do site.
- Formulário de contato.
- Validação dos campos obrigatórios.
- Validação do tamanho do nome e da mensagem.
- Verificação básica do formato do e-mail.
- Envio de mensagens utilizando EmailJS.
- E-mail automático de confirmação de contato.
- Mensagem de retorno após o envio do formulário.

## Tecnologias utilizadas

- HTML5 — estrutura e organização do conteúdo.
- CSS3 — estilização e identidade visual.
- JavaScript — validações e funcionalidades interativas.
- EmailJS — integração para envio de e-mails.
- Google Fonts — tipografia do projeto.

## Estrutura do projeto

```text
COMPOSE/
│
├── index.html
├── produtos.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── img/
    ├── blusa.jpg
    ├── saia.jpg
    └── bolsa.jpg
```

## Formulário de contato

O formulário permite que o visitante entre em contato com a loja por meio de uma mensagem.

Antes do envio, o JavaScript realiza algumas validações:

- Verifica se todos os campos foram preenchidos.
- Verifica se o nome possui pelo menos 3 caracteres.
- Verifica se o e-mail possui um formato básico válido.
- Verifica se a mensagem possui pelo menos 10 caracteres.

Após a validação, a mensagem é enviada utilizando o EmailJS.

## Integração com EmailJS

O projeto utiliza o EmailJS para enviar e-mails sem a necessidade de desenvolver um backend próprio.

Quando o visitante envia o formulário:

1. O JavaScript valida os dados preenchidos.
2. O EmailJS recebe os dados do formulário.
3. Um e-mail automático de confirmação é enviado ao endereço informado.
4. O visitante recebe uma mensagem de sucesso no site.

O template de confirmação possui uma identidade visual personalizada, utilizando as cores e o estilo da marca COMPOSE.

## Como executar o projeto

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Instale a extensão Live Server.
4. Clique com o botão direito no arquivo `index.html`.
5. Selecione **Open with Live Server**.

O site será aberto no navegador.

## Configuração do EmailJS

Para testar o envio de e-mails:

1. Crie uma conta no EmailJS.
2. Conecte um serviço de e-mail.
3. Configure o template de confirmação.
4. Configure a Public Key no arquivo `js/script.js`.
5. Confira o Service ID e o Template ID utilizados no código.

As credenciais devem ser configuradas conforme a conta utilizada.

## Objetivo acadêmico

O projeto tem como objetivo aplicar os conhecimentos adquiridos em Programação Front-End, utilizando HTML, CSS e JavaScript para desenvolver uma aplicação web funcional.

A implementação também permite praticar validação de formulários, manipulação do DOM, eventos JavaScript e integração com uma API externa de envio de e-mails.

## Desenvolvido por

**Julia Sohn**

Análise e Desenvolvimento de Sistemas — Senac  
2026
