# Convert

O **Convert** é uma aplicação web desenvolvida com **HTML5**, **CSS3** e **JavaScript** para realizar a conversão de moedas estrangeiras para **Real Brasileiro (BRL)**. A interface permite informar um valor, selecionar uma moeda (Dólar, Euro ou Libra Esterlina) e visualizar o resultado da conversão de forma simples e intuitiva.

Este projeto faz parte dos desafios práticos da **Rocketseat**, com foco em manipulação do DOM, eventos, formulários e lógica com JavaScript.

---

## ✨ Funcionalidades

* Conversão de moedas para Real Brasileiro (BRL).
* Suporte às moedas:

  * Dólar Americano (USD)
  * Euro (EUR)
  * Libra Esterlina (GBP)
* Validação do campo de valor.
* Restrição de entrada para caracteres numéricos.
* Exibição da cotação utilizada.
* Atualização dinâmica do resultado sem recarregar a página.
* Interface moderna e responsiva.

---

## 🚀 Tecnologias utilizadas

| Tecnologia        | Finalidade                               |
| ----------------- | ---------------------------------------- |
| HTML5             | Estrutura da aplicação                   |
| CSS3              | Estilização                              |
| JavaScript (ES6+) | Lógica de conversão e manipulação do DOM |
| Google Fonts      | Tipografia (Roboto e IBM Plex Mono)      |

---

## 📦 Estrutura do projeto

```text
Projeto-Convert/
├── img/
│   ├── bg.png
│   ├── check.svg
│   ├── chevron-down.svg
│   └── logo.svg
├── index.html
├── scripts.js
└── styles.css
```

### Organização

| Arquivo/Pasta | Descrição                                       |
| ------------- | ----------------------------------------------- |
| `index.html`  | Estrutura principal da aplicação                |
| `styles.css`  | Estilos da interface                            |
| `scripts.js`  | Lógica da conversão e manipulação do formulário |
| `img/`        | Imagens, ícones e logotipo da aplicação         |

---

## ⚙️ Pré-requisitos

Para executar o projeto é necessário apenas:

* Um navegador moderno (Google Chrome, Firefox, Edge ou Safari).

---

## 🔧 Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd Projeto-Convert
```

---

## ▶️ Como executar

Como este é um projeto estático, basta abrir o arquivo `index.html` no navegador.

Durante o desenvolvimento, recomenda-se utilizar a extensão **Live Server** do Visual Studio Code para atualização automática da página.

---

## 🧪 Testes

Este projeto não possui testes automatizados.

---

## 📚 Funcionamento

O fluxo da aplicação é composto pelas seguintes etapas:

1. Informar o valor que será convertido.
2. Selecionar a moeda desejada.
3. Clicar em **Converter em reais**.
4. A aplicação calcula automaticamente o valor convertido utilizando a cotação definida no código.
5. O resultado é exibido juntamente com a cotação utilizada.

### Moedas disponíveis

| Código | Moeda           |
| ------ | --------------- |
| USD    | Dólar Americano |
| EUR    | Euro            |
| GBP    | Libra Esterlina |

> **Observação:** as cotações são fixas e definidas diretamente no arquivo `scripts.js`.

---

## 🌎 Variáveis de ambiente

Este projeto não utiliza variáveis de ambiente.

---

## 📄 Scripts disponíveis

Não existem scripts automatizados, pois o projeto utiliza apenas HTML, CSS e JavaScript puro.

---

## 📌 Roadmap

* Consumir cotações em tempo real utilizando uma API de câmbio.
* Adicionar suporte para novas moedas.
* Permitir conversão entre quaisquer moedas.
* Aceitar valores decimais no campo de entrada.
* Exibir histórico das conversões realizadas.
* Implementar modo escuro.
* Internacionalizar a interface.
* Adicionar animações para a exibição do resultado.

---
