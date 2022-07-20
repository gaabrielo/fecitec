
# Fecitec

A Feira de Ciência e Tecnologia de Palotina (FECITEC) é um evento que busca incentivar a produção científica nas escolas através da apresentação de projetos e experimentos. É um projeto de extensão proposto pela Universidade Federal do Paraná (UFPR) Setor Palotina


## Variáveis de Ambiente

Para enviar os e-mails (usando o gmail), você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`EMAIL_USER` (Endereço de e-mail)

`EMAIL_PASS` (Senha de aplicativo da conta)


## Instalação

Instale os módulos com yarn

```bash
  cd frontend
  yarn install
  cd ../backend
  yarn install
```
    
## Rodando localmente

Inicie o ambiente em React.JS

```bash
  cd frontend
  yarn start
```

Inicie o servidor em NodeJS

```bash
  cd backend
  yarn dev
```
## Deploy

Fazer deploy do backend (NodeJS) e frondend (React.JS). Irá gerar duas pastas com os arquivos para produção:

- frontend/build
- backend/dist

```bash
  cd frontend
  yarn build
  cd ../backend
  yarn build
```


## Stack utilizada

**Front-end:** React

**Back-end:** Node, Express


## Licença

[MIT](https://choosealicense.com/licenses/mit/)


