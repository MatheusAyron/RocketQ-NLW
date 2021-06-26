const express = require('express')
const route = require("./route")
const path = require('path')

const server = express()

server.set('view engine', 'ejs')    // Esse esta dizendo ao codigo que a view engine é a ejs

server.use(express.static("public"))    // como ele ja esta lendo a pasta "public", ele ja consegue ler os CSS e ent fazer a estilização, pq o html ja esta no index.ejs (os html antigos so servem para guardar por enquanto (pasta > htmls))

server.set('views', path.join(__dirname, 'views')) 
// significado da frase acima :     C:caminho-local/rockedq    +    __dirname= scr/views    = .../rockedq/scr/views   (caminho do pasta views que o codigo precisa para rodar)

server.use(express.urlencoded({extended: true}))  // miduer, age juntamente com o QustionControler, para pegar as informações e fazer a URL

server.use(route)  // Comando: server usa o arquivo "route", ai ele busca todas as routas necessarias 

server.listen(3000, () => console.log("RODANDO"))