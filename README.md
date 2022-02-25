# API com Typescript

## Tecnologias Utilizadas:
- nodejs
- express
- mongodb
- mongoose
- swagger-ui-express
- dotenv
- ts-node-dev

### Criar arquivo .env na raiz:
```bash
DB_CONN_STRING=mongodb+srv://COLOCARNOMEUSUARIO:COLOCARSENHA@cluster0.qhjsx.mongodb.net/COLOCARNOMEDABASEDEDADOS?retryWrites=true&w=majority
DB_NAME="dbapi"
```


### Instalar as dependencias:

```bash
$ yarn install
```
ou

```bash
$ npm install
```
Para iniciar o projeto:
```bash
$ yarn dev
```
ou
```bash
$ npm dev
```

### Acessar a documentação da API utilizando swagger:

[http://localhost:3131/api-docs](http://localhost:3131/api-docs)
