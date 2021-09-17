const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Rota/Recurso
*/

/*
Métodos HTTP:
-GET: Buscar uma informação do back-end
-POST: Criar uma informação no back-end
-PUT: Alterar uma informação no back-end
-DELETE: Deletar uma informação no back-end
*/

/*
Tipos de parâmetros (usados no request):
-QUERY Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
-ROUTE Params: Parâmetros utilizados para identificar recursos
-REQUEST BODY: Corpo da requisição utilizado para criar ou alterar recursos
*/

/**
 * BASES DE DADOS
 * -SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * -NoSQL: MongoDB, CouchDB, etc
 */

/**
 * COMUNICAÇÃO COM A BASE DE DADDOS PODE SER FEITA DE 3 FORMAS:
 * Instalando o Driver: ex: SELECT * FROM users
 * Query Builder: ex: table("users").select("*").where(); -> O QUE NÓS VAMOS USAR (KNEX.JS)
 * 
 */

app.listen(3333);