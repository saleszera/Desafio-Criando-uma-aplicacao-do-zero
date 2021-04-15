


<div  align="center">	
	<img src="https://github.com/saleszera/Desafio-Criando-uma-aplicacao-do-zero/blob/master/public/images/logo.svg" alt="spacetraveling" color="#2c2c2c">
</div>


<p  align="center">

<a  href="#-sobre-o-projeto">Sobre</a> •

<a  href="#%EF%B8%8F-funcionalidades">Funcionalidades</a> •

<a  href="#-como-executar-o-projeto">Como executar</a> •

<a  href="#-tecnologias">Tecnologias</a> •

<a  href="#%EF%B8%8F-captura-de-tela">Captura de tela</a> •

</p>




## 💻 Sobre o projeto


Spacetravelling é uma aplicação de blog que lista todas as postagens cadastradas por meio de um template criado no Prismic!

Projeto desenvolvido durante o **BootCamp - Ignite** da Rocketseat

O Ignite é uma experiência online com muito conteúdo prático, desafios e hacks.

---

## ⚙️ Funcionalidades

- [x] Carregar postagens criadas a partir do template Prismic
- [x] Carregar mais postagens
- [x] Exibir uma postagem em específico
- [x] Calculo do tempo de leitura do post
---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar das seguintes ferramentas:

- **[Git](https://git-scm.com)**
- **[Yarn](https://yarnpkg.com/getting-started/install)**
- **[NodeJs](https://nodejs.org/en/)**

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Observações:

Para o correto funcionamento da aplicação, precisaremos criar um repositório no **[Prismic.io](https://prismic.io/)**.  Após criar o repositório, crie um documento repetível com nome "**posts**", este documento terá 8 campos.
-   **slug**
    -   Tipo: UID
    -   Descrição: Identificador único amigável de cada post. Pode receber um valor manualmente ou é gerado automaticamente a partir do primeiro campo de texto preenchido. Esse campo vai ser utilizado na navegação do Next.
-   **title**
    -   Tipo: Key Text
    -   Descrição: Input de strings. Recebe valores manualmente. Esse campo será utilizado como título do Post.
-   **subtitle**
    -   Tipo: Key Text
    -   Descrição: Input de strings. Recebe valores manualmente. Esse campo será utilizado como subtítulo do Post.
-   **author**
    -   Tipo: Key Text
    -   Descrição: Input de strings. Recebe valores manualmente. Esse campo será utilizado como nome do autor do Post.
-   **banner**
    -   Tipo: Image
        
    -   Configurações do campo:
        
        ![https://live.staticflickr.com/65535/51117213249_ae8277b0da.jpg](https://live.staticflickr.com/65535/51117213249_ae8277b0da.jpg)
        
    -   Descrição: Input de imagens. Recebe valores manualmente. Esse campo será utilizado como banner do Post.
        
-   **content**
    -   Tipo: Group
    -   Descrição: Grupo de campos repetíveis. Esse campo será utilizado como o conteúdo do Post. O conteúdo será dividido em seções com um campo `heading` e um campo `body`.
    -   Campos internos:
        -   **heading**
            -   Tipo: Key Text
            -   Descrição: Input de strings. Recebe valores manualmente. Esse campo será utilizado como título da seção do Post.
        -   **body**
            -   Tipo: Rich Text
                
            -   Configurações do campo:
                
                ![https://live.staticflickr.com/65535/51116902782_9e21b67e40_w.jpg](https://live.staticflickr.com/65535/51116902782_9e21b67e40_w.jpg)
                
            -   Descrição: Input de _rich text_ (HTML). Recebe valores manualmente. Esse campo será utilizado como conteúdo da seção do Post. Perceba que nas configurações do campo, selecionamos algumas opções para que o seu texto tenha varias formatações (negrito, hyperlinks, listas, etc.).
                

Mesmo com as explicações acima, ficou em dúvida de como ficarão esses campos na sua página? Deixei abaixo um print descrevendo cada campo no resultado final para te ajudar:

![https://live.staticflickr.com/65535/51117466636_4049c2dae9_w.jpg](https://live.staticflickr.com/65535/51117466636_4049c2dae9_w.jpg)

![https://live.staticflickr.com/65535/51117468266_f25195883d_w.jpg](https://live.staticflickr.com/65535/51117468266_f25195883d_w.jpg)

1.  slug
2.  banner
3.  title
4.  first_publication_date (campo gerado automaticamente pelo Prismic)
5.  author
6.  content (primeiro grupo)
7.  content (segundo grupo)
8.  heading (primeiro grupo)
9.  body (primeiro grupo)
10.  heading (segundo grupo)
11.  body (segundo grupo)

Após a criação do template e de algumas postagens, precisaremos das configurações de API.
- Clique sem settings ![https://live.staticflickr.com/65535/51117422203_ea1e5dd2c7_t.jpg](https://live.staticflickr.com/65535/51117422203_ea1e5dd2c7_t.jpg) e depois em "**API & Security**".
- Copie o "**API Endpoint**"
- "**Repository security**", o Api Access Point deve ser setado como "**Public API for Master only - Require an access token to preview future releases**"
- "**Generate an Access Token**",  em Application name, insira um nome qualquer, sugiro "spacetraveling nextjs app". Clique em "**Add this application**" para gerar o token
- Após gerar o token, no campo "**Permanent access tokens**", copie o "**Access to master**"


### 🧭 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/saleszera/Desafio-Criando-uma-aplicacao-do-zero

# Acesse a pasta do projeto no seu terminal/cmd
$ cd Desafio-Criando-uma-aplicacao-do-zero

# Instale as dependências
$ yarn
```
#### Importante
Após a instalação das dependências, crie na raiz da aplicação o `.env.local`, neste arquivo cole o conteúdo do `.env.example`. As variáveis devem ser preenchidas da seguinte forma:
```plaintext
# Prismic
PRISMIC_ACCESS_TOKEN=Variavel obtida no campo API Endpoint
PRISMIC_API_ENDPOINT=Variavel obtida no campo Permanent access tokens em Access to master
PRISMIC_DOCUMENT_TYPE=nome do documento repetível, exemplo: "posts" 
```
Após o correto preenchimento do `.env.local` execute `yarn dev` para executar a aplicação.

## 🛠 Tecnologias


As seguintes ferramentas foram usadas na construção do projeto:


- **[NextJs](https://pt-br.reactjs.org/docs/getting-started.html) + [TypeScript](https://www.typescriptlang.org/)**
- **[React Icons](https://github.com/react-icons/react-icons)**
- **[date-fns](https://date-fns.org/)**
- **[React Sass](https://www.w3schools.com/react/react_sass.asp)**
- **[React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)**

> Veja o arquivo [package.json](https://github.com/saleszera/Desafio-Criando-uma-aplicacao-do-zero/blob/master/package.json)


#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)**

- Ferramenta de design de interfaces: **[Figma](www.figma.com)**

- CMS: **[Prismic](https://prismic.io/)**

- API: **[JSON Server](https://github.com/typicode/json-server)**

- Markdown: **[StackEdit](https://stackedit.io/)**

---
### 🎥️ Captura de tela
  <div align="center"  >
	  <img src="https://media.giphy.com/media/N9TXedfTeOMbKwQJ8X/giphy.gif"/>
  </div>  

---

Feito com ❤️ por Raniery Sales 👋🏽 [Entre em contato!](https://www.linkedin.com/in/raniery-sales/)

---
